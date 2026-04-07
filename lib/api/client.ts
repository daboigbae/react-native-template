// Axios instance with token interceptor + refresh dedupe. See topic 11.
import axios, { AxiosError, type InternalAxiosRequestConfig } from 'axios';
import { env } from '@/lib/constants/env';
import { tokens } from '@/lib/auth/tokens';

export const api = axios.create({
  baseURL: env.EXPO_PUBLIC_API_BASE_URL,
  timeout: 15000,
});

api.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
  const { access } = await tokens.get();
  if (access) config.headers.Authorization = `Bearer ${access}`;
  return config;
});

// Refresh dedupe — only one in-flight refresh at a time.
let refreshPromise: Promise<string | null> | null = null;

async function refreshAccessToken(): Promise<string | null> {
  if (refreshPromise) return refreshPromise;
  refreshPromise = (async () => {
    try {
      const { refresh } = await tokens.get();
      if (!refresh) return null;
      // TODO: replace with your real refresh endpoint
      const res = await axios.post(`${env.EXPO_PUBLIC_API_BASE_URL}/auth/refresh`, { refresh });
      const { access, refresh: newRefresh } = res.data;
      await tokens.set(access, newRefresh ?? refresh);
      return access;
    } catch {
      await tokens.clear();
      return null;
    } finally {
      refreshPromise = null;
    }
  })();
  return refreshPromise;
}

api.interceptors.response.use(
  (r) => r,
  async (error: AxiosError) => {
    const original = error.config as InternalAxiosRequestConfig & { _retry?: boolean };
    if (error.response?.status === 401 && !original._retry) {
      original._retry = true;
      const newAccess = await refreshAccessToken();
      if (newAccess) {
        original.headers.Authorization = `Bearer ${newAccess}`;
        return api.request(original);
      }
    }
    return Promise.reject(error);
  },
);
