import React from "react";
import {ActivityIndicator, Text, TouchableOpacity} from "react-native";

import {ButtonProps} from "./types";

const Button: React.FC<ButtonProps> = ({
	buttonStyle = "w-full h-12 justify-center items-center bg-blue-600",
	textStyle = "text-white font-bold text-lg",
	isLoading,
	isDisabled,
	label,
	onPress,
	loaderColor = "white",
	loaderSize = "small",
}) => {
	return (
		<TouchableOpacity
			disabled={isDisabled || isLoading}
			onPress={onPress}
			className={`${buttonStyle} ${isDisabled && "bg-gray-400"}`}>
			{isLoading ? (
				<ActivityIndicator color={loaderColor} size={loaderSize} />
			) : (
				<Text className={`${textStyle}`}>{label}</Text>
			)}
		</TouchableOpacity>
	);
};

export default Button;
