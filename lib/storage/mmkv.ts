import { MMKV } from 'react-native-mmkv';

/** Non-sensitive KV. For tokens, use lib/auth/tokens.ts (SecureStore-backed). */
export const storage = new MMKV({ id: 'dad-rn-template' });
