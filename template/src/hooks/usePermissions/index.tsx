import {Alert, Linking, Platform} from "react-native";
import {
	check,
	checkNotifications,
	PERMISSIONS,
	request,
	requestNotifications,
} from "react-native-permissions";

import CameraAnimation from "@assets/lottie/cameraAnimation.json";
import GalleryAnimation from "@assets/lottie/galleryAnimation.json";
import LandingAnimation from "@assets/lottie/landingAnimation.json";
import LocationAnimation from "@assets/lottie/locationPermissionAnimation.json";
import MicrophoneAnimation from "@assets/lottie/microphoneAnimation.json";
import NotificationAnimation from "@assets/lottie/notificationAnimation.json";
import CameraBlockedAnimation from "@assets/lottie/PermissionsBlocked/cameraBlockedAnimation.json";
import GalleryBlockedAnimation from "@assets/lottie/PermissionsBlocked/galleryBlockedAnimation.json";
import LocationBlockedAnimation from "@assets/lottie/PermissionsBlocked/locationBlockedAnimation.json";
import MicrophoneBlockedAnimation from "@assets/lottie/PermissionsBlocked/microphoneBlockedAnimation.json";
import NotificationsBlockedAnimation from "@assets/lottie/PermissionsBlocked/notificationBlockedAnimation.json";

