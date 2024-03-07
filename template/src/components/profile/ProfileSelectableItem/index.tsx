import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import {ProfileSelectableItemProps} from "./types";

const ProfileSelectableItem: React.FC<ProfileSelectableItemProps> = ({
	label,
	onPress,
	icon = "edit",
	iconBackgroundColor = "bg-gray-200",
}) => {
	return (
		<TouchableOpacity
			onPress={onPress}
			className="flex-row justify-between items-center w-full border border-gray-200 bg-white p-3 rounded-lg">
			<View className="flex-row justify-center items-center gap-x-4">
				<View
					className={`h-10 w-10 justify-center items-center rounded-full ${iconBackgroundColor}`}>
					<Icon name={icon} size={18} color="black" />
				</View>
				<Text className="text-sm tracking-wide">
					{label}
				</Text>
			</View>
			<Icon name="keyboard-arrow-right" size={24} color="black" />
		</TouchableOpacity>
	);
};

export default ProfileSelectableItem;
