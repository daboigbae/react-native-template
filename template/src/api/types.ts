import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

// API Configuration Interface
export interface ApiConfig {
  baseURL: string;
  timeout?: number;
  headers?: Record<string, string>;
}

// Token Management Interface
export interface TokenData {
  accessToken: string;
  refreshToken?: string;
  expiresAt?: number;
}

// API Response Interface
export interface ApiResponse<T = any> {
  data: T;
  message?: string;
  success: boolean;
  status: number;
}

// API Error Interface
export interface ApiError {
  message: string;
  status: number;
  code?: string;
  details?: any;
}

// Error Response Data Interface
export interface ErrorResponseData {
  message?: string;
  code?: string;
  errors?: Record<string, string[]>;
  [key: string]: any;
}

// Token Storage Keys
export const TOKEN_KEYS = {
  ACCESS_TOKEN: 'access_token',
  REFRESH_TOKEN: 'refresh_token',
  TOKEN_EXPIRES_AT: 'token_expires_at',
} as const;

// HTTP Methods
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

// Request Configuration Interface
export interface RequestConfig extends AxiosRequestConfig {
  _retry?: boolean;
}

// Refresh Token Response Interface
export interface RefreshTokenResponse {
  accessToken: string;
  refreshToken?: string;
  expiresIn: number;
}

// API Client Interface
export interface IApiClient {
  get<T = any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>>;
  post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>>;
  put<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>>;
  delete<T = any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>>;
  patch<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>>;
  setTokens(tokenData: TokenData): Promise<void>;
  clearAuthTokens(): Promise<void>;
  isTokenValid(): Promise<boolean>;
  getAxiosInstance(): any;
}

// Error Handler Interface
export interface ErrorHandler {
  handleError(error: AxiosError): ApiError;
}

// Token Manager Interface
export interface TokenManager {
  getStoredToken(): Promise<string | null>;
  refreshToken(): Promise<string | null>;
  storeTokens(tokenData: TokenData): Promise<void>;
  clearTokens(): Promise<void>;
}

// Interceptor Types
export type RequestInterceptor = (
  config: AxiosRequestConfig
) => Promise<AxiosRequestConfig>;
export type ResponseInterceptor = (response: AxiosResponse) => AxiosResponse;
export type ErrorInterceptor = (error: AxiosError) => Promise<any>;

// API Endpoint Types
export interface ApiEndpoint {
  method: HttpMethod;
  url: string;
  requiresAuth?: boolean;
}

// Pagination Interface
export interface PaginationParams {
  page?: number;
  limit?: number;
  offset?: number;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Query Parameters Interface
export interface QueryParams {
  [key: string]: string | number | boolean | undefined;
}

// File Upload Interface
export interface FileUpload {
  uri: string;
  type: string;
  name: string;
}

// Form Data Interface
export interface FormData {
  [key: string]: string | number | boolean | FileUpload | FileUpload[];
}

// Common API Response Types
export interface SuccessResponse<T = any> {
  success: true;
  data: T;
  message?: string;
}

export interface ErrorResponse {
  success: false;
  error: {
    message: string;
    code?: string;
    details?: any;
  };
}

// Generic API Response Union
export type ApiResult<T = any> = SuccessResponse<T> | ErrorResponse;

// Authentication Types
export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
  };
  tokens: {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
  };
}

export interface RegisterRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface RefreshTokenRequest {
  refreshToken: string;
}
