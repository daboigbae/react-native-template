import React from "react";
import {Text, View} from "react-native";

import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";

import Avatar from "@components/common/Avatar";
import ProfileSelectableItem from "@components/profile/ProfileSelectableItem";
import {NavigationParams} from "@navigation/Navigation";
import {
	MODAL_SCREENS,
	NAVIGATOR_LANDING,
	NAVIGATOR_MODAL_STACK,
} from "@utils/screens";

const ProfileScreen = () => {
	const navigation = useNavigation<StackNavigationProp<NavigationParams>>();

	const handleSignOut = () => {
		navigation.replace(NAVIGATOR_LANDING);
	};

	const handleLocationPermissionTest = () => {
		navigation.navigate(NAVIGATOR_MODAL_STACK, {
			screen: MODAL_SCREENS.PERMISSION_SCREEN,
			params: {
				permissionType: "location",
			},
		});
	};

	const handleNotificationPermissionTest = () => {
		navigation.navigate(NAVIGATOR_MODAL_STACK, {
			screen: MODAL_SCREENS.PERMISSION_SCREEN,
			params: {
				permissionType: "notifications",
			},
		});
	};
	const handleMicrophonePermissionTest = () => {
		navigation.navigate(NAVIGATOR_MODAL_STACK, {
			screen: MODAL_SCREENS.PERMISSION_SCREEN,
			params: {
				permissionType: "microphone",
			},
		});
	};

	const handleCameraPermissionTest = () => {
		navigation.navigate(NAVIGATOR_MODAL_STACK, {
			screen: MODAL_SCREENS.PERMISSION_SCREEN,
			params: {
				permissionType: "camera",
			},
		});
	};

	const handleGalleryPermissionTest = () => {
		navigation.navigate(NAVIGATOR_MODAL_STACK, {
			screen: MODAL_SCREENS.PERMISSION_SCREEN,
			params: {
				permissionType: "gallery",
			},
		});
	};

	return (
		<View className="h-full w-full bg-white justify-start items-center px-4">
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
	);
};

export default ProfileScreen;
