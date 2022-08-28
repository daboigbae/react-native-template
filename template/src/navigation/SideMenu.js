import React from "react";
import { Pressable, Text, View } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import PropTypes from "prop-types";
import { version } from "../../package.json";
import { CHILDREN_SCREENS, NAVIGATORS } from "../utils/screens";
import { useDispatch, useSelector } from "react-redux";

const SideMenu = (props) => {
	return (
		<DrawerContentScrollView {...props}>
			<View className="px-4 py-4 items-start w-full ">
				<Text className="text-2xl tracking-wider font-bold">Account</Text>
				<View className="w-full bg-slate-200 flex-row rounded-lg p-4 mt-8 items-center">
					<Text className="text-black text-xl font-bold text-center">
						{name}
					</Text>
				</View>
				<Text className="mt-4 text-gray-400 ml-2">Version {version}</Text>
			</View>
		</DrawerContentScrollView>
	);
};

SideMenu.propTypes = {
	navigation: PropTypes.object
};

export default SideMenu;
