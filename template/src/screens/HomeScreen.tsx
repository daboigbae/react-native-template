import React, {useState} from "react";
import {useLayoutEffect} from "react";
import {ActivityIndicator, Text, TouchableOpacity, View} from "react-native";

import {useNavigation} from "@react-navigation/native";
import moment from "moment";

import useExample from "@hooks/useExample";
import useLocalize from "@hooks/useLocalize";

// For example purposes. Replace with your own data structure or remove if not needed
interface DataProps {
	attributes: {
		body: string;
	};
}

const HomeScreen = () => {
	const navigation = useNavigation();
	const {translate} = useLocalize();

	const {get, isLoading} = useExample();

	const [data, setData] = useState<DataProps | null>(null);

	const getExampleData = async () => {
		const results = await get();
		setData(results[0]);
	};

	// TODO: This can be removed or changed according to project needs
	useLayoutEffect(() => {
		navigation.setOptions({
			headerTitle: translate("changeButton"),
		});
	}, [navigation, translate]);

	return (
		<View className="h-full w-full justify-center px-4">
			<Text className="text-2xl font-bold text-center mt-8">
				Todays Date
			</Text>
			<Text className="text-center text-lg">
				{moment(new Date()).format("YYYY-MM-DD")}
			</Text>
			<TouchableOpacity
				onPress={getExampleData}
				className="w-full h-12 justify-center items-center bg-blue-600 rounded-lg mt-4">
				{isLoading ? (
					<ActivityIndicator color="white" />
				) : (
					<Text className="text-white text-center">
						Get Example Data
					</Text>
				)}
			</TouchableOpacity>
			{data && (
				<Text className="text-center mt-4">
					{`Example Data: ${data.attributes.body}`}
				</Text>
			)}
		</View>
	);
};

export default HomeScreen;
