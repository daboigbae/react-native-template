import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';
import { SplashScreen } from '../screens/SplashScreen';
import { RootStackParamList } from '../types/navigation';
import { AuthenticatedStack } from './AuthenticatedStack';
import { UnauthenticatedStack } from './UnauthenticatedStack';

const Stack = createStackNavigator<RootStackParamList>();

export const AppNavigator: React.FC = () => {
  try {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Splash'
          screenOptions={{
            headerShown: false, // Hide header for stack navigators
          }}
        >
          <Stack.Screen name='Splash' component={SplashScreen} />
          <Stack.Screen name='Unauthenticated' component={UnauthenticatedStack} />
          <Stack.Screen name='Authenticated' component={AuthenticatedStack} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } catch (error) {
    console.error('Navigation error:', error);
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Navigation Error: {(error as any)?.message || 'Unknown error'}</Text>
      </View>
    );
  }
};
