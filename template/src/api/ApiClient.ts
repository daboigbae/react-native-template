import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import {
  ApiConfig,
  ApiError,
  ApiResponse,
  ErrorResponseData,
  IApiClient,
  RefreshTokenResponse,
  RequestConfig,
  TOKEN_KEYS,
  TokenData,
} from './types';

class ApiClient implements IApiClient {
  private axiosInstance: AxiosInstance;
  private isRefreshing = false;
  private refreshSubscribers: Array<(token: string) => void> = [];

  constructor(config: ApiConfig) {
    this.axiosInstance = axios.create({
      baseURL: config.baseURL,
      timeout: config.timeout || 10000,
      headers: {
        'Content-Type': 'application/json',
        ...config.headers,
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    // Request interceptor to add auth token
    this.axiosInstance.interceptors.request.use(
      async config => {
        const token = await this.getStoredToken();
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      error => Promise.reject(error)
    );

    // Response interceptor to handle token refresh
    this.axiosInstance.interceptors.response.use(
      response => response,
      async (error: AxiosError) => {
        const originalRequest = error.config as RequestConfig;

        if (error.response?.status === 401 && !originalRequest._retry) {
          if (this.isRefreshing) {
            // If already refreshing, wait for it to complete
            return new Promise(resolve => {
              this.refreshSubscribers.push((token: string) => {
                originalRequest.headers!.Authorization = `Bearer ${token}`;
                resolve(this.axiosInstance(originalRequest));
              });
            });
          }

          originalRequest._retry = true;
          this.isRefreshing = true;

          try {
            const newToken = await this.refreshToken();
            if (newToken) {
              this.refreshSubscribers.forEach(callback => callback(newToken));
              this.refreshSubscribers = [];
              originalRequest.headers!.Authorization = `Bearer ${newToken}`;
              return this.axiosInstance(originalRequest);
            }
          } catch (refreshError) {
            this.refreshSubscribers.forEach(callback => callback(''));
            this.refreshSubscribers = [];
            await this.clearTokens();
            // Redirect to login or handle auth failure
            return Promise.reject(refreshError);
          } finally {
            this.isRefreshing = false;
          }
        }

        return Promise.reject(this.handleError(error));
      }
    );
  }

  private async getStoredToken(): Promise<string | null> {
    try {
      const token = await AsyncStorage.getItem(TOKEN_KEYS.ACCESS_TOKEN);
      const expiresAt = await AsyncStorage.getItem(TOKEN_KEYS.TOKEN_EXPIRES_AT);

      if (token && expiresAt) {
        const expirationTime = parseInt(expiresAt, 10);
        const currentTime = Date.now();

        // Check if token is expired (with 5 minute buffer)
        if (currentTime < expirationTime - 300000) {
          return token;
        }
      }

      return null;
    } catch (error) {
      console.error('Error getting stored token:', error);
      return null;
    }
  }

  private async refreshToken(): Promise<string | null> {
    try {
      const refreshToken = await AsyncStorage.getItem(TOKEN_KEYS.REFRESH_TOKEN);

      if (!refreshToken) {
        throw new Error('No refresh token available');
      }

      // Make refresh token request
      const response = await axios.post(
        `${this.axiosInstance.defaults.baseURL}/auth/refresh`,
        {
          refreshToken,
        }
      );

      const {
        accessToken,
        refreshToken: newRefreshToken,
        expiresIn,
      }: RefreshTokenResponse = response.data;

      // Store new tokens
      await this.storeTokens({
        accessToken,
        refreshToken: newRefreshToken || refreshToken,
        expiresAt: Date.now() + expiresIn * 1000,
      });

      return accessToken;
    } catch (error) {
      console.error('Token refresh failed:', error);
      throw error;
    }
  }

  private async storeTokens(tokenData: TokenData) {
    try {
      await AsyncStorage.multiSet([
        [TOKEN_KEYS.ACCESS_TOKEN, tokenData.accessToken],
        [TOKEN_KEYS.REFRESH_TOKEN, tokenData.refreshToken || ''],
        [TOKEN_KEYS.TOKEN_EXPIRES_AT, tokenData.expiresAt?.toString() || ''],
      ]);
    } catch (error) {
      console.error('Error storing tokens:', error);
    }
  }

  private async clearTokens() {
    try {
      await AsyncStorage.multiRemove([
        TOKEN_KEYS.ACCESS_TOKEN,
        TOKEN_KEYS.REFRESH_TOKEN,
        TOKEN_KEYS.TOKEN_EXPIRES_AT,
      ]);
    } catch (error) {
      console.error('Error clearing tokens:', error);
    }
  }

  private handleError(error: AxiosError): ApiError {
    if (error.response) {
      // Server responded with error status
      const responseData = error.response.data as ErrorResponseData;
      return {
        message: responseData?.message || 'Server error occurred',
        status: error.response.status,
        code: responseData?.code,
        details: responseData,
      };
    } else if (error.request) {
      // Request was made but no response received
      return {
        message: 'Network error - please check your connection',
        status: 0,
        code: 'NETWORK_ERROR',
      };
    } else {
      // Something else happened
      return {
        message: error.message || 'An unexpected error occurred',
        status: 0,
        code: 'UNKNOWN_ERROR',
      };
    }
  }

  // Public methods for API calls
  async get<T = any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.get(
        url,
        config
      );
      return {
        data: response.data,
        success: true,
        status: response.status,
      };
    } catch (error) {
      throw this.handleError(error as AxiosError);
    }
  }

  async post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.post(
        url,
        data,
        config
      );
      return {
        data: response.data,
        success: true,
        status: response.status,
      };
    } catch (error) {
      throw this.handleError(error as AxiosError);
    }
  }

  async put<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.put(
        url,
        data,
        config
      );
      return {
        data: response.data,
        success: true,
        status: response.status,
      };
    } catch (error) {
      throw this.handleError(error as AxiosError);
    }
  }

  async patch<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.patch(
        url,
        data,
        config
      );
      return {
        data: response.data,
        success: true,
        status: response.status,
      };
    } catch (error) {
      throw this.handleError(error as AxiosError);
    }
  }

  async delete<T = any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.delete(
        url,
        config
      );
      return {
        data: response.data,
        success: true,
        status: response.status,
      };
    } catch (error) {
      throw this.handleError(error as AxiosError);
    }
  }

  // Token management methods
  async setTokens(tokenData: TokenData) {
    await this.storeTokens(tokenData);
  }

  async clearAuthTokens() {
    await this.clearTokens();
  }

  async isTokenValid(): Promise<boolean> {
    const token = await this.getStoredToken();
    return token !== null;
  }

  // Get the axios instance for custom requests
  getAxiosInstance(): AxiosInstance {
    return this.axiosInstance;
  }
}

export default ApiClient;
