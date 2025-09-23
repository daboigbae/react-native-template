import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
// @ts-ignore
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '../contexts/ThemeContext';
import { useThemeColors, useThemeHexColors, useThemeTextColors } from '../hooks/useThemeColors';
import { ForgotPasswordScreen } from '../screens/auth/ForgotPasswordScreen';
import { LoginScreen } from '../screens/auth/LoginScreen';
import { SignupScreen } from '../screens/auth/SignupScreen';
import { UnauthenticatedStackParamList } from '../types/navigation';

const Stack = createStackNavigator<UnauthenticatedStackParamList>();

// Custom back button component
const CustomBackButton = ({ onPress }: { onPress: () => void }) => {
  const { isDark } = useTheme();
  const textColors = useThemeTextColors();
  const hexColors = useThemeHexColors();

  return (
    <TouchableOpacity
      onPress={onPress}
      className='flex-row items-center px-4 py-2'
      activeOpacity={0.7}
    >
      <Icon name='arrow-back' size={24} color={hexColors.text} />
      <Text className={`text-base font-medium ${textColors.primary} ml-3`}>Back</Text>
    </TouchableOpacity>
  );
};

export const UnauthenticatedStack: React.FC = () => {
  const { isDark } = useTheme();
  const colors = useThemeColors();
  const textColors = useThemeTextColors();
  const hexColors = useThemeHexColors();

  try {
    return (
      <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{
          headerShown: true,
          headerShadowVisible: false,
          gestureEnabled: false, // Disable swipe gestures
          headerStyle: {
            backgroundColor: hexColors.background,
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: '600',
            color: hexColors.text,
          },
          headerLeft: ({ onPress }) => <CustomBackButton onPress={onPress || (() => {})} />,
        }}
      >
        <Stack.Screen
          name='Login'
          component={LoginScreen}
          options={{
            headerShown: false, // No back button on initial screen
          }}
        />
        <Stack.Screen
          name='Signup'
          component={SignupScreen}
          options={{
            title: '',
          }}
        />
        <Stack.Screen
          name='ForgotPassword'
          component={ForgotPasswordScreen}
          options={{
            title: ' ',
          }}
        />
      </Stack.Navigator>
    );
  } catch (error) {
    console.error('UnauthenticatedStack error:', error);
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Stack Error: {(error as any)?.message || 'Unknown error'}</Text>
      </View>
    );
  }
};
