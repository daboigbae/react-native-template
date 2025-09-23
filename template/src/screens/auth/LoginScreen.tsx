import { Button, ButtonText, HStack, Input, InputField, Text, VStack } from '@gluestack-ui/themed';
import React, { useState } from 'react';
import { Alert, ScrollView, StatusBar, View } from 'react-native';
// @ts-ignore
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '../../contexts/ThemeContext';
import { useFirebaseAuth } from '../../hooks/useFirebaseAuth';
import { useThemeColors, useThemeHexColors, useThemeTextColors } from '../../hooks/useThemeColors';
import { useAppDispatch } from '../../store/hooks';
import { setUser, User } from '../../store/slices/userSlice';
import { LoginScreenProps } from '../../types/navigation';

export const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const { isDark } = useTheme();
  const colors = useThemeColors();
  const textColors = useThemeTextColors();
  const hexColors = useThemeHexColors();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { signIn } = useFirebaseAuth();

  const handleLogin = async () => {
    // Reset errors
    setEmailError(null);
    setPasswordError(null);

    // Basic validation
    if (!email.trim()) {
      setEmailError(t('auth.emailRequired'));
      return;
    }

    if (!password.trim()) {
      setPasswordError(t('auth.passwordRequired'));
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError(t('auth.validEmailRequired'));
      return;
    }

    // Password length validation
    if (password.length < 6) {
      setPasswordError(t('auth.passwordTooShort'));
      return;
    }

    setIsLoading(true);

    try {
      // Sign in with Firebase
      const firebaseUser = await signIn(email.trim(), password);

      // Create user object from Firebase user
      const userData: User = {
        id: firebaseUser.uid,
        email: firebaseUser.email || email.trim(),
        firstName: firebaseUser.displayName?.split(' ')[0] || email.split('@')[0],
        lastName: firebaseUser.displayName?.split(' ').slice(1).join(' ') || 'User',
      };

      // Dispatch user data to Redux store
      dispatch(setUser(userData));

      // Navigate to authenticated stack
      navigation.getParent()?.navigate('Authenticated');
    } catch (error: any) {
      // Handle Firebase auth errors
      const errorMessage = error?.message || t('auth.invalidCredentials');
      Alert.alert(t('auth.loginFailed'), errorMessage, [{ text: t('common.confirm') }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = () => {
    navigation.navigate('Signup');
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

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
              <Icon name='login' size={32} color='white' />
            </View>
            <Text className={`text-3xl font-bold ${textColors.primary} text-center mb-2`}>
              {t('auth.welcomeBack')}
            </Text>
            <Text className={`text-base ${textColors.secondary} text-center`}>
              {t('auth.signInSubtitle')}
            </Text>
          </VStack>

          {/* Form Card */}
          <View
            className={`${colors.surface} rounded-2xl p-6 shadow-lg x ${colors.secondary} mb-6`}
          >
            <VStack className='space-y-6'>
              {/* Email Field */}
              <VStack className='gap-y-1 mt-4'>
                <Text className={`text-sm font-medium ${textColors.primary} mb-1`}>
                  {t('auth.emailAddress')}
                </Text>
                <View className='relative'>
                  <View className='absolute left-3 top-3 z-10'>
                    <Icon name='email' size={20} color={hexColors.textSecondary} />
                  </View>
                  <Input className={`rounded-xl pl-12 pr-4 py-4 ${colors.accent}`}>
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
                {emailError && <Text className='text-error text-sm mt-1'>{emailError}</Text>}
              </VStack>

              {/* Password Field */}
              <VStack className='gap-y-1 mt-4'>
                <Text className={`text-sm font-medium ${textColors.primary} mb-1`}>
                  {t('auth.password')}
                </Text>
                <View className='relative'>
                  <View className='absolute left-3 top-3 z-10'>
                    <Icon name='lock' size={20} color={hexColors.textSecondary} />
                  </View>
                  <Input className={` rounded-xl pl-12 pr-4 py-4 ${colors.accent}`}>
                    <InputField
                      placeholder={t('auth.enterPassword')}
                      value={password}
                      onChangeText={setPassword}
                      secureTextEntry
                      placeholderTextColor={hexColors.textSecondary}
                      className={textColors.primary}
                    />
                  </Input>
                </View>
                {passwordError && <Text className='text-error text-sm mt-1'>{passwordError}</Text>}
              </VStack>

              {/* Forgot Password */}
              <View className='items-end mt-2 mb-4'>
                <Button className='bg-transparent' onPress={handleForgotPassword}>
                  <ButtonText className={`${textColors.primary} text-sm font-medium`}>
                    {t('auth.forgotPassword')}
                  </ButtonText>
                </Button>
              </View>

              {/* Sign In Button */}
              <Button
                className={`${colors.primary} rounded-xl py-4 mt-2 justify-center items-center`}
                onPress={handleLogin}
                isDisabled={isLoading}
              >
                <ButtonText className='text-white font-semibold text-base'>
                  {isLoading ? t('auth.signingIn') : t('auth.signIn')}
                </ButtonText>
              </Button>
            </VStack>
          </View>

          {/* Footer */}
          <View className={`${colors.surface} rounded-xl p-4  ${colors.secondary}`}>
            <HStack className='items-center justify-center'>
              <Text className={`${textColors.secondary} text-sm mr-2`}>
                {t('auth.dontHaveAccount')}
              </Text>
              <Button className='bg-transparent' onPress={handleSignup}>
                <ButtonText className={`${textColors.primary} text-sm font-semibold`}>
                  {t('auth.signUp')}
                </ButtonText>
              </Button>
            </HStack>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
