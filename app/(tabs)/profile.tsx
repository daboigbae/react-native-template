import { router } from 'expo-router';
import { SafeScreen, VStack, Text, Button, Card } from '@/components/ui';
import { useAuthStore } from '@/lib/stores/auth';

export default function ProfileScreen() {
  const { user, signOut } = useAuthStore();

  const handleSignOut = () => {
    signOut();
    router.replace('/(auth)/sign-in');
  };

  return (
    <SafeScreen>
      <VStack gap={6} className="flex-1">
        <VStack gap={2}>
          <Text variant="display" weight="bold">
            Profile
          </Text>
          <Text color="muted">Account + settings.</Text>
        </VStack>

        <Card variant="elevated">
          <VStack gap={1}>
            <Text variant="caption" color="muted">
              Signed in as
            </Text>
            <Text variant="subtitle" weight="semibold">
              {user?.name ?? 'Guest'}
            </Text>
            <Text color="muted">{user?.email ?? '—'}</Text>
          </VStack>
        </Card>

        <Button label="Sign out" variant="secondary" onPress={handleSignOut} />
      </VStack>
    </SafeScreen>
  );
}
