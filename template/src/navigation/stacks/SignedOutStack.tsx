import React from "react";

import {createStackNavigator} from "@react-navigation/stack";

import HeaderBackButton from "@components/common/Header/HeaderBackButton";
import SignInScreen from "@screens/auth/SignInScreen";
import SignUpScreen from "@screens/auth/SignUpScreen";
import {SIGNED_OUT_SCREENS} from "@utils/screens";

const Stack = createStackNavigator();

export type SignedOutStackParams = {
	[SIGNED_OUT_SCREENS.SIGN_IN_SCREEN]: undefined;
	[SIGNED_OUT_SCREENS.SIGN_UP_SCREEN]: undefined;
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
		</Stack.Navigator>
	);
};

export default SignedOutStack;
