import React from "react";
import {TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import {useNavigation} from "@react-navigation/native";

import {HeaderBackButtonProps} from "./types";

const HeaderBackButton: React.FC<HeaderBackButtonProps> = ({onPress}) => {
	const navigation = useNavigation();

	const handleNavigation = () => {
		onPress ? onPress : navigation.goBack();
	};

	return (
		<TouchableOpacity className="ml-2" onPress={handleNavigation}>
			<Icon name="arrow-back" size={26} color="black" />
		</TouchableOpacity>
	);
};

export default HeaderBackButton;
