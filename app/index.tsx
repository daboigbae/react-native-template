import { Redirect } from 'expo-router';
import { useAuthStore } from '@/lib/stores/auth';

export default function Index() {
  const isAuthed = useAuthStore((s) => s.isAuthenticated);
  return <Redirect href={isAuthed ? '/(tabs)' : '/(auth)/sign-in'} />;
}
