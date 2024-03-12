import React from "react";
import {Alert, ScrollView, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";

import Avatar from "@components/common/Avatar";
import ProfileSelectableItem from "@components/profile/ProfileSelectableItem";
import usePermissions from "@hooks/usePermissions";
import {NavigationParams} from "@navigation/Navigation";
import {
	MODAL_SCREENS,
	NAVIGATOR_LANDING,
	NAVIGATOR_MODAL_STACK,
} from "@utils/screens";

const ProfileScreen = () => {
	const navigation = useNavigation<StackNavigationProp<NavigationParams>>();
	const {
		getCameraPermission,
		getGalleryPermission,
		getMicrophonePermission,
		getNotificationsPermission,
		getLocationPermission,
	} = usePermissions();

	const handleSignOut = () => {
		navigation.replace(NAVIGATOR_LANDING);
	};

	const handleLocationPermissionTest = async () => {
		const permission = await getLocationPermission();
		if (permission === "granted") {
			Alert.alert(
				"Permission Granted",
				"You have already granted location permission"
			);
		} else if (permission === "blocked") {
			navigation.navigate(NAVIGATOR_MODAL_STACK, {
				screen: MODAL_SCREENS.PERMISSION_DENIED_SCREEN,
				params: {
					permissionType: "location",
				},
			});
		} else {
			navigation.navigate(NAVIGATOR_MODAL_STACK, {
				screen: MODAL_SCREENS.PERMISSION_SCREEN,
				params: {
					permissionType: "location",
				},
			});
		}
	};

	const handleNotificationPermissionTest = async () => {
		const permission = await getNotificationsPermission();

		if (permission === "granted") {
			Alert.alert(
				"Permission Granted",
				"You have already granted notification permission"
			);
		} else if (permission === "blocked") {
			navigation.navigate(NAVIGATOR_MODAL_STACK, {
				screen: MODAL_SCREENS.PERMISSION_DENIED_SCREEN,
				params: {
					permissionType: "notifications",
				},
			});
		} else {
			navigation.navigate(NAVIGATOR_MODAL_STACK, {
				screen: MODAL_SCREENS.PERMISSION_SCREEN,
				params: {
					permissionType: "notifications",
				},
			});
		}
	};
	const handleMicrophonePermissionTest = async () => {
		const permission = await getMicrophonePermission();
		if (permission === "granted") {
			Alert.alert(
				"Permission Granted",
				"You have already granted microphone permission"
			);
		} else if (permission === "blocked") {
			navigation.navigate(NAVIGATOR_MODAL_STACK, {
				screen: MODAL_SCREENS.PERMISSION_DENIED_SCREEN,
				params: {
					permissionType: "microphone",
				},
			});
		} else {
			navigation.navigate(NAVIGATOR_MODAL_STACK, {
				screen: MODAL_SCREENS.PERMISSION_SCREEN,
				params: {
					permissionType: "microphone",
				},
			});
		}
	};

	const handleCameraPermissionTest = async () => {
		const permission = await getCameraPermission();

		if (permission === "granted") {
			Alert.alert(
				"Permission Granted",
				"You have already granted camera permission"
			);
		} else if (permission === "blocked") {
			navigation.navigate(NAVIGATOR_MODAL_STACK, {
				screen: MODAL_SCREENS.PERMISSION_DENIED_SCREEN,
				params: {
					permissionType: "camera",
				},
			});
		} else {
			navigation.navigate(NAVIGATOR_MODAL_STACK, {
				screen: MODAL_SCREENS.PERMISSION_SCREEN,
				params: {
					permissionType: "camera",
				},
			});
		}
	};

	const handleGalleryPermissionTest = async () => {
		const permission = await getGalleryPermission();

		if (permission === "granted") {
			Alert.alert(
				"Permission Granted",
				"You have already granted gallery permission"
			);
		} else if (permission === "blocked") {
			navigation.navigate(NAVIGATOR_MODAL_STACK, {
				screen: MODAL_SCREENS.PERMISSION_DENIED_SCREEN,
				params: {
					permissionType: "gallery",
				},
			});
		} else {
			navigation.navigate(NAVIGATOR_MODAL_STACK, {
				screen: MODAL_SCREENS.PERMISSION_SCREEN,
				params: {
					permissionType: "gallery",
				},
			});
		}
	};

	return (
		<ScrollView className="h-full w-full bg-white">
			<SafeAreaView>
				<View className="h-full w-full bg-white justify-start items-center px-4 mt-4">
					<Avatar size={120} username="Test User" />
					<View className="h-3" />
					<Text className="text-3xl font-bold">Test User</Text>
					<Text className="text-base font-light text-gray-500">
						Welcome to your profile
					</Text>
					<View className="h-4" />
					<ProfileSelectableItem
						onPress={handleLocationPermissionTest}
						label="Location Permission Test"
						icon="location-on"
					/>
					<View className="h-3" />
					<ProfileSelectableItem
						onPress={handleNotificationPermissionTest}
						label="Notification Permission Test"
						icon="notifications"
					/>
					<View className="h-3" />
					<ProfileSelectableItem
						onPress={handleMicrophonePermissionTest}
						label="Microphone Permission Test"
						icon="mic"
					/>
					<View className="h-3" />
					<ProfileSelectableItem
						onPress={handleCameraPermissionTest}
						label="Camera Permission Test"
						icon="camera-alt"
					/>
					<View className="h-3" />
					<ProfileSelectableItem
						onPress={handleGalleryPermissionTest}
						label="Gallery Permission Test"
						icon="photo"
					/>
					<View className="h-3" />
					<ProfileSelectableItem
						iconBackgroundColor="bg-red-200"
						onPress={handleSignOut}
						label="Sign Out"
						icon="logout"
					/>
				</View>
			</SafeAreaView>
		</ScrollView>
	);
};

export default ProfileScreen;
