import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

import { NAVIGATORS } from "../utils/screens";
import BottomTabNavigation from "./BottomTabNavigation";

import SideMenu from "./SideMenu";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const NAVIGATION_OPTIONS = {
	headerShown: false
};

const AuthenticatedUserNavigation = () => {
	return (
		<Drawer.Navigator
			drawerContent={(props) => <SideMenu {...props} />}
			screenOptions={() => ({
				drawerPosition: "right"
			})}>
			<Stack.Screen
				name={NAVIGATORS.HOME}
				component={BottomTabNavigation}
				options={NAVIGATION_OPTIONS}
			/>
		</Drawer.Navigator>
	);
};

export default AuthenticatedUserNavigation;
