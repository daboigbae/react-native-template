import { BottomTabNavigationProp as BottomTabNavProp } from '@react-navigation/bottom-tabs';
import { DrawerNavigationProp as DrawerNavProp } from '@react-navigation/drawer';
import { StackNavigationProp } from '@react-navigation/stack';

// Define the parameter list for each stack
export type UnauthenticatedStackParamList = {
  Login: undefined;
  Signup: undefined;
  ForgotPassword: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
};

export type DrawerParamList = {
  MainTabs: undefined;
  Permissions: undefined;
  ApiExample: undefined;
};

export type AuthenticatedStackParamList = {
  Drawer: undefined;
};

// Define the root stack parameter list
export type RootStackParamList = {
  Splash: undefined;
  Unauthenticated: undefined;
  Authenticated: undefined;
};

// Navigation prop types for each screen
export type UnauthenticatedStackNavigationProp =
  StackNavigationProp<UnauthenticatedStackParamList>;
export type BottomTabNavigationProp = BottomTabNavProp<BottomTabParamList>;
export type DrawerNavigationProp = DrawerNavProp<DrawerParamList>;
export type AuthenticatedStackNavigationProp =
  StackNavigationProp<AuthenticatedStackParamList>;
export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;

// Screen prop types
export type LoginScreenProps = {
  navigation: UnauthenticatedStackNavigationProp;
};

export type SignupScreenProps = {
  navigation: UnauthenticatedStackNavigationProp;
};

export type ForgotPasswordScreenProps = {
  navigation: UnauthenticatedStackNavigationProp;
};

export type SplashScreenProps = {
  navigation: RootStackNavigationProp;
};

export type HomeScreenProps = {
  navigation: BottomTabNavigationProp;
};

export type SettingsScreenProps = {
  navigation: BottomTabNavigationProp;
};

export type PermissionsScreenProps = {
  navigation: DrawerNavigationProp;
};

export type ApiExampleScreenProps = {
  navigation: DrawerNavigationProp;
};

// Declare global types for React Navigation
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
