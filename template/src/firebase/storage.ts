import { firebaseStorage } from './config';
import { StorageError, UploadResult } from './types';

export class StorageService {
  /**
   * Upload file to Firebase Storage
   */
  static async uploadFile(
    file: any, // File object or URI
    path: string,
    metadata?: {
      contentType?: string;
      customMetadata?: { [key: string]: string };
    }
  ): Promise<UploadResult> {
    try {
      const reference = firebaseStorage.ref(path);

      // Upload the file
      const uploadTask = reference.putFile(file, metadata);

      // Wait for upload to complete
      await uploadTask;

      // Get download URL
      const downloadURL = await reference.getDownloadURL();

      // Get metadata
      const fileMetadata = await reference.getMetadata();

      return {
        downloadURL,
        metadata: {
          name: fileMetadata.name,
          size: fileMetadata.size,
          contentType: fileMetadata.contentType || 'unknown',
        },
      };
    } catch (error: any) {
      throw this.handleStorageError(error);
    }
  }

  /**
   * Upload file from URI (for React Native)
   */
  static async uploadFileFromURI(
    uri: string,
    path: string,
    metadata?: {
      contentType?: string;
      customMetadata?: { [key: string]: string };
    }
  ): Promise<UploadResult> {
    try {
      const reference = firebaseStorage.ref(path);

      // Upload the file
      const uploadTask = reference.putFile(uri, metadata);

      // Wait for upload to complete
      await uploadTask;

      // Get download URL
      const downloadURL = await reference.getDownloadURL();

      // Get metadata
      const fileMetadata = await reference.getMetadata();

      return {
        downloadURL,
        metadata: {
          name: fileMetadata.name,
          size: fileMetadata.size,
          contentType: fileMetadata.contentType || 'unknown',
        },
      };
    } catch (error: any) {
      throw this.handleStorageError(error);
    }
  }

  /**
   * Delete file from Firebase Storage
   */
  static async deleteFile(path: string): Promise<void> {
    try {
      const reference = firebaseStorage.ref(path);
      await reference.delete();
    } catch (error: any) {
      throw this.handleStorageError(error);
    }
  }

  /**
   * Get download URL for a file
   */
  static async getDownloadURL(path: string): Promise<string> {
    try {
      const reference = firebaseStorage.ref(path);
      return await reference.getDownloadURL();
    } catch (error: any) {
      throw this.handleStorageError(error);
    }
  }

  /**
   * Get file metadata
   */
  static async getFileMetadata(path: string) {
    try {
      const reference = firebaseStorage.ref(path);
      return await reference.getMetadata();
    } catch (error: any) {
      throw this.handleStorageError(error);
    }
  }

  /**
   * List files in a directory
   */
  static async listFiles(path: string) {
    try {
      const reference = firebaseStorage.ref(path);
      const result = await reference.listAll();

      return {
        items: result.items.map(item => item.fullPath),
        prefixes: result.prefixes.map(prefix => prefix.fullPath),
      };
    } catch (error: any) {
      throw this.handleStorageError(error);
    }
  }

  /**
   * Handle Firebase Storage errors
   */
  private static handleStorageError(error: any): StorageError {
    const errorCode = error.code || 'unknown';
    const errorMessage = error.message || 'An unknown error occurred';

    // Map Firebase Storage error codes to user-friendly messages
    const errorMessages: { [key: string]: string } = {
      'storage/object-not-found': 'File not found.',
      'storage/bucket-not-found': 'Storage bucket not found.',
      'storage/project-not-found': 'Project not found.',
      'storage/quota-exceeded': 'Storage quota exceeded.',
      'storage/unauthenticated': 'User not authenticated.',
      'storage/unauthorized': 'User not authorized to access this file.',
      'storage/retry-limit-exceeded': 'Maximum retry attempts exceeded.',
      'storage/invalid-checksum': 'File checksum does not match.',
      'storage/canceled': 'Upload was canceled.',
      'storage/invalid-event-name': 'Invalid event name.',
      'storage/invalid-url': 'Invalid URL provided.',
      'storage/invalid-argument': 'Invalid argument provided.',
      'storage/no-default-bucket': 'No default bucket configured.',
      'storage/cannot-slice-blob': 'Cannot slice blob.',
      'storage/server-file-wrong-size': 'Server file size does not match.',
    };

    return {
      code: errorCode,
      message: errorMessages[errorCode] || errorMessage,
    };
  }
}
