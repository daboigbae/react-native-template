import React, {useState} from "react";
import {ScrollView, Text, View} from "react-native";

import LottieView from "lottie-react-native";

import LandingAnimation from "@assets/lottie/landingAnimation.json";
import AwareView from "@components/common/AwareView";
import Button from "@components/common/Button";
import TextInput from "@components/common/TextInput";

const SignedInScreen = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<AwareView>
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{flexGrow: 1, paddingBottom: "15%"}}
				className="w-full bg-transparent h-full">
				<View className="bg-transparent h-full w-full justify-center items-center px-4 pt-24">
					<LottieView
						source={LandingAnimation}
						style={{width: "80%"}}
						autoPlay
						loop
					/>
					<View className="h-3" />
					<Text className="text-blue-700 text-xl">Welcome Back!</Text>
					<Text className="font-light text-lg text-center">
						To continue, sign in with your email and password.
					</Text>
					<View className="h-4" />
					<TextInput
						onChangeText={setEmail}
						value={email}
						backgroundColor="bg-gray-100"
						borderLess
						placeholder="Email Address"
					/>
					<View className="h-4" />
					<TextInput
						onChangeText={setPassword}
						value={password}
						backgroundColor="bg-gray-100"
						borderLess
						borderColor="border-gray-400"
						type="password"
						placeholder="Password"
					/>
					<View className="h-6" />
					<Button onPress={() => {}} label="Sign In" />

					<View className="flex-row justify-between items-center my-8">
						<View className=" flex-[1] h-[.4px] bg-gray-400" />
						<Text className="text-gray-400 mx-6">or</Text>
						<View className=" flex-[1] h-[.4px] bg-gray-400" />
					</View>
					<View className="flex-row justify-center items-center">
						<Text className="text-gray-400">
							Don&apos;t have an account?
						</Text>
						<Button
							onPress={() => {}}
							buttonBackground="bg-transparent"
							buttonWidth="w-16"
							buttonHeight="h-auto"
							textStyle="text-sm text-blue-800"
							label="Sign Up"
						/>
					</View>
				</View>
			</ScrollView>
		</AwareView>
	);
};

export default SignedInScreen;
