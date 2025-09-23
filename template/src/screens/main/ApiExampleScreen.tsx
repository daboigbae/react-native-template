import { Button, ButtonText, Text, VStack } from '@gluestack-ui/themed';
import { FlashList } from '@shopify/flash-list';
import React, { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import { useExampleApi } from '../../api/useApi';
import { useTheme } from '../../contexts/ThemeContext';
import { useThemeColors, useThemeTextColors } from '../../hooks/useThemeColors';
import { ApiExampleScreenProps } from '../../types/navigation';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export const ApiExampleScreen: React.FC<ApiExampleScreenProps> = ({ navigation }) => {
  const { isDark } = useTheme();
  const colors = useThemeColors();
  const textColors = useThemeTextColors();
  const api = useExampleApi();

  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  // Load posts on component mount
  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      setLoading(true);
      const response = await api.getPosts();
      setPosts(response.data.slice(0, 5)); // Show only first 5 posts
    } catch (error) {
      Alert.alert('Error', 'Failed to load posts');
      console.error('Error loading posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderPost = ({ item }: { item: Post }) => (
    <View className={`${colors.surface} rounded-xl p-5 mb-6`}>
      <VStack className='space-y-3'>
        <Text className={`text-base font-semibold ${textColors.primary}`}>{item.title}</Text>
        <Text className={`text-sm ${textColors.secondary}`} numberOfLines={3}>
          {item.body}
        </Text>
      </VStack>
    </View>
  );

  return (
    <View className={`flex-1 ${colors.background}`}>
      <View className='p-6 flex-1'>
        <VStack className='flex-1'>
          {/* Header */}
          <VStack className='items-center mb-6'>
            <Text className={`text-2xl font-bold ${textColors.primary} mb-2`}>API Example</Text>
            <Text className={`text-sm ${textColors.secondary} text-center`}>
              Testing API calls with JSONPlaceholder
            </Text>
          </VStack>

          {/* Action Buttons */}
          <VStack className='space-y-4 mb-6'>
            <Button
              className={`${colors.primary} rounded-xl py-4 justify-center items-center`}
              onPress={loadPosts}
              isDisabled={loading}
            >
              <ButtonText className='text-white font-semibold'>
                {loading ? 'Loading...' : 'Load Posts'}
              </ButtonText>
            </Button>
          </VStack>

          {/* Posts List */}
          {posts.length > 0 && (
            <VStack className='flex-1'>
              <Text className={`text-lg font-semibold ${textColors.primary} mb-4`}>
                Posts ({posts.length})
              </Text>

              <FlashList
                data={posts}
                renderItem={renderPost}
                keyExtractor={item => item.id.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 20 }}
              />
            </VStack>
          )}
        </VStack>
      </View>
    </View>
  );
};
