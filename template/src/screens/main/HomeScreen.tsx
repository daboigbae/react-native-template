import React, {useState} from "react";
import {ScrollView, Text, View} from "react-native";

import moment from "moment";

import Avatar from "@components/common/Avatar";
import AwareView from "@components/common/AwareView";
import Button from "@components/common/Button";
import TextInput from "@components/common/TextInput";
import useExample from "@hooks/useExample";

// For example purposes. Replace with your own data structure or remove if not needed
interface DataProps {
	attributes: {
		body: string;
	};
}

const HomeScreen = () => {
	const {get, isLoading} = useExample();

	const [data, setData] = useState<DataProps | null>(null);
	const [name, setName] = useState("");

	const getExampleData = async () => {
		const results = await get();
		setData(results[0]);
	};

	return (
		<AwareView backgroundColor="bg-white">
			<ScrollView
				contentContainerStyle={{flexGrow: 1, paddingBottom: "15%"}}
				className="w-full bg-white h-full">
				<View className=" h-full w-full justify-center px-4">
					<View className="self-center">
						<Avatar
							image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAF3jvkhiHrC4W-Vu9J_0A1kvni4C5qZrj1w&usqp=CAU"
							username="Manbeartrain"
							size={100}
						/>
					</View>
					<Text className="text-2xl font-bold text-center mt-8">
						Todays Date
					</Text>
					<Text className="text-center text-lg">
						{moment(new Date()).format("YYYY-MM-DD")}
					</Text>

					<Button
						buttonStyle="w-full bg-blue-600 h-12 rounded-lg justify-center items-center"
						onPress={getExampleData}
						label="Get Example Data"
						isLoading={isLoading}
						isDisabled={isLoading}
					/>
					{data && (
						<Text className="text-center mt-4">
							{`Example Data: ${data.attributes.body}`}
						</Text>
					)}
					<View className="h-8" />
					<TextInput
						type="password"
						placeholder="Enter your name..."
						label="Name"
						onChangeText={setName}
						value={name}
					/>
				</View>
			</ScrollView>
		</AwareView>
	);
};

export default HomeScreen;
