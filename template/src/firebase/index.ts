// Firebase configuration
export { default as firebaseApp } from './config';
export { firebaseAuth, firebaseStorage } from './config';

// Firebase services
export { AuthService } from './auth';
export { StorageService } from './storage';

// Firebase types
export type {
  FirebaseUser,
  SignInCredentials,
  SignUpCredentials,
  UploadResult,
  StorageError,
  AuthError,
} from './types';
