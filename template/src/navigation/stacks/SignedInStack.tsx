import React from "react";

import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {NAVIGATOR_DRAWER_STACK, NAVIGATOR_HOME_STACK} from "@utils/screens";

import DrawerStack from "./DrawerStack";

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
			<Stack.Screen name={NAVIGATOR_DRAWER_STACK} component={DrawerStack} />
		</Stack.Navigator>
	);
};

export default SignedInStack;
