import React from "react";
import {TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import {createDrawerNavigator} from "@react-navigation/drawer";
import {DrawerActions, useNavigation} from "@react-navigation/native";

import ProfileScreen from "@screens/main/ProfileScreen";
import {HOME_SCREENS, NAVIGATOR_HOME_STACK} from "@utils/screens";

import HomeStack from "./HomeStack";

const Drawer = createDrawerNavigator();

const drawerIcon = () => {
	const navigation = useNavigation();
	const openDrawer = () => navigation.dispatch(DrawerActions.openDrawer());
	
	return (
		<TouchableOpacity
			className="mr-3"
			onPress={openDrawer}>
			<Icon name="menu" size={35} color="black" />
		</TouchableOpacity>
	);
};

const DrawerStack = () => {
	const NAVIGATION_OPTIONS = {
		headerTitle: "",
		headerShadowVisible: false,
		headerLeft: () => false,
		drawerPosition: "right",
		headerRight: () => drawerIcon(),
	};
	return (
		<Drawer.Navigator>
			<Drawer.Screen
				name={NAVIGATOR_HOME_STACK}
				component={HomeStack}
				options={NAVIGATION_OPTIONS}
			/>
			<Drawer.Screen
				name={HOME_SCREENS.PROFILE_SCREEN}
				component={ProfileScreen}
				options={NAVIGATION_OPTIONS}
			/>
		</Drawer.Navigator>
	);
};

export default DrawerStack;
