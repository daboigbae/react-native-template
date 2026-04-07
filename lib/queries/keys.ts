// Hierarchical query key factory. See topic 06.
export const queryKeys = {
  auth: {
    all: ['auth'] as const,
    me: () => [...queryKeys.auth.all, 'me'] as const,
  },
  posts: {
    all: ['posts'] as const,
    lists: () => [...queryKeys.posts.all, 'list'] as const,
    detail: (id: string | number) => [...queryKeys.posts.all, 'detail', id] as const,
  },
} as const;
