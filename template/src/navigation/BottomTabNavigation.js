import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PropTypes from "prop-types";

import { BOTTOM_TAB_SCREENS } from "../utils/screens";
import HomeScreen from "../screens/HomeScreen";

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => (
	<Tab.Navigator
		screenOptions={() => ({
			drawerPosition: "right",
			headerLeft: false
		})}>
		<Tab.Screen name={BOTTOM_TAB_SCREENS.HOME_SCREEN} component={HomeScreen} />
	</Tab.Navigator>
);

BottomTabNavigation.propTypes = {
	navigation: PropTypes.object
};

export default BottomTabNavigation;
