import React, {useState} from "react";
import {Text, TextInput as RNInput, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import {TextInputProps} from "./types";

const TextInput: React.FC<TextInputProps> = ({
	backgroundColor,
	label,
	value,
	onChangeText,
	labelStyle = "text-base mb-1",
	labelPosition = "start",
	inputStyle = "w-full h-12 bg-white rounded-lg px-4 justify-center items-center flex-row border border-gray-300",
	type = "text",
	...props
}) => {
	const [isSecure, setIsSecure] = useState(true);

	const position =
		labelPosition === "start"
			? "self-start"
			: labelPosition === "end"
				? "self-end"
				: "self-center";

	const isPassword = type === "password";
	const isSearch = type === "search";

	const handleClearSearch = () => {
		onChangeText("");
	};

	return (
		<View className="w-full">
			{label && (
				<Text className={`${labelStyle} ${position} `}>{label}</Text>
			)}
			<View className={`${inputStyle} `}>
				{isSearch && (
					<View className="mr-2">
						<Icon name="search" size={24} color="gray" />
					</View>
				)}
				<RNInput
					onChangeText={onChangeText}
					value={value}
					secureTextEntry={isPassword && isSecure}
					className="flex-[1] h-full"
					placeholderTextColor="gray"
					{...props}
				/>
				{isSearch && value && (
					<TouchableOpacity
						className="h-6 w-6 rounded-full justify-center items-center bg-gray-400"
						onPress={handleClearSearch}>
						<Icon name="close" size={16} color="white" />
					</TouchableOpacity>
				)}
				{isPassword && (
					<TouchableOpacity
						className="h-6 w-6 rounded-full justify-center items-center bg-gray-400"
						onPress={() => setIsSecure(!isSecure)}>
						<Icon
							name={isSecure ? "visibility" : "visibility-off"}
							size={16}
							color="white"
						/>
					</TouchableOpacity>
				)}
			</View>
		</View>
	);
};

export default TextInput;
