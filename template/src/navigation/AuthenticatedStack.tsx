import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';
import { AuthenticatedStackParamList } from '../types/navigation';
import { DrawerNavigator } from './DrawerNavigator';

const Stack = createStackNavigator<AuthenticatedStackParamList>();

export const AuthenticatedStack: React.FC = () => {
  try {
    return (
      <Stack.Navigator
        initialRouteName='Drawer'
        screenOptions={{
          headerShown: false, // Hide header since drawer will handle it
        }}
      >
        <Stack.Screen name='Drawer' component={DrawerNavigator} />
      </Stack.Navigator>
    );
  } catch (error) {
    console.error('AuthenticatedStack error:', error);
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Stack Error: {(error as any)?.message || 'Unknown error'}</Text>
      </View>
    );
  }
};
