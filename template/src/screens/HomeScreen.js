import React from "react";
import { View } from "react-native";

import {Button} from "@digital-art-dealers/react-native-component-lib";
const HomeScreen = () => {
	return (
		<View className="h-full w-full justify-center items-center px-4">
			<Button.Primary
				backgroundColor="bg-blue-600"
				onPress={() => {}}
				label="Change this button"
			/>
		</View>
	);
};

export default HomeScreen;
