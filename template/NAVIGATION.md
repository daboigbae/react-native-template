# React Navigation Setup & Usage

## Overview
This project uses React Navigation v6 for handling navigation between screens. The setup includes a simple unauthenticated stack for authentication flows.

## Dependencies Installed
```bash
npm install @react-navigation/native @react-navigation/stack react-native-screens react-native-safe-area-context
```

## Project Structure

### Navigation Types (`src/types/navigation.ts`)
- **UnauthenticatedStackParamList**: Defines the parameter list for auth screens
- **RootStackParamList**: Defines the main app navigation structure
- **Screen Props**: TypeScript interfaces for each screen component

### Navigation Components
- **AppNavigator** (`src/navigation/AppNavigator.tsx`): Main navigation container
- **UnauthenticatedStack** (`src/navigation/UnauthenticatedStack.tsx`): Stack for auth screens

### Auth Screens
- **LoginScreen** (`src/screens/auth/LoginScreen.tsx`): Login form (blank for now)
- **SignupScreen** (`src/screens/auth/SignupScreen.tsx`): Registration form (blank for now)
- **ForgotPasswordScreen** (`src/screens/auth/ForgotPasswordScreen.tsx`): Password reset (blank for now)

## Current Navigation Flow

```
App
└── AppNavigator
    └── UnauthenticatedStack
        ├── Login (initial route)
        ├── Signup
        └── ForgotPassword
```

## Usage Examples

### Basic Navigation
```typescript
// Navigate to Signup screen
navigation.navigate('Signup');

// Navigate to ForgotPassword screen
navigation.navigate('ForgotPassword');

// Go back to previous screen
navigation.goBack();
```

### Screen Props
Each screen receives navigation props:
```typescript
import { LoginScreenProps } from '../types/navigation';

export const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  // Use navigation object here
};
```

## Configuration

### Stack Navigator Options
- **headerShown: false**: Headers are hidden by default
- **initialRouteName**: Set to "Login" for the auth stack
- **screenOptions**: Global options for all screens in the stack

### Status Bar
- Automatically adjusts based on theme (light/dark)
- Configured in App.tsx with SafeAreaProvider

## Future Extensions

### Adding New Screens
1. Add screen name to `UnauthenticatedStackParamList` in `navigation.ts`
2. Create screen component in `src/screens/auth/`
3. Add screen to `UnauthenticatedStack.tsx`
4. Update screen props type if needed

### Adding Authenticated Stack
1. Create `AuthenticatedStackParamList` type
2. Create `AuthenticatedStack` component
3. Add to `RootStackParamList`
4. Add to `AppNavigator`

### Navigation Guards
- Can be implemented using navigation state listeners
- Authentication state can control which stack is shown
- Example: Show UnauthenticatedStack when not logged in, AuthenticatedStack when logged in

## Best Practices

1. **Type Safety**: Always use TypeScript types for navigation
2. **Screen Organization**: Keep screens organized in folders by feature
3. **Navigation Props**: Use proper typing for screen props
4. **Stack Structure**: Keep navigation hierarchy simple and logical
5. **Header Management**: Configure headers per screen or globally as needed

## Troubleshooting

### Common Issues
1. **TypeScript Errors**: Ensure all screen names are in the param list types
2. **Navigation Not Working**: Check that NavigationContainer wraps the navigator
3. **Screen Not Found**: Verify screen is registered in the stack navigator
4. **Props Issues**: Make sure screen props match the navigation type definitions
