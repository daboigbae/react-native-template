// Zustand auth store. Holds user + isAuthenticated flag.
// Stores NEVER call APIs directly — mutation hooks call setters in onSuccess.
// See FOLDER-STRUCTURE.md hard rule 6.
import { create } from 'zustand';

export interface AuthUser {
  id: string;
  email: string;
  name: string;
}

interface AuthState {
  user: AuthUser | null;
  isAuthenticated: boolean;
  setUser: (user: AuthUser | null) => void;
  signOut: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  setUser: (user) => set({ user, isAuthenticated: !!user }),
  signOut: () => set({ user: null, isAuthenticated: false }),
}));
