import React from "react";
import {Dimensions, KeyboardAvoidingView, Platform} from "react-native";

import {AwareViewProps} from "./types";

const screenHeight = Dimensions.get("window").height;

const AwareView: React.FC<AwareViewProps> = ({
	children,
	backgroundColor = "bg-white",
}) => (
	<KeyboardAvoidingView
		className={`${backgroundColor}`}
		keyboardVerticalOffset={screenHeight * 0.13} // Adjust this multiplier as needed
		behavior={Platform.OS === "android" ? "height" : "padding"}>
		{children}
	</KeyboardAvoidingView>
);

export default AwareView;
