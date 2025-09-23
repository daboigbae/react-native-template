import { useCallback, useEffect, useState } from 'react';
import { Alert, Platform } from 'react-native';
import {
  check,
  openSettings,
  Permission,
  PERMISSIONS,
  request,
  RESULTS,
} from 'react-native-permissions';

// Define permission types
export type PermissionType = 'location' | 'camera' | 'audio';

// Permission mapping for different platforms
const PERMISSION_MAP: Record<PermissionType, Permission> = {
  location: Platform.select({
    ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
    android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
  }) as Permission,
  camera: Platform.select({
    ios: PERMISSIONS.IOS.CAMERA,
    android: PERMISSIONS.ANDROID.CAMERA,
  }) as Permission,
  audio: Platform.select({
    ios: PERMISSIONS.IOS.MICROPHONE,
    android: PERMISSIONS.ANDROID.RECORD_AUDIO,
  }) as Permission,
};

// Permission descriptions for user-friendly messages
const PERMISSION_DESCRIPTIONS: Record<PermissionType, string> = {
  location: 'Location access is needed to provide location-based features.',
  camera: 'Camera access is needed to take photos and videos.',
  audio: 'Microphone access is needed to record audio.',
};

// Permission status type
export type PermissionStatus =
  | 'granted'
  | 'denied'
  | 'blocked'
  | 'unavailable'
  | 'checking';

// Hook return type
export interface UsePermissionsReturn {
  // Permission statuses
  permissions: Record<PermissionType, PermissionStatus>;

  // Actions
  checkPermission: (permissionType: PermissionType) => Promise<void>;
  requestPermission: (permissionType: PermissionType) => Promise<string>;
  requestPermissionWithFlow: (permissionType: PermissionType) => Promise<void>;

  // Individual permission statuses
  isLocationGranted: boolean;
  isCameraGranted: boolean;
  isAudioGranted: boolean;

  // Loading states
  isLoading: boolean;
}

export const usePermissions = (): UsePermissionsReturn => {
  const [permissions, setPermissions] = useState<
    Record<PermissionType, PermissionStatus>
  >({
    location: 'checking',
    camera: 'checking',
    audio: 'checking',
  });

  const [isLoading, setIsLoading] = useState(false);

  // Convert RESULTS to our PermissionStatus type
  const convertResultToStatus = (result: string): PermissionStatus => {
    switch (result) {
      case RESULTS.GRANTED:
        return 'granted';
      case RESULTS.DENIED:
        return 'denied';
      case RESULTS.BLOCKED:
        return 'blocked';
      case RESULTS.UNAVAILABLE:
        return 'unavailable';
      default:
        return 'denied';
    }
  };

  // Check a single permission
  const checkPermission = useCallback(
    async (permissionType: PermissionType) => {
      try {
        const permission = PERMISSION_MAP[permissionType];
        const result = await check(permission);
        const status = convertResultToStatus(result);

        setPermissions(prev => ({
          ...prev,
          [permissionType]: status,
        }));
      } catch (error) {
        console.error(`Error checking ${permissionType} permission:`, error);
        setPermissions(prev => ({
          ...prev,
          [permissionType]: 'denied',
        }));
      }
    },
    []
  );

  // Request a single permission
  const requestPermission = useCallback(
    async (permissionType: PermissionType) => {
      try {
        setIsLoading(true);
        const permission = PERMISSION_MAP[permissionType];
        const result = await request(permission);
        const status = convertResultToStatus(result);

        setPermissions(prev => ({
          ...prev,
          [permissionType]: status,
        }));

        return result;
      } catch (error) {
        console.error(`Error requesting ${permissionType} permission:`, error);
        setPermissions(prev => ({
          ...prev,
          [permissionType]: 'denied',
        }));
        return RESULTS.DENIED;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  // Handle permission result with user feedback
  const handlePermissionResult = useCallback(
    (permissionType: PermissionType, result: string) => {
      const description = PERMISSION_DESCRIPTIONS[permissionType];

      switch (result) {
        case RESULTS.GRANTED:
          Alert.alert(
            'Permission Granted',
            `${description} You can now use this feature.`,
            [{ text: 'OK' }]
          );
          break;

        case RESULTS.DENIED:
          Alert.alert(
            'Permission Denied',
            `${description} You can enable it later in Settings.`,
            [
              { text: 'Cancel' },
              { text: 'Settings', onPress: () => openSettings() },
            ]
          );
          break;

        case RESULTS.BLOCKED:
        case RESULTS.UNAVAILABLE:
          Alert.alert(
            'Permission Unavailable',
            `${description} Please enable it in Settings to use this feature.`,
            [
              { text: 'Cancel' },
              { text: 'Settings', onPress: () => openSettings() },
            ]
          );
          break;

        default:
          Alert.alert(
            'Permission Error',
            'There was an error with the permission request.',
            [{ text: 'OK' }]
          );
      }
    },
    []
  );

  // Complete permission flow with UI feedback
  const requestPermissionWithFlow = useCallback(
    async (permissionType: PermissionType) => {
      try {
        // First check current status
        const currentStatus = permissions[permissionType];

        if (currentStatus === 'granted') {
          Alert.alert(
            'Permission Already Granted',
            `${PERMISSION_DESCRIPTIONS[permissionType]} This feature is already available.`,
            [{ text: 'OK' }]
          );
          return;
        }

        // Request permission
        const result = await requestPermission(permissionType);

        // Handle the result with user feedback
        handlePermissionResult(permissionType, result);
      } catch (error) {
        console.error(`Error in permission flow for ${permissionType}:`, error);
        Alert.alert(
          'Permission Error',
          'There was an error requesting the permission.',
          [{ text: 'OK' }]
        );
      }
    },
    [permissions, requestPermission, handlePermissionResult]
  );

  // Check all permissions on mount
  useEffect(() => {
    const checkAllPermissions = async () => {
      const permissionTypes: PermissionType[] = ['location', 'camera', 'audio'];

      for (const permissionType of permissionTypes) {
        await checkPermission(permissionType);
      }
    };

    checkAllPermissions();
  }, [checkPermission]);

  // Computed properties for easy access
  const isLocationGranted = permissions.location === 'granted';
  const isCameraGranted = permissions.camera === 'granted';
  const isAudioGranted = permissions.audio === 'granted';

  return {
    permissions,
    checkPermission,
    requestPermission,
    requestPermissionWithFlow,
    isLocationGranted,
    isCameraGranted,
    isAudioGranted,
    isLoading,
  };
};
