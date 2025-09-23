# Ultimate MVP Builder - React Native Template

A comprehensive, production-ready React Native template designed to accelerate MVP development. This template provides a solid foundation with modern architecture, authentication, navigation, theming, and essential features out of the box.

## 📚 Libraries & Technologies

### Core Libraries
- **React Native** - Cross-platform mobile development
- **TypeScript** - Type safety and better developer experience
- **React Navigation** - Navigation library with drawer, tabs, and stack navigators
- **Gluestack UI** - Modern UI component library
- **NativeWind** - Tailwind CSS for React Native

### State Management
- **Redux Toolkit** - Predictable state container
- **Redux Persist** - State persistence across app restarts
- **React Redux** - React bindings for Redux

### Backend & Services
- **Firebase** - Authentication and Storage services
- **Axios** - HTTP client for API requests
- **i18next** - Internationalization framework

### Development Tools
- **ESLint** - Code linting and quality
- **Prettier** - Code formatting
- **Jest** - Testing framework
- **Metro** - React Native bundler

## 📁 Folder Structure

```
src/
├── api/                 # API client and types
│   ├── useApi.ts       # API hook with interceptors
│   └── types.ts        # API-related type definitions
├── components/         # Reusable UI components
│   ├── Button.tsx      # Custom button component
│   ├── TextInput.tsx   # Custom text input component
│   └── ThemeToggle.tsx # Theme switching component
├── contexts/           # React contexts
│   ├── ThemeContext.tsx    # Theme management
│   └── LanguageContext.tsx # Language management
├── firebase/           # Firebase configuration
│   └── config.ts       # Firebase initialization
├── hooks/              # Custom React hooks
│   ├── useThemeColors.ts    # Theme color utilities
│   ├── usePermissions.ts    # Device permissions
│   ├── useApi.ts            # API client hook
│   └── useFirebaseAuth.ts   # Firebase authentication
├── locales/            # Translation files
│   ├── en.json         # English translations
│   └── es.json         # Spanish translations
├── navigation/         # Navigation configuration
│   ├── AppNavigator.tsx        # Main app navigator
│   ├── DrawerNavigator.tsx     # Drawer navigation
│   ├── BottomTabNavigator.tsx  # Bottom tab navigation
│   └── UnauthenticatedStack.tsx # Auth flow navigation
├── screens/            # Screen components
│   ├── auth/           # Authentication screens
│   │   ├── LoginScreen.tsx
│   │   ├── SignupScreen.tsx
│   │   └── ForgotPasswordScreen.tsx
│   ├── main/           # Main app screens
│   │   ├── HomeScreen.tsx
│   │   ├── PermissionsScreen.tsx
│   │   └── ApiExampleScreen.tsx
│   └── SplashScreen.tsx # App loading screen
├── store/              # Redux store
│   ├── index.ts        # Store configuration
│   ├── hooks.ts        # Typed Redux hooks
│   └── slices/         # Redux slices
│       └── userSlice.ts # User state management
└── types/              # TypeScript type definitions
    ├── index.ts        # Main type exports
    ├── navigation.ts   # Navigation types
    ├── theme.ts        # Theme types
    └── api.ts          # API types
```

## 🔄 State Management

This template uses **Redux Toolkit** for state management with the following features:

### User State
```typescript
// User slice manages authentication state
interface UserState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
}
```

### Redux Persist
- User authentication state persists across app restarts
- Configured with AsyncStorage for React Native
- Automatic rehydration on app launch

### Usage Example
```typescript
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setUser, clearUser } from '../store/slices/userSlice';

const dispatch = useAppDispatch();
const { user, isAuthenticated } = useAppSelector(state => state.user);

// Dispatch actions
dispatch(setUser(userData));
dispatch(clearUser());
```

## 🌐 API Usage & Handling

### API Client Setup
The template includes a ready-to-use API client with:
- **Base URL configuration**
- **Request/Response interceptors**
- **Token management**
- **Error handling**

### Usage Example
```typescript
import { useApi } from '../hooks/useApi';

const MyComponent = () => {
  const api = useApi();
  
  const fetchData = async () => {
    try {
      const response = await api.get('/users');
      console.log(response.data);
    } catch (error) {
      console.error('API Error:', error);
    }
  };
};
```

### API Configuration
- Base URL: Configure in `src/api/useApi.ts`
- Headers: Automatically managed
- Timeout: Configurable request timeout
- Retry: Automatic retry on network errors

## 🌍 Translations

### i18next Integration
The template supports multiple languages with:
- **English** (default)
- **Spanish** (included)
- **Easy to add more languages**

### Usage Example
```typescript
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation();
  
  return (
    <Text>{t('welcome.message')}</Text>
  );
};
```

### Adding New Languages
1. Create new translation file in `src/locales/`
2. Add language to `src/contexts/LanguageContext.tsx`
3. Update language selector component

### Translation Files Structure
```json
{
  "welcome": {
    "title": "Welcome",
    "message": "Welcome to the app"
  },
  "auth": {
    "login": "Login",
    "signup": "Sign Up"
  }
}
```

## 🛠 Installation Instructions

### Prerequisites
- Node.js (v16 or higher)
- React Native CLI
- Xcode (for iOS development)
- Android Studio (for Android development)
- CocoaPods (for iOS dependencies)

### Step-by-Step Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd RNTemplate
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **iOS Setup**
   ```bash
   cd ios
   pod install
   cd ..
   ```

4. **Run the application**
   ```bash
   # iOS
   yarn ios
   
   # Android
   yarn android
   ```

### Available Scripts
- `yarn start` - Start Metro bundler
- `yarn ios` - Run on iOS simulator
- `yarn android` - Run on Android emulator
- `yarn test` - Run tests
- `yarn lint` - Run ESLint
- `yarn clean` - Clean build artifacts

## 🔥 Firebase Setup

### Quick Setup
1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication (Email/Password provider)
3. Enable Storage
4. Add your configuration files

### Configuration Files Location

#### iOS Configuration
- **File**: `GoogleService-Info.plist`
- **Location**: `ios/RNTemplate/GoogleService-Info.plist`
- **How to add**: Download from Firebase Console → Project Settings → iOS App

#### Android Configuration
- **File**: `google-services.json`
- **Location**: `android/app/google-services.json`
- **How to add**: Download from Firebase Console → Project Settings → Android App

### Firebase Services Included
- **Authentication**: Email/password login, signup, password reset
- **Storage**: File upload and download capabilities
- **Auto-detection**: Configuration files are automatically detected

### Detailed Setup
For complete Firebase setup instructions, see [FIREBASE_SETUP.md](./FIREBASE_SETUP.md).

---

**Ready to build your MVP! 🚀**