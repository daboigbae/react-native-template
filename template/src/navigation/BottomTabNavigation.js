import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PropTypes from "prop-types";

import { MAIN_SCREENS_ARRAY } from "../utils/screens";
import MenuIcon from "../components/common/MenuIcon";
import SideMenu from "./SideMenu";

import { COLOR_PALETTE } from "../utils/constants";

const Tab = createBottomTabNavigator();

const BOTTOM_TAB_BAR_OPTIONS = {
	tabBarStyle: {
		backgroundColor: COLOR_PALETTE.gray_100,
		justifyContent: "center",
		alignItems: "center",
		paddingTop: "4%",
		height: "12%"
	}
};

const BottomTabNavigation = () => (
	<Tab.Navigator
		drawerContent={(props) => <SideMenu {...props} />}
		screenOptions={({ navigation }) => ({
			drawerPosition: "right",
			headerLeft: false,
			headerRight: ({ color }) => (
				<MenuIcon color={color} size={32} navigation={navigation} />
			)
		})}>
		{MAIN_SCREENS_ARRAY.map((item, index) => (
			<Tab.Screen
				key={index}
				name={item.name}
				options={({ route }) => ({
					...item.options,
					...BOTTOM_TAB_BAR_OPTIONS
				})}>
				{item.component}
			</Tab.Screen>
		))}
	</Tab.Navigator>
);

BottomTabNavigation.propTypes = {
	navigation: PropTypes.object
};

export default BottomTabNavigation;
