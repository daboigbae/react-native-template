import React from "react";

import {createStackNavigator} from "@react-navigation/stack";

import SignedInScreen from "@screens/auth/SignedInScreen";
import {SIGNED_OUT_SCREENS} from "@utils/screens";

const Stack = createStackNavigator();

const SignedOutStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name={SIGNED_OUT_SCREENS.SIGN_IN_SCREEN}
				component={SignedInScreen}
				options={{
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
};

export default SignedOutStack;
