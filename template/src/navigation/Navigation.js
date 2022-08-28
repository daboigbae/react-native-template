import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { NAVIGATORS } from "../utils/screens";

import LandingScreen from "../screens/LandingScreen";

const Stack = createStackNavigator();

const NAVIGATION_OPTIONS = {
	headerShown: false
};

const Navigation = () => (
	<>
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name={NAVIGATORS.LANDING}
					component={LandingScreen}
					options={NAVIGATION_OPTIONS}
				/>
				{/*<Stack.Screen
					name={NAVIGATORS.MAIN}
					component={AuthenticatedUserNavigation}
					options={NAVIGATION_OPTIONS}
				/>*/}
			</Stack.Navigator>
		</NavigationContainer>
	</>
);

export default Navigation;
