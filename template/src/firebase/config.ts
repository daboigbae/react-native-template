import { getApps, initializeApp } from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';

// Initialize Firebase app (auto-detects config files)
const app =
  getApps().length === 0
    ? initializeApp({
        // Auto-detection will use GoogleService-Info.plist and google-services.json
        // No additional config needed when using config files
      } as any)
    : getApps()[0];

// Export Firebase services
export const firebaseAuth = auth();
export const firebaseStorage = storage();

export default app;
