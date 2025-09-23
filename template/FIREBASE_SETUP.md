# Firebase Setup Guide

This guide will help you set up Firebase Authentication and Storage for the React Native template.

## 🔥 Prerequisites

- A Google account
- Firebase project created
- React Native project with Firebase dependencies installed

## 📱 Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project"
3. Enter your project name
4. Choose whether to enable Google Analytics (optional)
5. Click "Create project"

## 🔐 Step 2: Enable Authentication

1. In your Firebase project, go to **Authentication** → **Sign-in method**
2. Click on **Email/Password**
3. Enable the first option (Email/Password)
4. Click **Save**

## 💾 Step 3: Enable Storage

1. Go to **Storage** in your Firebase project
2. Click **Get started**
3. Choose **Start in test mode** (for development)
4. Select a location for your storage bucket
5. Click **Done**

## 📱 Step 4: Add iOS App

1. In Firebase Console, click **Add app** → **iOS**
2. Enter your iOS bundle ID (found in `ios/RNTemplate/Info.plist` as `CFBundleIdentifier`)
3. Enter app nickname (optional)
4. Click **Register app**
5. Download `GoogleService-Info.plist`
6. **Important**: Add the file to `ios/RNTemplate/GoogleService-Info.plist` (not in the project root)

## 🤖 Step 5: Add Android App

1. In Firebase Console, click **Add app** → **Android**
2. Enter your Android package name (found in `android/app/build.gradle` as `applicationId`)
3. Enter app nickname (optional)
4. Click **Register app**
5. Download `google-services.json`
6. **Important**: Add the file to `android/app/google-services.json`

## 🔧 Step 6: Configure iOS

The iOS configuration is already set up in the template. The `GoogleService-Info.plist` file will be automatically detected by the Firebase SDK.

## 🔧 Step 7: Configure Android

The Android configuration is already set up in the template. The `google-services.json` file will be automatically detected by the Firebase SDK.

## 🧪 Step 8: Test Authentication

1. Run your app: `yarn ios` or `yarn android`
2. Try creating a new account in the Signup screen
3. Check Firebase Console → Authentication → Users to see the new user
4. Test login with the created account

## 🔒 Step 9: Security Rules (Optional)

### Authentication Rules
Authentication is handled by Firebase automatically. No additional rules needed for basic email/password authentication.

### Storage Rules
For development, you can use these basic rules in Firebase Console → Storage → Rules:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

**⚠️ Warning**: These rules allow any authenticated user to read/write any file. For production, implement more specific rules.

## 🚀 Step 10: Production Considerations

### Authentication
- Enable additional sign-in methods if needed (Google, Apple, etc.)
- Set up email verification
- Configure password reset templates

### Storage
- Implement proper security rules
- Set up file organization structure
- Configure upload limits and file types

### Security
- Review and update security rules
- Enable App Check for additional security
- Set up monitoring and alerts

## 🐛 Troubleshooting

### Common Issues

1. **"Firebase not initialized" error**
   - Ensure `GoogleService-Info.plist` is in `ios/RNTemplate/`
   - Ensure `google-services.json` is in `android/app/`
   - Run `cd ios && pod install` for iOS

2. **Authentication not working**
   - Check if Email/Password is enabled in Firebase Console
   - Verify bundle ID/package name matches Firebase project
   - Check network connectivity

3. **Build errors**
   - Clean build: `yarn clean`
   - Reinstall dependencies: `rm -rf node_modules && yarn install`
   - For iOS: `cd ios && pod install`

### Getting Help

- Check [Firebase Documentation](https://firebase.google.com/docs)
- Review [React Native Firebase Documentation](https://rnfirebase.io/)
- Open an issue in the project repository

## ✅ Verification Checklist

- [ ] Firebase project created
- [ ] Authentication enabled (Email/Password)
- [ ] Storage enabled
- [ ] iOS app added with correct bundle ID
- [ ] Android app added with correct package name
- [ ] `GoogleService-Info.plist` added to iOS project
- [ ] `google-services.json` added to Android project
- [ ] App builds and runs successfully
- [ ] Can create new user account
- [ ] Can login with created account
- [ ] Can reset password

---

**🎉 Congratulations!** Your Firebase setup is complete and ready for development.