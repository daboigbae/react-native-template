// Detail screen — dynamic route, query hook by id.
import { ActivityIndicator } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { SafeScreen, VStack, Text } from '@/components/ui';
import { usePost } from '@/lib/queries/posts/usePosts';

export default function PostDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data, isLoading, error } = usePost(id);

  if (isLoading) {
    return (
      <SafeScreen>
        <VStack className="flex-1 items-center justify-center">
          <ActivityIndicator />
        </VStack>
      </SafeScreen>
    );
  }

  if (error || !data) {
    return (
      <SafeScreen>
        <VStack className="flex-1 items-center justify-center">
          <Text color="danger">Failed to load post.</Text>
        </VStack>
      </SafeScreen>
    );
  }

  return (
    <SafeScreen scrollable>
      <VStack gap={4}>
        <Text variant="display" weight="bold">
          {data.title}
        </Text>
        <Text>{data.body}</Text>
      </VStack>
    </SafeScreen>
  );
}
