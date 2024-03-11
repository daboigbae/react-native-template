import React from "react";

import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import LandingScreen from "@screens/LandingScreen";
import {
	NAVIGATOR_LANDING,
	NAVIGATOR_MODAL_STACK,
	NAVIGATOR_SIGNED_IN_STACK,
	NAVIGATOR_SIGNED_OUT_STACK,
} from "@utils/screens";

import ModalStack from "./stacks/ModalStack";
import SignedInStack from "./stacks/SignedInStack";
import SignedOutStack from "./stacks/SignedOutStack";

const Stack = createNativeStackNavigator();

const NAVIGATION_OPTIONS = {
	headerShown: false,
};

const MODAL_OPTIONS = {
	presentation: "fullScreenModal" as const,
	headerShown: false,
};

export type NavigationParams = {
	[NAVIGATOR_LANDING]: undefined;
	[NAVIGATOR_SIGNED_IN_STACK]: undefined;
	[NAVIGATOR_SIGNED_OUT_STACK]: undefined;
	[NAVIGATOR_MODAL_STACK]: {
		screen: string;
		params: unknown;
	};
};

const Navigation = () => (
	<NavigationContainer>
		<Stack.Navigator>
			<Stack.Screen
				name={NAVIGATOR_LANDING}
				component={LandingScreen}
				options={NAVIGATION_OPTIONS}
			/>
			<Stack.Screen
				name={NAVIGATOR_SIGNED_IN_STACK}
				component={SignedInStack}
				options={NAVIGATION_OPTIONS}
			/>
			<Stack.Screen
				name={NAVIGATOR_SIGNED_OUT_STACK}
				component={SignedOutStack}
				options={NAVIGATION_OPTIONS}
			/>
			<Stack.Screen
				name={NAVIGATOR_MODAL_STACK}
				component={ModalStack}
				options={MODAL_OPTIONS}
			/>
		</Stack.Navigator>
	</NavigationContainer>
);

export default Navigation;
