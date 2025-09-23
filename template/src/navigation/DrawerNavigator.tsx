import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// @ts-ignore
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '../contexts/ThemeContext';
import { useThemeColors, useThemeHexColors, useThemeTextColors } from '../hooks/useThemeColors';
import { ApiExampleScreen } from '../screens/main/ApiExampleScreen';
import { PermissionsScreen } from '../screens/main/PermissionsScreen';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { clearUser } from '../store/slices/userSlice';
import { DrawerParamList } from '../types/navigation';
import { BottomTabNavigator } from './BottomTabNavigator';

const Drawer = createDrawerNavigator<DrawerParamList>();

// Custom drawer content component
const CustomDrawerContent = ({ navigation }: any) => {
  const { isDark } = useTheme();
  const colors = useThemeColors();
  const textColors = useThemeTextColors();
  const hexColors = useThemeHexColors();
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.user.user);

  const handleSignOut = () => {
    dispatch(clearUser());
    // Navigate back to splash screen which will redirect to unauthenticated stack
    navigation.getParent()?.getParent()?.navigate('Splash');
  };

  return (
    <SafeAreaView className='flex-1' edges={['top', 'bottom']}>
      {/* Drawer Header */}
      <View className={`${colors.primary} p-6`}>
        <View className='flex-row items-center'>
          <View
            className={`w-12 h-12 ${colors.surface} rounded-full items-center justify-center mr-4`}
          >
            <Text className={`text-xl font-bold ${textColors.primary}`}>
              {user ? `${user.firstName.charAt(0)}${user.lastName.charAt(0)}` : 'JD'}
            </Text>
          </View>
          <View>
            <Text className='text-white font-semibold text-lg'>
              {user ? `${user.firstName} ${user.lastName}` : 'John Doe'}
            </Text>
            <Text className='text-white/80 text-sm'>
              {user ? user.email : 'john.doe@example.com'}
            </Text>
          </View>
        </View>
      </View>

      {/* Drawer Menu Items */}
      <ScrollView className={`flex-1 px-4 py-6 ${colors.background}`}>
        <TouchableOpacity
          className={`flex-row items-center p-4 rounded-lg mb-2 ${colors.surface}`}
          onPress={() => navigation.navigate('MainTabs')}
        >
          <Icon name='home' size={24} color={hexColors.secondary} />
          <Text className={`ml-4 ${textColors.primary} text-base`}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className={`flex-row items-center p-4 rounded-lg mb-2 ${colors.surface}`}
          onPress={() => navigation.navigate('Permissions')}
        >
          <Icon name='security' size={24} color={hexColors.secondary} />
          <Text className={`ml-4 ${textColors.primary} text-base`}>Permissions</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className={`flex-row items-center p-4 rounded-lg mb-2 ${colors.surface}`}
          onPress={() => navigation.navigate('ApiExample')}
        >
          <Icon name='api' size={24} color={hexColors.secondary} />
          <Text className={`ml-4 ${textColors.primary} text-base`}>API Example</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Drawer Footer */}
      <View
        className={`border-t ${isDark ? 'border-dark-secondary' : 'border-gray-200'} p-4 ${colors.background}`}
      >
        <TouchableOpacity
          className={`flex-row items-center p-3 ${colors.accent} rounded-lg`}
          onPress={handleSignOut}
        >
          <Icon name='logout' size={24} color={hexColors.primary} />
          <Text className={`ml-4 ${textColors.primary} font-medium`}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export const DrawerNavigator: React.FC = () => {
  const { isDark } = useTheme();
  const colors = useThemeColors();
  const textColors = useThemeTextColors();
  const hexColors = useThemeHexColors();

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
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
        headerTintColor: hexColors.textSecondary,
        drawerStyle: {
          width: 280,
          backgroundColor: hexColors.background,
        },
        drawerPosition: 'right',
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name='MainTabs'
        component={BottomTabNavigator}
        options={{
          title: ' ',
          headerShadowVisible: false,
        }}
      />
      <Drawer.Screen
        name='Permissions'
        component={PermissionsScreen}
        options={{
          title: ' ',
          headerShadowVisible: false,
        }}
      />
      <Drawer.Screen
        name='ApiExample'
        component={ApiExampleScreen}
        options={{
          title: ' ',
          headerShadowVisible: false,
        }}
      />
    </Drawer.Navigator>
  );
};
