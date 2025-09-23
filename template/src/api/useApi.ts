import { useMemo } from 'react';
import ApiClient from './ApiClient';
import { ApiConfig } from './types';

// Default API configuration
const DEFAULT_CONFIG: ApiConfig = {
  baseURL: 'https://jsonplaceholder.typicode.com', // Free API for testing
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
};

// Custom hook for API client
export const useApi = (config?: Partial<ApiConfig>) => {
  const apiClient = useMemo(() => {
    const mergedConfig = {
      ...DEFAULT_CONFIG,
      ...config,
      headers: {
        ...DEFAULT_CONFIG.headers,
        ...config?.headers,
      },
    };

    return new ApiClient(mergedConfig);
  }, [config?.baseURL, config?.timeout]);

  return apiClient;
};

// Example API endpoints using the free JSONPlaceholder API
export const useExampleApi = () => {
  const api = useApi();

  return {
    // Get all posts
    getPosts: () => api.get('/posts'),

    // Get a specific post
    getPost: (id: number) => api.get(`/posts/${id}`),

    // Create a new post
    createPost: (data: { title: string; body: string; userId: number }) =>
      api.post('/posts', data),

    // Update a post
    updatePost: (id: number, data: { title?: string; body?: string }) =>
      api.put(`/posts/${id}`, data),

    // Delete a post
    deletePost: (id: number) => api.delete(`/posts/${id}`),

    // Get all users
    getUsers: () => api.get('/users'),

    // Get a specific user
    getUser: (id: number) => api.get(`/users/${id}`),

    // Get comments for a post
    getPostComments: (postId: number) => api.get(`/posts/${postId}/comments`),

    // Get albums
    getAlbums: () => api.get('/albums'),

    // Get photos
    getPhotos: () => api.get('/photos'),
  };
};

// Export the ApiClient class for direct usage
export type { ApiConfig } from './types';
export { ApiClient };
