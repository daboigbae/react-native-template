import React, {useState} from "react";
import {Alert, ScrollView, Text, View} from "react-native";

import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import LottieView from "lottie-react-native";

import LandingAnimation from "@assets/lottie/landingAnimation.json";
import AwareView from "@components/common/AwareView";
import Button from "@components/common/Button";
import TextInput from "@components/common/TextInput";
import {SignedOutStackParams} from "@navigation/stacks/SignedOutStack";
const ForgotPasswordScreen = () => {
	const navigation =
		useNavigation<NativeStackNavigationProp<SignedOutStackParams>>();

	const [email, setEmail] = useState("");

	const handleForgotPassword = () => {
		Alert.alert(
			"Password Reset",
			"Password reset link has been sent to your email"
		);
		navigation.goBack();
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
						style={{width: "80%", height: 156}}
						autoPlay
						loop
						resizeMode="contain"
					/>
					<Text className="text-blue-700 text-xl">
						Forgot Your Password ?
					</Text>
					<Text className="font-light text-lg text-center">
						Enter your email address to reset your password
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

					<Button isDisabled={!email} onPress={handleForgotPassword} label="Reset Password" />
				</View>
			</ScrollView>
		</AwareView>
	);
};

export default ForgotPasswordScreen;
