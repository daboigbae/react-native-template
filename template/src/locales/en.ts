export default {
  // Common
  common: {
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    cancel: 'Cancel',
    confirm: 'Confirm',
    save: 'Save',
    delete: 'Delete',
    edit: 'Edit',
    back: 'Back',
    next: 'Next',
    done: 'Done',
  },

  // Authentication
  auth: {
    welcomeBack: 'Welcome Back',
    signInSubtitle: 'Sign in to your account to continue',
    emailAddress: 'Email Address',
    password: 'Password',
    enterEmail: 'Enter your email',
    enterPassword: 'Enter your password',
    forgotPassword: 'Forgot Password?',
    signIn: 'Sign In',
    signingIn: 'Signing In...',
    dontHaveAccount: "Don't have an account?",
    signUp: 'Sign Up',
    createAccount: 'Create Account',
    signUpSubtitle: 'Sign up to get started with your account',
    firstName: 'First Name',
    lastName: 'Last Name',
    confirmPassword: 'Confirm Password',
    enterFirstName: 'First name',
    enterLastName: 'Last name',
    createPassword: 'Create a password',
    confirmYourPassword: 'Confirm your password',
    createAccountButton: 'Create Account',
    creatingAccount: 'Creating Account...',
    alreadyHaveAccount: 'Already have an account?',
    signInLink: 'Sign In',
    emailRequired: 'Email is required',
    passwordRequired: 'Password is required',
    firstNameRequired: 'First name is required',
    lastNameRequired: 'Last name is required',
    confirmPasswordRequired: 'Please confirm your password',
    validEmailRequired: 'Please enter a valid email address',
    passwordTooShort: 'Password must be at least 6 characters',
    passwordsDoNotMatch: 'Passwords do not match',
    loginSuccessful: 'Login Successful',
    welcomeBackMessage: 'Welcome back!',
    accountCreated: 'Account Created!',
    welcomeMessage: 'Welcome! Your account has been created successfully.',
    loginFailed: 'Login Failed',
    invalidCredentials: 'Invalid email or password. Please try again.',
    signupFailed: 'Signup Failed',
    unableToCreateAccount: 'Unable to create account. Please try again.',
  },

  // Forgot Password
  forgotPassword: {
    title: 'Forgot Password?',
    subtitle:
      "No worries! Enter your email address and we'll send you instructions to reset your password.",
    emailSent: 'Email Sent!',
    emailSentSubtitle:
      'Check your email for instructions to reset your password.',
    sendResetInstructions: 'Send Reset Instructions',
    sending: 'Sending...',
    sendAnotherEmail: 'Send Another Email',
    backToSignIn: 'Back to Sign In',
    needHelp: 'Need Help?',
    helpText:
      "Make sure you enter the email address associated with your account. You'll receive a secure link to reset your password.",
    didntReceiveEmail: "Didn't receive the email?",
    checkSpamFolder:
      'Check your spam folder or try sending another email. Make sure you entered the correct email address.',
    sendFailed: 'Unable to send reset email. Please try again.',
  },

  // Home Screen
  home: {
    title: 'Ultimate MVP Builder',
    subtitle: 'A comprehensive React Native template for rapid MVP development',
    welcome: '🎉 Welcome to Your MVP!',
    welcomeMessage:
      "This template provides everything you need to build and ship your mobile app quickly. From authentication to permissions, we've got you covered.",
    whatsIncluded: "What's Included",
    gettingStarted: 'Getting Started',
    gettingStartedText:
      'Start building by exploring the authentication screens, checking out the permissions system, or diving into the navigation structure. Everything is ready to customize for your specific needs.',
    templateInfo: 'Template Information',
    templateInfoText:
      'This template is designed for developers who want to ship fast. It includes common patterns, best practices, and a solid foundation that you can build upon. Customize the colors, add your features, and launch your MVP in record time.',
    features: {
      authentication: {
        title: 'Authentication Flow',
        description:
          'Complete login, signup, and password recovery screens with form validation and error handling.',
      },
      navigation: {
        title: 'Navigation System',
        description:
          'Drawer navigation with bottom tabs, splash screen, and proper navigation structure for scalable apps.',
      },
      ui: {
        title: 'Modern UI Components',
        description:
          'Beautiful, consistent design system using Gluestack UI and Tailwind CSS for rapid development.',
      },
      permissions: {
        title: 'Permissions Management',
        description:
          'Built-in permission handling for location, camera, and microphone with user-friendly interfaces.',
      },
      crossPlatform: {
        title: 'Cross-Platform',
        description:
          'Works seamlessly on both iOS and Android with platform-specific optimizations and configurations.',
      },
      typescript: {
        title: 'TypeScript Ready',
        description:
          'Fully typed codebase with proper interfaces and type safety for better development experience.',
      },
    },
  },

  // Permissions
  permissions: {
    title: 'Permissions',
    subtitle: 'Manage your app permissions to unlock all features',
    privacyFirst: 'Privacy First',
    privacyText:
      'We only request permissions that are essential for app functionality. You can change these settings anytime in your device settings.',
    locationAccess: 'Location Access',
    locationDescription:
      'Allow access to your location for location-based features',
    locationGranted: 'Location Access Granted',
    grantLocationAccess: 'Grant Location Access',
    cameraAccess: 'Camera Access',
    cameraDescription:
      'Allow access to your camera for photo and video features',
    cameraGranted: 'Camera Access Granted',
    grantCameraAccess: 'Grant Camera Access',
    microphoneAccess: 'Microphone Access',
    microphoneDescription:
      'Allow access to your microphone for audio recording features',
    microphoneGranted: 'Microphone Access Granted',
    grantMicrophoneAccess: 'Grant Microphone Access',
  },

  // Splash Screen
  splash: {
    title: 'Ultimate MVP Builder',
    tagline: 'Build and ship your mobile app faster than ever',
    initializing: 'Initializing...',
    settingUp: 'Setting up your development environment',
    poweredBy: 'Powered by React Native',
    version: 'Version 1.0.0',
  },

  // Navigation
  navigation: {
    home: 'Home',
    permissions: 'Permissions',
    signOut: 'Sign Out',
  },

  // Settings
  settings: {
    title: 'Settings',
    language: 'Language',
    theme: 'Theme',
    notifications: 'Notifications',
    privacy: 'Privacy',
    about: 'About',
  },
};
