import React from "react";
import { View } from "react-native";
import { Button } from "@digital-art-dealers/react-native-component-lib";

import useLocalize from "../hooks/useLocalize";
import { TRANSLATIONS } from "../utils/translations/translations";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
	const navigation = useNavigation();
	const { translate } = useLocalize();

	useLayoutEffect(() => {
		navigation.setOptions({
			headerTitle: translate(TRANSLATIONS.MAIN)
		});
	}, [navigation]);
	return (
		<View className="h-full w-full justify-center px-4">
			<Button
				buttonColor="bg-blue-600"
				textColor="text-white"
				onPress={() => {}}
				label={translate(TRANSLATIONS.CHANGE_BUTTON)}
			/>
		</View>
	);
};

export default HomeScreen;
