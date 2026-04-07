// URL constants. Hooks compose these — components never reference URLs directly.
export const endpoints = {
  auth: {
    signIn: '/auth/sign-in',
    signUp: '/auth/sign-up',
    refresh: '/auth/refresh',
    me: '/auth/me',
  },
  posts: {
    list: '/posts',
    detail: (id: string | number) => `/posts/${id}`,
  },
} as const;
