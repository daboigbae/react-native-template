import React, { useEffect } from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";
import PropTypes from "prop-types";

import { NAVIGATORS } from "../utils/screens";

const LandingAnimation = require("../assets/lottie/landingAnimation.json");

const LandingScreen = ({ navigation }) => {
	useEffect(() => {
		setTimeout(() => {
			navigation.replace(NAVIGATORS.BOTTOM_TAB);
		}, 700); // Mocking data loading at landing screen
	}, []);

	return (
		<View className="h-full w-full justify-center items-center">
			<LottieView source={LandingAnimation} className="w-[70%]" autoPlay loop />
		</View>
	);
};

LandingScreen.propTypes = {
	navigation: PropTypes.object.isRequired
};

export default LandingScreen;
