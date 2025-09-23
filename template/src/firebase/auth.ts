import { firebaseAuth } from './config';
import {
  AuthError,
  FirebaseUser,
  SignInCredentials,
  SignUpCredentials,
} from './types';

export class AuthService {
  /**
   * Sign in with email and password
   */
  static async signIn({
    email,
    password,
  }: SignInCredentials): Promise<FirebaseUser> {
    try {
      const userCredential = await firebaseAuth.signInWithEmailAndPassword(
        email,
        password
      );
      const user = userCredential.user;

      return {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        emailVerified: user.emailVerified,
      };
    } catch (error: any) {
      throw this.handleAuthError(error);
    }
  }

  /**
   * Create new user account
   */
  static async signUp({
    email,
    password,
    displayName,
  }: SignUpCredentials): Promise<FirebaseUser> {
    try {
      const userCredential = await firebaseAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      const user = userCredential.user;

      // Update display name if provided
      if (displayName) {
        await user.updateProfile({ displayName });
      }

      return {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        emailVerified: user.emailVerified,
      };
    } catch (error: any) {
      throw this.handleAuthError(error);
    }
  }

  /**
   * Sign out current user
   */
  static async signOut(): Promise<void> {
    try {
      await firebaseAuth.signOut();
    } catch (error: any) {
      throw this.handleAuthError(error);
    }
  }

  /**
   * Send password reset email
   */
  static async resetPassword(email: string): Promise<void> {
    try {
      await firebaseAuth.sendPasswordResetEmail(email);
    } catch (error: any) {
      throw this.handleAuthError(error);
    }
  }

  /**
   * Get current user
   */
  static getCurrentUser(): FirebaseUser | null {
    const user = firebaseAuth.currentUser;
    if (!user) return null;

    return {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
  }

  /**
   * Listen to auth state changes
   */
  static onAuthStateChanged(callback: (user: FirebaseUser | null) => void) {
    return firebaseAuth.onAuthStateChanged(user => {
      if (user) {
        callback({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          emailVerified: user.emailVerified,
        });
      } else {
        callback(null);
      }
    });
  }

  /**
   * Handle Firebase auth errors
   */
  private static handleAuthError(error: any): AuthError {
    const errorCode = error.code || 'unknown';
    const errorMessage = error.message || 'An unknown error occurred';

    // Map Firebase error codes to user-friendly messages
    const errorMessages: { [key: string]: string } = {
      'auth/user-not-found': 'No user found with this email address.',
      'auth/wrong-password': 'Incorrect password.',
      'auth/email-already-in-use': 'An account with this email already exists.',
      'auth/weak-password': 'Password should be at least 6 characters.',
      'auth/invalid-email': 'Invalid email address.',
      'auth/user-disabled': 'This account has been disabled.',
      'auth/too-many-requests':
        'Too many failed attempts. Please try again later.',
      'auth/network-request-failed':
        'Network error. Please check your connection.',
    };

    return {
      code: errorCode,
      message: errorMessages[errorCode] || errorMessage,
    };
  }
}
