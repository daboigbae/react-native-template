import React from "react";

import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {NAVIGATOR_HOME_STACK} from "@utils/screens";

import HomeStack from "./HomeStack";

const Stack = createNativeStackNavigator();

const NAVIGATION_OPTIONS = {
	headerShown: false,
};

export type SignedInStackParams = {
	[NAVIGATOR_HOME_STACK]: undefined;
};

const SignedInStack = () => {
	return (
		<Stack.Navigator screenOptions={NAVIGATION_OPTIONS}>
			<Stack.Screen name={NAVIGATOR_HOME_STACK} component={HomeStack} />
		</Stack.Navigator>
	);
};

export default SignedInStack;
