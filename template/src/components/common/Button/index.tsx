import React from "react";
import {Text, TouchableOpacity} from "react-native";

import Loader from "../Loader";
import {ButtonProps} from "./types";

const Button: React.FC<ButtonProps> = ({
	buttonHeight = "h-12",
	buttonWidth = "w-full",
	buttonBackground = "bg-blue-600",
	textStyle = "text-white font-bold text-lg",
	borderLess = true,
	borderColor = "border-blue-600",
	borderWidth = "border",
	isLoading,
	isDisabled,
	label,
	onPress,
	loaderColor = "white",
	loaderSize = "small",
	borderRadius = "rounded-lg",
}) => {
	const baseButtonStyle = "justify-center items-center";
	const borderStyle = borderLess
		? "border-none"
		: `border ${borderColor} ${borderWidth}`;

	return (
		<TouchableOpacity
			disabled={isDisabled || isLoading}
			onPress={onPress}
			className={`${baseButtonStyle} ${buttonBackground}  ${borderStyle} ${
				isDisabled && "bg-gray-400"
			} ${buttonHeight} ${buttonBackground} ${borderRadius} ${buttonWidth}`}>
			{isLoading ? (
				<Loader
					cover
					loaderColor={loaderColor}
					loaderSize={loaderSize}
				/>
			) : (
				<Text className={`${textStyle}`}>{label}</Text>
			)}
		</TouchableOpacity>
	);
};

export default Button;
