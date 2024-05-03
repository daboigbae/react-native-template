import React from "react";

import {createStackNavigator} from "@react-navigation/stack";

import HeaderBackButton from "@components/common/Header/HeaderBackButton";
import PermissionDeniedScreen from "@screens/modal/PermissionDeniedScreen";
import PermissionScreen from "@screens/modal/PermissionScreen";
import {MODAL_SCREENS} from "@utils/screens";

const Stack = createStackNavigator();

export type ModalStackParams = {
	[MODAL_SCREENS.PERMISSION_SCREEN]: undefined;
};

const ModalStack = () => {
	const headerLeft = () => <HeaderBackButton />;

	return (
		<Stack.Navigator>
			<Stack.Screen
				name={MODAL_SCREENS.PERMISSION_SCREEN}
				component={PermissionScreen}
				options={{
					headerLeft,
					headerTitle: "",
					headerShadowVisible: false,
				}}
			/>
			<Stack.Screen
				name={MODAL_SCREENS.PERMISSION_DENIED_SCREEN}
				component={PermissionDeniedScreen}
				options={{
					headerLeft,
					headerTitle: "",
					headerShadowVisible: false,
				}}
			/>
		</Stack.Navigator>
	);
};

export default ModalStack;
