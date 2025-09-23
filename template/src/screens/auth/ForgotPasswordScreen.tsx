import { Button, ButtonText, HStack, Input, InputField, Text, VStack } from '@gluestack-ui/themed';
import React, { useState } from 'react';
import { Alert, ScrollView, StatusBar, View } from 'react-native';
// @ts-ignore
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '../../contexts/ThemeContext';
import { useFirebaseAuth } from '../../hooks/useFirebaseAuth';
import { useThemeColors, useThemeHexColors, useThemeTextColors } from '../../hooks/useThemeColors';
import { ForgotPasswordScreenProps } from '../../types/navigation';

export const ForgotPasswordScreen: React.FC<ForgotPasswordScreenProps> = ({ navigation }) => {
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const colors = useThemeColors();
  const textColors = useThemeTextColors();
  const hexColors = useThemeHexColors();
  const { resetPassword } = useFirebaseAuth();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const validateEmail = (): boolean => {
    if (!email.trim()) {
      setEmailError(t('auth.emailRequired'));
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError(t('auth.validEmailRequired'));
      return false;
    }

    setEmailError(null);
    return true;
  };

  const handleSendResetEmail = async () => {
    if (!validateEmail()) {
      return;
    }

    setIsLoading(true);

    try {
      // Send password reset email with Firebase
      await resetPassword(email.trim());

      setIsEmailSent(true);

      Alert.alert(t('forgotPassword.emailSent'), t('forgotPassword.emailSentSubtitle'), [
        {
          text: t('common.confirm'),
          onPress: () => {
            // Navigate back to login
            navigation.navigate('Login');
          },
        },
      ]);
    } catch (error: any) {
      // Handle Firebase auth errors
      const errorMessage = error?.message || t('forgotPassword.sendFailed');
      Alert.alert(t('common.error'), errorMessage, [{ text: t('common.confirm') }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendEmail = () => {
    setIsEmailSent(false);
    setEmail('');
    setEmailError(null);
  };

  const handleBackToLogin = () => {
    navigation.goBack();
  };

  if (isEmailSent) {
    return (
      <>
        <StatusBar
          barStyle={isDark ? 'light-content' : 'dark-content'}
          backgroundColor={hexColors.background}
        />
        <ScrollView
          className={`flex-1 ${colors.background}`}
          contentContainerStyle={{
            flexGrow: 1,
            padding: 24,
            justifyContent: 'center',
            minHeight: '100%',
          }}
          keyboardShouldPersistTaps='handled'
          showsVerticalScrollIndicator={false}
        >
          <View className='mx-auto w-full'>
            {/* Success State */}
            <VStack className='items-center mb-8'>
              <View className='w-20 h-20 bg-emerald-500 rounded-2xl items-center justify-center mb-6'>
                <Icon name='check' size={40} color='white' />
              </View>
              <Text className={`text-3xl font-bold ${textColors.primary} text-center mb-2`}>
                {t('forgotPassword.emailSent')}
              </Text>
              <Text className={`text-base ${textColors.secondary} text-center`}>
                {t('forgotPassword.emailSentSubtitle')}
              </Text>
            </VStack>

            <View className={`${colors.surface} rounded-2xl p-6 shadow-lg   mb-6`}>
              <VStack className='space-y-4'>
                <Button className={`${colors.primary} rounded-xl py-4`} onPress={handleResendEmail}>
                  <ButtonText className='text-white font-semibold text-base'>
                    {t('forgotPassword.sendAnotherEmail')}
                  </ButtonText>
                </Button>

                <Button className='bg-transparent' onPress={handleBackToLogin}>
                  <ButtonText className={`${textColors.primary} text-sm font-medium`}>
                    {t('forgotPassword.backToSignIn')}
                  </ButtonText>
                </Button>
              </VStack>
            </View>

            {/* Help Section */}
            <View className={`${colors.surface} rounded-xl p-4   `}>
              <HStack className='items-start'>
                <View className='mr-3 mt-0.5'>
                  <Icon name='info' size={20} color={hexColors.primary} />
                </View>
                <VStack className='flex-1'>
                  <Text className={`text-sm font-medium ${textColors.primary} mb-1`}>
                    {t('forgotPassword.didntReceiveEmail')}
                  </Text>
                  <Text className={`text-sm ${textColors.secondary} leading-5`}>
                    {t('forgotPassword.checkSpamFolder')}
                  </Text>
                </VStack>
              </HStack>
            </View>
          </View>
        </ScrollView>
      </>
    );
  }

  return (
    <>
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor={hexColors.background}
      />
      <ScrollView
        className={`flex-1 ${colors.background}`}
        contentContainerStyle={{
          flexGrow: 1,
          padding: 24,
          justifyContent: 'center',
          minHeight: '100%',
        }}
        keyboardShouldPersistTaps='handled'
        showsVerticalScrollIndicator={false}
      >
        <View className='mx-auto w-full'>
          {/* Header */}
          <VStack className='items-center mb-8'>
            <View
              className={`w-16 h-16 ${colors.primary} rounded-2xl items-center justify-center mb-4`}
            >
              <Icon name='lock-reset' size={32} color='white' />
            </View>
            <Text className={`text-3xl font-bold ${textColors.primary} text-center mb-2`}>
              {t('forgotPassword.title')}
            </Text>
            <Text className={`text-base ${textColors.secondary} text-center`}>
              {t('forgotPassword.subtitle')}
            </Text>
          </VStack>

          {/* Form Card */}
          <View className={`${colors.surface} rounded-2xl p-6 shadow-lg   mb-6`}>
            <VStack className='space-y-6'>
              <VStack className='gap-y-1'>
                <Text className={`text-sm font-medium ${textColors.primary} mb-1`}>
                  {t('auth.emailAddress')}
                </Text>
                <View className='relative'>
                  <View className='absolute left-3 top-3 z-10'>
                    <Icon name='email' size={20} color={hexColors.textSecondary} />
                  </View>
                  <Input className={`  rounded-xl pl-12 pr-4 py-4 ${colors.accent}`}>
                    <InputField
                      placeholder={t('auth.enterEmail')}
                      placeholderTextColor={hexColors.textSecondary}
                      value={email}
                      onChangeText={setEmail}
                      keyboardType='email-address'
                      autoCapitalize='none'
                      autoCorrect={false}
                      className={textColors.primary}
                    />
                  </Input>
                </View>
                {emailError && <Text className='text-red-500 text-sm mt-1'>{emailError}</Text>}
              </VStack>

              <Button
                className={`${colors.primary} rounded-xl py-4 mt-2 justify-center items-center`}
                onPress={handleSendResetEmail}
                isDisabled={isLoading}
              >
                <ButtonText className='text-white font-semibold text-base'>
                  {isLoading
                    ? t('forgotPassword.sending')
                    : t('forgotPassword.sendResetInstructions')}
                </ButtonText>
              </Button>

              <Button className='bg-transparent mt-2' onPress={handleBackToLogin}>
                <ButtonText className={`${textColors.primary} text-sm font-medium self-end`}>
                  {t('forgotPassword.backToSignIn')}
                </ButtonText>
              </Button>
            </VStack>
          </View>

          {/* Help Section */}
          <View className={`${colors.surface} rounded-xl p-4   `}>
            <HStack className='items-start'>
              <View className='mr-3 mt-0.5'>
                <Icon name='lightbulb' size={20} color={hexColors.secondary} />
              </View>
              <VStack className='flex-1'>
                <Text className={`text-sm font-medium ${textColors.primary} mb-1`}>
                  {t('forgotPassword.needHelp')}
                </Text>
                <Text className={`text-sm ${textColors.secondary} leading-5`}>
                  {t('forgotPassword.helpText')}
                </Text>
              </VStack>
            </HStack>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
