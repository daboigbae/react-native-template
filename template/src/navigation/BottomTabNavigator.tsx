import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
// @ts-ignore
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '../contexts/ThemeContext';
import { useThemeHexColors } from '../hooks/useThemeColors';
import { HomeScreen } from '../screens/main/HomeScreen';
import { BottomTabParamList } from '../types/navigation';

const Tab = createBottomTabNavigator<BottomTabParamList>();

// Custom tab bar icon component
const TabIcon = ({ name, size, color }: { name: string; size: number; color: string }) => (
  <Icon name={name} size={size} color={color} />
);

export const BottomTabNavigator: React.FC = () => {
  const { isDark } = useTheme();
  const hexColors = useThemeHexColors();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: hexColors.primary,
        tabBarInactiveTintColor: hexColors.textSecondary,
        tabBarStyle: {
          backgroundColor: hexColors.background,
          borderTopColor: hexColors.border,
          paddingTop: 14,
        },
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => <TabIcon name='home' size={32} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};
