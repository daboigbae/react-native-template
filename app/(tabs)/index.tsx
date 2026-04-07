// Sample list screen — TanStack Query + FlashList + DAD primitives.
// Route is thin: it only composes primitives and a query hook.
import { FlashList } from '@shopify/flash-list';
import { router } from 'expo-router';
import { ActivityIndicator } from 'react-native';
import { SafeScreen, VStack, Text, Card } from '@/components/ui';
import { usePosts, type Post } from '@/lib/queries/posts/usePosts';

export default function HomeScreen() {
  const { data, isLoading, error, refetch, isRefetching } = usePosts();

  if (isLoading) {
    return (
      <SafeScreen>
        <VStack className="flex-1 items-center justify-center">
          <ActivityIndicator />
        </VStack>
      </SafeScreen>
    );
  }

  if (error) {
    return (
      <SafeScreen>
        <VStack className="flex-1 items-center justify-center" gap={2}>
          <Text variant="title" weight="semibold">
            Something went wrong
          </Text>
          <Text color="muted">Pull to retry.</Text>
        </VStack>
      </SafeScreen>
    );
  }

  return (
    <SafeScreen padding={false}>
      <VStack gap={2} className="px-4 pt-2 pb-3">
        <Text variant="display" weight="bold">
          Posts
        </Text>
        <Text color="muted">Sample list backed by TanStack Query.</Text>
      </VStack>
      <FlashList
        data={data}
        keyExtractor={(item: Post) => String(item.id)}
        estimatedItemSize={96}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }}
        ItemSeparatorComponent={() => <VStack className="h-3" />}
        onRefresh={refetch}
        refreshing={isRefetching}
        renderItem={({ item }) => (
          <Card variant="outlined" onPress={() => router.push(`/post/${item.id}`)}>
            <VStack gap={1}>
              <Text variant="subtitle" weight="semibold" numberOfLines={1}>
                {item.title}
              </Text>
              <Text color="muted" numberOfLines={2}>
                {item.body}
              </Text>
            </VStack>
          </Card>
        )}
      />
    </SafeScreen>
  );
}
