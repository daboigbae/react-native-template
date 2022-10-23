import React from "react";
import { View } from "react-native";

import { Button } from "@digital-art-dealers/react-native-component-lib";
const HomeScreen = () => {
	return (
		<View className="h-full w-full justify-center px-4">
			<Button
				buttonColor="bg-blue-600"
				textColor="text-white"
				onPress={() => {}}
				label="Change this button"
			/>
		</View>
	);
};

export default HomeScreen;
