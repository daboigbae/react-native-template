import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import HomeScreen from "@screens/main/HomeScreen";
import ProfileScreen from "@screens/main/ProfileScreen";
import {HOME_SCREENS} from "@utils/screens";

const Tab = createBottomTabNavigator();

const TAB_SCREEN_OPTIONS = {
	drawerPosition: "right",
	headerLeft: () => false,
	headerTitle: " ",
	headerShadowVisible: false,
};

interface HomeIconProps {
	color: string;
	size: number;
}

const HomeIcon: React.FC<HomeIconProps> = ({color, size}) => (
	<Icon name="home" color={color} size={size} />
);

const ProfileIcon: React.FC<HomeIconProps> = ({color, size}) => (
	<Icon name="person" color={color} size={size} />
);

export type HomeStackParams = {
	[HOME_SCREENS.MAIN_SCREEN]: undefined;
	[HOME_SCREENS.PROFILE_SCREEN]: undefined;
};

const HomeStack = () => {
	return (
		<Tab.Navigator screenOptions={TAB_SCREEN_OPTIONS}>
			<Tab.Screen
				name={HOME_SCREENS.MAIN_SCREEN}
				component={HomeScreen}
				options={{
					tabBarLabel: "Home",
					tabBarIcon: HomeIcon,
				}}
			/>
			<Tab.Screen
				name={HOME_SCREENS.PROFILE_SCREEN}
				component={ProfileScreen}
				options={{
					headerShown: false,
					tabBarLabel: "Profile",
					tabBarIcon: ProfileIcon,
				}}
			/>
		</Tab.Navigator>
	);
};

export default HomeStack;
