import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import useLocalize from "@hooks/useLocalize";
import HomeScreen from "@screens/HomeScreen";
import {BOTTOM_TAB_SCREENS} from "@utils/screens";
import {TRANSLATION_KEYS} from "@utils/translations/translations";

const Tab = createBottomTabNavigator();

const TAB_SCREEN_OPTIONS = {
	drawerPosition: "right",
	headerLeft: () => false,
};

interface HomeIconProps {
	color: string;
	size: number;
  }

const HomeIcon: React.FC<HomeIconProps> = ({ color, size }) => (
	<Icon name="home" color={color} size={size} />
);

const BottomTabNavigation = () => {
	const {translate} = useLocalize();

	return (
		<Tab.Navigator screenOptions={TAB_SCREEN_OPTIONS}>
			<Tab.Screen
				name={BOTTOM_TAB_SCREENS.HOME_SCREEN}
				component={HomeScreen}
				options={{
					tabBarLabel: translate(TRANSLATION_KEYS.MAIN),
					tabBarIcon: HomeIcon,
				}}
			/>
		</Tab.Navigator>
	);
};


export default BottomTabNavigation;
