import { Link, Stack } from 'expo-router';
import { SafeScreen, VStack, Text } from '@/components/ui';

export default function NotFound() {
  return (
    <>
      <Stack.Screen options={{ title: 'Not found' }} />
      <SafeScreen>
        <VStack gap={4} className="flex-1 items-center justify-center">
          <Text variant="title" weight="bold">
            This screen doesn&apos;t exist.
          </Text>
          <Link href="/">
            <Text color="primary" weight="semibold">
              Go home
            </Text>
          </Link>
        </VStack>
      </SafeScreen>
    </>
  );
}
