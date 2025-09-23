// Firebase User type
export interface FirebaseUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  emailVerified: boolean;
}

// Authentication types
export interface SignInCredentials {
  email: string;
  password: string;
}

export interface SignUpCredentials {
  email: string;
  password: string;
  displayName?: string;
}

// Storage types
export interface UploadResult {
  downloadURL: string;
  metadata: {
    name: string;
    size: number;
    contentType: string;
  };
}

export interface StorageError {
  code: string;
  message: string;
}

// Auth error types
export interface AuthError {
  code: string;
  message: string;
}
