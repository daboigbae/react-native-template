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
import { SignupScreenProps } from '../../types/navigation';

export const SignupScreen: React.FC<SignupScreenProps> = ({ navigation }) => {
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const colors = useThemeColors();
  const textColors = useThemeTextColors();
  const hexColors = useThemeHexColors();
  const dispatch = useAppDispatch();
  const { signUp } = useFirebaseAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<Record<string, string | null>>({
    email: null,
    password: null,
  });

  const [isLoading, setIsLoading] = useState(false);

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string | null> = {
      email: null,
      password: null,
    };

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = t('auth.emailRequired');
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = t('auth.validEmailRequired');
      }
    }

    // Password validation
    if (!formData.password.trim()) {
      newErrors.password = t('auth.passwordRequired');
    } else if (formData.password.length < 6) {
      newErrors.password = t('auth.passwordMinLength');
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== null);
  };

  const handleSignup = async () => {
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Create user with Firebase
      const firebaseUser = await signUp(formData.email.trim(), formData.password);

      // Create user object from Firebase user
      const userData: User = {
        id: firebaseUser.uid,
        email: firebaseUser.email || formData.email.trim(),
        firstName: 'User', // Default first name
        lastName: '', // Default last name
      };

      // Dispatch user data to Redux store
      dispatch(setUser(userData));

      Alert.alert(t('auth.accountCreated'), t('auth.welcomeMessage'), [
        {
          text: t('common.confirm'),
          onPress: () => {
            // Navigate to authenticated stack
            navigation.getParent()?.navigate('Authenticated');
          },
        },
      ]);
    } catch (error: any) {
      // Handle Firebase auth errors
      const errorMessage = error?.message || t('auth.unableToCreateAccount');
      Alert.alert(t('auth.signupFailed'), errorMessage, [{ text: t('common.confirm') }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = () => {
    navigation.navigate('Login');
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
          paddingBottom: '15%',
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
              <Icon name='person-add' size={32} color='white' />
            </View>
            <Text className={`text-3xl font-bold ${textColors.primary} text-center mb-2`}>
              {t('auth.createAccount')}
            </Text>
            <Text className={`text-base ${textColors.secondary} text-center`}>
              {t('auth.signUpSubtitle')}
            </Text>
          </VStack>

          {/* Form Card */}
          <View className={`${colors.surface} rounded-2xl p-6 shadow-lg   mb-6`}>
            <VStack className='space-y-6'>
              {/* Email Field */}
              <VStack className='gap-y-1'>
                <Text className={`text-sm font-medium ${textColors.primary}`}>
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
                      value={formData.email}
                      onChangeText={value => updateField('email', value)}
                      keyboardType='email-address'
                      autoCapitalize='none'
                      autoCorrect={false}
                      className={textColors.primary}
                    />
                  </Input>
                </View>
                {errors.email && <Text className='text-red-500 text-sm mt-1'>{errors.email}</Text>}
              </VStack>

              {/* Password Field */}
              <VStack className='gap-y-1'>
                <Text className={`text-sm font-medium ${textColors.primary}`}>
                  {t('auth.password')}
                </Text>
                <View className='relative'>
                  <View className='absolute left-3 top-3 z-10'>
                    <Icon name='lock' size={20} color={hexColors.textSecondary} />
                  </View>
                  <Input className={`  rounded-xl pl-12 pr-4 py-4 ${colors.accent}`}>
                    <InputField
                      placeholder={t('auth.createPassword')}
                      placeholderTextColor={hexColors.textSecondary}
                      value={formData.password}
                      onChangeText={value => updateField('password', value)}
                      secureTextEntry
                      className={textColors.primary}
                    />
                  </Input>
                </View>
                {errors.password && (
                  <Text className='text-red-500 text-sm mt-1'>{errors.password}</Text>
                )}
              </VStack>

              {/* Create Account Button */}
              <Button
                className={`${colors.primary} rounded-xl py-4 mt-8 justify-center items-center`}
                onPress={handleSignup}
                isDisabled={isLoading}
              >
                <ButtonText className='text-white font-semibold text-base'>
                  {isLoading ? t('auth.creatingAccount') : t('auth.createAccountButton')}
                </ButtonText>
              </Button>
            </VStack>
          </View>

          {/* Footer */}
          <View className={`${colors.surface} rounded-xl p-4  border-light-secondary`}>
            <HStack className='items-center justify-center'>
              <Text className={`${textColors.secondary} text-sm mr-2`}>
                {t('auth.alreadyHaveAccount')}
              </Text>
              <Button className='bg-transparent' onPress={handleLogin}>
                <ButtonText className={`${textColors.primary} text-sm font-semibold`}>
                  {t('auth.signInLink')}
                </ButtonText>
              </Button>
            </HStack>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
