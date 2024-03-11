import React from "react";

import {createNativeStackNavigator} from "@react-navigation/native-stack";

import HeaderBackButton from "@components/common/Header/HeaderBackButton";
import ForgotPasswordScreen from "@screens/auth/ForgotPasswordScreen";
import SignInScreen from "@screens/auth/SignInScreen";
import SignUpScreen from "@screens/auth/SignUpScreen";
import {SIGNED_OUT_SCREENS} from "@utils/screens";

const Stack = createNativeStackNavigator();

export type SignedOutStackParams = {
	[SIGNED_OUT_SCREENS.SIGN_IN_SCREEN]: undefined;
	[SIGNED_OUT_SCREENS.SIGN_UP_SCREEN]: undefined;
	[SIGNED_OUT_SCREENS.FORGOT_PASSWORD_SCREEN]: undefined;
};

const SignedOutStack = () => {
	const headerLeft = () => <HeaderBackButton />;
	return (
		<Stack.Navigator>
			<Stack.Screen
				name={SIGNED_OUT_SCREENS.SIGN_IN_SCREEN}
				component={SignInScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name={SIGNED_OUT_SCREENS.SIGN_UP_SCREEN}
				component={SignUpScreen}
				options={{
					headerTitle: "",
					headerLeft,
				}}
			/>
			<Stack.Screen
				name={SIGNED_OUT_SCREENS.FORGOT_PASSWORD_SCREEN}
				component={ForgotPasswordScreen}
				options={{
					headerTitle: "",
					headerLeft,
				}}
			/>
		</Stack.Navigator>
	);
};

export default SignedOutStack;