const usePermissions = () => {
	// Camera Permissions
	const getCameraPermission = async () => {
		if (Platform.OS === "android") {
			const permission = await check(PERMISSIONS.ANDROID.CAMERA);
			return permission;
		} else {
			const permission = await check(PERMISSIONS.IOS.CAMERA);
			return permission;
		}
	};

	const requestCameraPermission = async () => {
		if (Platform.OS === "android") {
			const permission = await request(PERMISSIONS.ANDROID.CAMERA);
			return permission;
		} else {
			const permission = await request(PERMISSIONS.IOS.CAMERA);
			return permission;
		}
	};

	// Gallery Permissions
	const getGalleryPermission = async () => {
		if (Platform.OS === "android") {
			const permission = await check(
				PERMISSIONS.ANDROID.READ_MEDIA_IMAGES
			);
			return permission;
		} else {
			const permission = await check(PERMISSIONS.IOS.PHOTO_LIBRARY);
			return permission;
		}
	};

	const requestGalleryPermission = async () => {
		if (Platform.OS === "android") {
			const permission = await request(
				PERMISSIONS.ANDROID.READ_MEDIA_IMAGES
			);

			return permission;
		} else {
			const permission = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
			return permission;
		}
	};

	// Microphone Permissions
	const getMicrophonePermission = async () => {
		if (Platform.OS === "android") {
			const permission = await check(PERMISSIONS.ANDROID.RECORD_AUDIO);
			return permission;
		} else {
			const permission = await check(PERMISSIONS.IOS.MICROPHONE);
			return permission;
		}
	};

	const requestMicrophonePermission = async () => {
		if (Platform.OS === "android") {
			const permission = await request(PERMISSIONS.ANDROID.RECORD_AUDIO);
			return permission;
		} else {
			const permission = await request(PERMISSIONS.IOS.MICROPHONE);
			return permission;
		}
	};

	// Notifications Permissions
	const getNotificationsPermission = async () => {
		const {status: permission} = await checkNotifications();
		return permission;
	};

	const requestNotificationsPermission = async () => {
		// edit array to include notification settings you want to request
		const {status: permission} = await requestNotifications([]);
		return permission;
	};

	// Location Permissions
	const getLocationPermission = async () => {
		if (Platform.OS === "android") {
			const permission = await check(
				PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
			);
			return permission;
		} else {
			const permission = await check(
				PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
			);
			return permission;
		}
	};

	const requestLocationPermission = async () => {
		if (Platform.OS === "android") {
			const permission = await request(
				PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
			);
			return permission;
		} else {
			const permission = await request(
				PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
			);
			return permission;
		}
	};

	const openSettings = () => {
		const settingsUrl =
			Platform.OS === "ios"
				? "app-settings:"
				: "package:com.example.myapp"; // FOR ANDROID: Replace "com.example.myapp" with your app's package name
		Linking.openURL(settingsUrl).catch(() => {
			Alert.alert("Failed to open settings");
		});
	};

	// get screen properties for permission screen
	// this can be edited/extended/removed as per requirement

	const getPermissionScreenProperties = (permissionType: string) => {
		switch (permissionType) {
			case "location":
				return {
					permissionAnimation: LocationAnimation,
					permissionTitle: "Enable Location Permission",
					permissionDescription:
						"Please grant location permission to continue using the app features. We promise to keep your location private and secure.",
					buttonLabel: "Enable Location Permission",
					buttonAction: () => requestLocationPermission(),
				};
			case "notifications":
				return {
					permissionAnimation: NotificationAnimation,
					permissionTitle: "Enable Notifications",
					permissionDescription:
						"Please grant notification permissions to continue using the app features. We promise to keep your information private and secure.",
					buttonLabel: "Enable Notifications",
					buttonAction: () => requestNotificationsPermission(),
				};
			case "microphone":
				return {
					permissionAnimation: MicrophoneAnimation,
					permissionTitle: "Enable Microphone",
					permissionDescription:
						"Please grant microphone access to continue using the app features. We promise to keep your information private and secure.",
					buttonLabel: "Enable Microphone",
					buttonAction: () => requestMicrophonePermission(),
				};
			case "camera":
				return {
					permissionAnimation: CameraAnimation,
					permissionTitle: "Enable Camera",
					permissionDescription:
						"Please grant camera access to continue using the app features. We promise to keep your information private and secure.",
					buttonLabel: "Enable Camera",
					buttonAction: () => requestCameraPermission(),
				};
			case "gallery":
				return {
					permissionAnimation: GalleryAnimation,
					permissionTitle: "Enable Gallery",
					permissionDescription:
						"Please grant gallery access to continue using the app features. We promise to keep your information private and secure.",
					buttonLabel: "Enable Gallery",
					buttonAction: () => requestGalleryPermission(),
				};
			default:
				return {
					permissionAnimation: LandingAnimation,
					permissionTitle: "Permission",
					permissionDescription:
						"Please grant permission to continue",
					buttonLabel: "Enable Permission",
				};
		}
	};
	const getPermissionDeniedScreenProperties = (permissionType: string) => {
		switch (permissionType) {
			case "location":
				return {
					permissionAnimation: LocationBlockedAnimation,
					permissionTitle: "Location Blocked",
					permissionDescription:
						"Please grant location access to continue using the app features. We promise to keep your location private and secure.",
					buttonLabel: "Enable Location Permission",
					buttonAction: () => openSettings(),
				};
			case "notifications":
				return {
					permissionAnimation: NotificationsBlockedAnimation,
					permissionTitle: "Notifications Blocked",
					permissionDescription:
						"Please grant notification permissions to continue using the app features. We promise to keep your information private and secure.",
					buttonLabel: "Enable Notifications",
					buttonAction: () => openSettings(),
				};
			case "microphone":
				return {
					permissionAnimation: MicrophoneBlockedAnimation,
					permissionTitle: "Microphone Blocked",
					permissionDescription:
						"Please grant microphone access to continue using the app features. We promise to keep your information private and secure.",
					buttonLabel: "Enable Microphone",
					buttonAction: () => openSettings(),
				};
			case "camera":
				return {
					permissionAnimation: CameraBlockedAnimation,
					permissionTitle: "Camera Blocked",
					permissionDescription:
						"Please grant camera access to continue using the app features. We promise to keep your information private and secure.",
					buttonLabel: "Enable Camera",
					buttonAction: () => openSettings(),
				};
			case "gallery":
				return {
					permissionAnimation: GalleryBlockedAnimation,
					permissionTitle: "Gallery Blocked",
					permissionDescription:
						"Please grant gallery access to continue using the app features. We promise to keep your information private and secure.",
					buttonLabel: "Enable Gallery",
					buttonAction: () => openSettings(),
				};
			default:
				return {
					permissionAnimation: LandingAnimation,
					permissionTitle: "Permission Blocked",
					permissionDescription:
						"Please grant permission to continue",
					buttonLabel: "Enable Permission",
				};
		}
	};

	return {
		getCameraPermission,
		requestCameraPermission,
		getGalleryPermission,
		requestGalleryPermission,
		getMicrophonePermission,
		requestMicrophonePermission,
		getNotificationsPermission,
		requestNotificationsPermission,
		getLocationPermission,
		requestLocationPermission,
		getPermissionScreenProperties,
		getPermissionDeniedScreenProperties,
	};
};

export default usePermissions;
