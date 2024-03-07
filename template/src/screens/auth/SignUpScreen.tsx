import React, {useState} from "react";
import {ScrollView, Text, View} from "react-native";

import LottieView from "lottie-react-native";

import LandingAnimation from "@assets/lottie/landingAnimation.json";
import AwareView from "@components/common/AwareView";
import Button from "@components/common/Button";
import TextInput from "@components/common/TextInput";

const SignUpScreen = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSignUp = () => {
		// TODO: Handle Sign UP
	};

	return (
		<AwareView>
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{flexGrow: 1, paddingBottom: "15%"}}
				className="w-full bg-transparent h-full">
				<View className="bg-transparent h-full w-full justify-start items-center px-4 pt-24">
					<LottieView
						source={LandingAnimation}
						style={{width: "80%"}}
						autoPlay
						loop
					/>
					<Text className="text-blue-700 text-xl">
						Excited To Have You Onboard!
					</Text>
					<Text className="font-light text-lg text-center">
						Sign up with your email and password
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
					<Button onPress={handleSignUp} label="Sign Up" />
				</View>
			</ScrollView>
		</AwareView>
	);
};

export default SignUpScreen;
