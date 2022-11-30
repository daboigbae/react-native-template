import React from "react";
import { Text, View } from "react-native";
import moment from "moment";
import { Button } from "@digital-art-dealers/react-native-component-lib";

import useLocalize from "../hooks/useLocalize";
import { TRANSLATIONS } from "../utils/translations/translations";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
	const navigation = useNavigation();
	const { translate } = useLocalize();

	// TODO: This can be removed or changed according to project needs
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
			<Text className="text-2xl font-bold text-center mt-8">Todays Date</Text>
			<Text className="text-center text-lg">
				{moment(new Date()).format("YYYY-MM-DD")}
			</Text>
		</View>
	);
};

export default HomeScreen;
