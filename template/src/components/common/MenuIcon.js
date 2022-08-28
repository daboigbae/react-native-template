import React from "react";
import PropTypes from "prop-types";

import Icon from "react-native-vector-icons/FontAwesome";

import { Pressable } from "react-native";

const MenuIcon = ({ color, size, navigation }) => (
	<Pressable onPress={() => navigation.toggleDrawer()} className="mr-4">
		<Icon name="menu" size={20} color={COLOR_PALETTE.white} />
	</Pressable>
);

MenuIcon.propTypes = {
	navigation: PropTypes.object.isRequired,
	color: PropTypes.string,
	size: PropTypes.number
};

export default MenuIcon;
