import { Button, ButtonText, HStack, Text, VStack } from '@gluestack-ui/themed';
import React from 'react';
import { ScrollView, StatusBar, View } from 'react-native';
// @ts-ignore
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '../../contexts/ThemeContext';
import { usePermissions } from '../../hooks/usePermissions';
import { useThemeColors, useThemeHexColors, useThemeTextColors } from '../../hooks/useThemeColors';
import { PermissionsScreenProps } from '../../types/navigation';

export const PermissionsScreen: React.FC<PermissionsScreenProps> = ({ navigation }) => {
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const colors = useThemeColors();
  const textColors = useThemeTextColors();
  const hexColors = useThemeHexColors();
  const {
    permissions,
    requestPermissionWithFlow,
    isLocationGranted,
    isCameraGranted,
    isAudioGranted,
    isLoading,
  } = usePermissions();

  const getStatusText = (status: string) => {
    switch (status) {
      case 'granted':
        return 'Granted';
      case 'denied':
        return 'Denied';
      case 'blocked':
        return 'Blocked';
      case 'unavailable':
        return 'Unavailable';
      case 'checking':
        return 'Checking...';
      default:
        return 'Unknown';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'granted':
        return 'text-emerald-600';
      case 'denied':
        return 'text-red-500';
      case 'blocked':
        return 'text-red-700';
      case 'unavailable':
        return 'text-gray-500';
      case 'checking':
        return 'text-amber-500';
      default:
        return 'text-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'granted':
        return 'check-circle';
      case 'denied':
        return 'close-circle';
      case 'blocked':
        return 'close-circle';
      case 'unavailable':
        return 'help-circle';
      case 'checking':
        return 'clock';
      default:
        return 'help-circle';
    }
  };

  const PermissionCard = ({
    title,
    description,
    icon,
    status,
    onPress,
    isGranted,
    buttonText,
  }: {
    title: string;
    description: string;
    icon: string;
    status: string;
    onPress: () => void;
    isGranted: boolean;
    buttonText: string;
  }) => (
    <View className={`${colors.surface} rounded-2xl p-6 shadow-lg  mb-4`}>
      <HStack className='items-center mb-4'>
        <VStack className='flex-1'>
          <Text className={`text-lg font-semibold ${textColors.primary} mb-1`}>{title}</Text>
          <Text className={`text-sm ${textColors.secondary}`}>{description}</Text>
        </VStack>
      </HStack>

      <Button
        onPress={onPress}
        className={`${isGranted ? colors.accent : colors.primary} rounded-xl py-4 px-4`}
        isDisabled={isGranted || isLoading}
      >
        <ButtonText
          className={`font-semibold text-base ${isGranted ? textColors.secondary : 'text-white'}`}
        >
          {buttonText}
        </ButtonText>
      </Button>
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
              <Icon name='security' size={32} color='white' />
            </View>
            <Text className={`text-3xl font-bold ${textColors.primary} mb-2`}>
              {t('permissions.title')}
            </Text>
            <Text className={`text-base ${textColors.secondary} text-center max-w-xs`}>
              {t('permissions.subtitle')}
            </Text>
          </VStack>

          {/* Permission Cards */}
          <VStack className='space-y-4'>
            <PermissionCard
              title={t('permissions.locationAccess')}
              description={t('permissions.locationDescription')}
              icon='location-on'
              status={permissions.location}
              onPress={() => requestPermissionWithFlow('location')}
              isGranted={isLocationGranted}
              buttonText={
                isLocationGranted
                  ? t('permissions.locationGranted')
                  : t('permissions.grantLocationAccess')
              }
            />

            <PermissionCard
              title={t('permissions.cameraAccess')}
              description={t('permissions.cameraDescription')}
              icon='camera-alt'
              status={permissions.camera}
              onPress={() => requestPermissionWithFlow('camera')}
              isGranted={isCameraGranted}
              buttonText={
                isCameraGranted
                  ? t('permissions.cameraGranted')
                  : t('permissions.grantCameraAccess')
              }
            />

            <PermissionCard
              title={t('permissions.microphoneAccess')}
              description={t('permissions.microphoneDescription')}
              icon='mic'
              status={permissions.audio}
              onPress={() => requestPermissionWithFlow('audio')}
              isGranted={isAudioGranted}
              buttonText={
                isAudioGranted
                  ? t('permissions.microphoneGranted')
                  : t('permissions.grantMicrophoneAccess')
              }
            />
          </VStack>

          {/* Footer Info */}
          <View className={`mt-8 p-4 ${colors.surface} rounded-xl border-light-secondary`}>
            <HStack className='items-start'>
              <View className='mr-3 mt-0.5'>
                <Icon name='info' size={20} color={hexColors.primary} />
              </View>
              <VStack className='flex-1'>
                <Text className={`text-sm font-medium ${textColors.primary} mb-1`}>
                  {t('permissions.privacyFirst')}
                </Text>
                <Text className={`text-sm ${textColors.secondary} leading-5`}>
                  {t('permissions.privacyText')}
                </Text>
              </VStack>
            </HStack>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
