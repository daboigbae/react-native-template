import React from "react";
import {KeyboardAvoidingView, Platform} from "react-native";

import {AwareViewProps} from "./types";

const AwareView: React.FC<AwareViewProps> = ({
	children,
	backgroundColor = "bg-white",
}) => {
	return (
		<KeyboardAvoidingView
			className={`${backgroundColor} w-full`}
			behavior={Platform.OS === "android" ? "height" : "padding"}>
			{children}
		</KeyboardAvoidingView>
	);
};

export default AwareView;
