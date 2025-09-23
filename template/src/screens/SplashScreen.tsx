import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StatusBar, Text, View } from 'react-native';
// @ts-ignore
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '../contexts/ThemeContext';
import { useThemeColors, useThemeHexColors, useThemeTextColors } from '../hooks/useThemeColors';
import { useAppSelector } from '../store/hooks';
import { SplashScreenProps } from '../types/navigation';

export const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const { isDark } = useTheme();
  const colors = useThemeColors();
  const textColors = useThemeTextColors();
  const hexColors = useThemeHexColors();
  const user = useAppSelector(state => state.user.user);

  useEffect(() => {
    // Simulate app initialization logic
    const initializeApp = async () => {
      try {
        // Add any initialization logic here:
        // - Check for stored authentication tokens
        // - Load user preferences
        // - Initialize services
        // - Check network connectivity
        // - Load app configuration

        // Simulate loading time
        await new Promise<void>(resolve => setTimeout(resolve, 2000));

        // Check if user exists in Redux store
        if (user) {
          // User is logged in, navigate to authenticated stack
          navigation.replace('Authenticated');
        } else {
          // No user found, navigate to unauthenticated stack
          navigation.replace('Unauthenticated');
        }
      } catch (error) {
        console.error('App initialization error:', error);
        // Navigate to unauthenticated stack even if there's an error
        navigation.replace('Unauthenticated');
      } finally {
        setIsLoading(false);
      }
    };

    initializeApp();
  }, [navigation, user]);

  return (
    <>
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor={hexColors.background}
      />
      <View className={`flex-1 ${colors.background} items-center justify-center`}>
        <View className='items-center px-8'>
          {/* App Logo/Icon */}
          <View
            className={`w-24 h-24 ${colors.accent} rounded-3xl items-center justify-center mb-8 shadow-2xl`}
          >
            <Icon name='rocket-launch' size={48} color={hexColors.primary} />
          </View>

          {/* App Name */}
          <Text className={`text-4xl font-bold ${textColors.primary} mb-3 text-center`}>
            {t('splash.title')}
          </Text>

          {/* Tagline */}
          <Text className={`text-lg ${textColors.secondary} mb-12 text-center max-w-xs leading-6`}>
            {t('splash.tagline')}
          </Text>

          {/* Loading Indicator */}
          {isLoading && (
            <View className='items-center'>
              <View
                className={`w-12 h-12 ${colors.accent}/20 rounded-full items-center justify-center mb-4 p-3`}
              >
                <ActivityIndicator size='small' color={hexColors.text} />
              </View>
              <Text className={`text-base ${textColors.primary} font-medium mb-2`}>
                {t('splash.initializing')}
              </Text>
              <Text className={`text-sm ${textColors.secondary} text-center max-w-xs`}>
                {t('splash.settingUp')}
              </Text>
            </View>
          )}
        </View>

        {/* Bottom Branding */}
        <View className='absolute bottom-8 items-center'>
          <View className='flex-row items-center mb-2'>
            <Icon name='code' size={16} color={hexColors.textSecondary} />
            <Text className={`text-sm ${textColors.secondary} ml-2 font-medium`}>
              {t('splash.poweredBy')}
            </Text>
          </View>
          <Text className={`text-xs ${textColors.secondary}`}>{t('splash.version')}</Text>
        </View>
      </View>
    </>
  );
};
