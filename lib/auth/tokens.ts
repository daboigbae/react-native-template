// Tokens live in expo-secure-store ONLY. AsyncStorage and MMKV are forbidden for tokens.
// See STACK.md Tier 1 rule 5 + topic 11.
import * as SecureStore from 'expo-secure-store';

const ACCESS = 'auth.access_token';
const REFRESH = 'auth.refresh_token';

export const tokens = {
  async get(): Promise<{ access: string | null; refresh: string | null }> {
    const [access, refresh] = await Promise.all([
      SecureStore.getItemAsync(ACCESS),
      SecureStore.getItemAsync(REFRESH),
    ]);
    return { access, refresh };
  },
  async set(access: string, refresh: string): Promise<void> {
    await Promise.all([
      SecureStore.setItemAsync(ACCESS, access),
      SecureStore.setItemAsync(REFRESH, refresh),
    ]);
  },
  async clear(): Promise<void> {
    await Promise.all([SecureStore.deleteItemAsync(ACCESS), SecureStore.deleteItemAsync(REFRESH)]);
  },
};
