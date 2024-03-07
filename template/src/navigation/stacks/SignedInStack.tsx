import React from "react";

import {createStackNavigator} from "@react-navigation/stack";

import {NAVIGATOR_HOME_STACK} from "@utils/screens";

import HomeStack from "./HomeStack";

const Stack = createStackNavigator();

const NAVIGATION_OPTIONS = {
	headerShown: false,
};

const SignedInStack = () => {
	return (
		<Stack.Navigator screenOptions={NAVIGATION_OPTIONS}>
			<Stack.Screen name={NAVIGATOR_HOME_STACK} component={HomeStack} />
		</Stack.Navigator>
	);
};

export default SignedInStack;
