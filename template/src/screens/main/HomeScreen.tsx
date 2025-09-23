import { HStack, Text, VStack } from '@gluestack-ui/themed';
import React from 'react';
import { ScrollView, StatusBar, View } from 'react-native';
// @ts-ignore
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '../../contexts/ThemeContext';
import { useThemeColors, useThemeHexColors, useThemeTextColors } from '../../hooks/useThemeColors';

export const HomeScreen: React.FC = () => {
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const colors = useThemeColors();
  const textColors = useThemeTextColors();
  const hexColors = useThemeHexColors();
  const FeatureCard = ({
    icon,
    title,
    description,
  }: {
    icon: string;
    title: string;
    description: string;
  }) => (
    <View className={`${colors.surface} rounded-2xl p-6 shadow-lg  border-light-secondary mb-4`}>
      <HStack className='items-start'>
        <View
          className={`w-12 h-12 ${colors.accent} rounded-xl items-center justify-center mr-4 mt-1 mb-3`}
        >
          <Icon name={icon} size={24} color={hexColors.primary} />
        </View>
        <VStack className='flex-1'>
          <Text className={`text-lg font-semibold ${textColors.primary} mb-2`}>{title}</Text>
          <Text className={`text-sm ${textColors.secondary} leading-5`}>{description}</Text>
        </VStack>
      </HStack>
    </View>
  );

  return (
    <>
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor={hexColors.background}
      />
      <ScrollView
        className={`flex-1 ${colors.background}`}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View className='px-6 pt-6 pb-8'>
          {/* Header */}
          <VStack className='items-center mb-8'>
            <View
              className={`w-16 h-16 ${colors.primary} rounded-2xl items-center justify-center mb-4`}
            >
              <Icon name='rocket-launch' size={32} color='white' />
            </View>
            <Text className={`text-3xl font-bold ${textColors.primary} mb-2`}>
              {t('home.title')}
            </Text>
            <Text className={`text-base ${textColors.secondary} text-center max-w-xs`}>
              {t('home.subtitle')}
            </Text>
          </VStack>

          {/* Welcome Section */}
          <View className={`${colors.primary} rounded-2xl p-6 mb-6`}>
            <VStack className='items-center'>
              <Text className='text-white text-xl font-bold mb-2'>{t('home.welcome')}</Text>
              <Text className='text-white/90 text-center leading-5'>
                {t('home.welcomeMessage')}
              </Text>
            </VStack>
          </View>

          {/* Features Section */}
          <VStack className='mb-6'>
            <Text className={`text-xl font-bold ${textColors.primary} mb-4`}>
              {t('home.whatsIncluded')}
            </Text>

            <FeatureCard
              icon='security'
              title={t('home.features.authentication.title')}
              description={t('home.features.authentication.description')}
            />

            <FeatureCard
              icon='navigation'
              title={t('home.features.navigation.title')}
              description={t('home.features.navigation.description')}
            />

            <FeatureCard
              icon='palette'
              title={t('home.features.ui.title')}
              description={t('home.features.ui.description')}
            />

            <FeatureCard
              icon='settings'
              title={t('home.features.permissions.title')}
              description={t('home.features.permissions.description')}
            />

            <FeatureCard
              icon='phone-android'
              title={t('home.features.crossPlatform.title')}
              description={t('home.features.crossPlatform.description')}
            />

            <FeatureCard
              icon='code'
              title={t('home.features.typescript.title')}
              description={t('home.features.typescript.description')}
            />
          </VStack>

          {/* Getting Started Section */}
          <View className={`${colors.surface} rounded-xl p-6  border-light-secondary mb-6`}>
            <HStack className='items-start'>
              <View className='mr-3 mt-0.5'>
                <Icon name='lightbulb' size={20} color={hexColors.secondary} />
              </View>
              <VStack className='flex-1'>
                <Text className={`text-sm font-medium ${textColors.primary} mb-2`}>
                  {t('home.gettingStarted')}
                </Text>
                <Text className={`text-sm ${textColors.secondary} leading-5`}>
                  {t('home.gettingStartedText')}
                </Text>
              </VStack>
            </HStack>
          </View>

          {/* Template Info */}
          <View className={`${colors.surface} rounded-xl p-6`}>
            <HStack className='items-start'>
              <View className='mr-3 mt-0.5'>
                <Icon name='info' size={20} color={hexColors.textSecondary} />
              </View>
              <VStack className='flex-1'>
                <Text className={`text-sm font-medium ${textColors.primary} mb-2`}>
                  {t('home.templateInfo')}
                </Text>
                <Text className={`text-sm ${textColors.secondary} leading-5`}>
                  {t('home.templateInfoText')}
                </Text>
              </VStack>
            </HStack>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
