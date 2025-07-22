import React from "react";
import {ScrollView, Text, View} from "react-native";

import {useNavigation, useRoute} from "@react-navigation/native";
import LottieView from "lottie-react-native";

import Button from "@components/common/Button";
import usePermissions from "@hooks/usePermissions";

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

	const {getPermissionScreenProperties} = usePermissions();

	const navigation = useNavigation();

	const properties = getPermissionScreenProperties(permissionType);

	const handleButtonPress = async () => {
		if (properties.buttonAction) {
			await properties.buttonAction();
			navigation.goBack();
		} else {
			navigation.goBack();
		}
	};

	return (
		<ScrollView
			showsVerticalScrollIndicator={false}
			contentContainerStyle={{flexGrow: 1, paddingBottom: "15%"}}
			className="w-full bg-white h-full">
			<View className="h-full w-full items-center bg-white px-4">
				<LottieView
					source={properties.permissionAnimation}
					style={{width: "70%", height: 256}}
					autoPlay
					loop
					resizeMode="contain"
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
					onPress={handleButtonPress}
					buttonHeight="h-16"
					label={properties.buttonLabel}
				/>
			</View>
		</ScrollView>
	);
};

export default PermissionScreen;
