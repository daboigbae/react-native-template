import React, {useMemo} from "react";
import {ScrollView, Text, View} from "react-native";

import {useRoute} from "@react-navigation/native";
import LottieView from "lottie-react-native";

import CameraAnimation from "@assets/lottie/cameraAnimation.json";
import GalleryAnimation from "@assets/lottie/galleryAnimation.json";
import LandingAnimation from "@assets/lottie/landingAnimation.json";
import LocationAnimation from "@assets/lottie/locationPermissionAnimation.json";
import MicrophoneAnimation from "@assets/lottie/microphoneAnimation.json";
import NotificationAnimation from "@assets/lottie/notificationAnimation.json";
import Button from "@components/common/Button";

interface RouteParams {
	permissionType:
		| "location"
		| "camera"
		| "notifications"
		| "microphone"
		| "gallery";
}

const PermissionScreen = () => {
	const route = useRoute();

	const {permissionType} = route.params as RouteParams;

	const properties = useMemo(() => {
		switch (permissionType) {
			case "location":
				return {
					permissionAnimation: LocationAnimation,
					permissionTitle: "Enable Location Permission",
					permissionDescription:
						"Please grant location permission to continue using the app features. We promise to keep your location private and secure.",
					buttonLabel: "Enable Location Permission",
				};
			case "notifications":
				return {
					permissionAnimation: NotificationAnimation,
					permissionTitle: "Enable Notifications",
					permissionDescription:
						"Please grant notification permission to continue using the app features. We promise to keep your notifications private and secure.",
					buttonLabel: "Enable Notifications",
				};
			case "microphone":
				return {
					permissionAnimation: MicrophoneAnimation,
					permissionTitle: "Enable Microphone Permission",
					permissionDescription:
						"Please grant notification permission to continue using the app features. We promise to keep your notifications private and secure.",
					buttonLabel: "Enable Microphone",
				};
			case "camera":
				return {
					permissionAnimation: CameraAnimation,
					permissionTitle: "Enable Camera Permission",
					permissionDescription:
						"Please grant notification permission to continue using the app features. We promise to keep your notifications private and secure.",
					buttonLabel: "Enable Camera",
				};
			case "gallery":
				return {
					permissionAnimation: GalleryAnimation,
					permissionTitle: "Enable Gallery Permission",
					permissionDescription:
						"Please grant notification permission to continue using the app features. We promise to keep your notifications private and secure.",
					buttonLabel: "Enable Gallery",
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
	}, [permissionType]);

	return (
		<ScrollView
			showsVerticalScrollIndicator={false}
			contentContainerStyle={{flexGrow: 1, paddingBottom: "15%"}}
			className="w-full bg-white h-full">
			<View className="h-full w-full items-center bg-white px-4">
				<LottieView
					source={properties.permissionAnimation}
					style={{width: "70%"}}
					autoPlay
					loop
				/>
				<Text className="text-4xl text-blue-600 text-center font-extrabold uppercase">
					{properties.permissionTitle}
				</Text>
				<View className="h-1" />
				<Text className="text-lg text-gray-600 text-center font-light">
					{properties.permissionDescription}
				</Text>
				<View className="h-10" />
				<Button
					onPress={() => {}}
					buttonHeight="h-16"
					label={properties.buttonLabel}
				/>
			</View>
		</ScrollView>
	);
};

export default PermissionScreen;
