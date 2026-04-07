// Sample query hook. Components import THIS, not useQuery directly.
// FOLDER-STRUCTURE.md hard rule 5.
import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/api/client';
import { endpoints } from '@/lib/api/endpoints';
import { queryKeys } from '@/lib/queries/keys';

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export function usePosts() {
  return useQuery({
    queryKey: queryKeys.posts.lists(),
    queryFn: async (): Promise<Post[]> => {
      const res = await api.get<Post[]>(endpoints.posts.list);
      return res.data;
    },
  });
}

export function usePost(id: string | number) {
  return useQuery({
    queryKey: queryKeys.posts.detail(id),
    queryFn: async (): Promise<Post> => {
      const res = await api.get<Post>(endpoints.posts.detail(id));
      return res.data;
    },
    enabled: id != null,
  });
}
