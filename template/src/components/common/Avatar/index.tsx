import React from "react";
import {Image, Text, View} from "react-native";

import Loader from "../Loader";
import {AvatarProps} from "./types";

const Avatar: React.FC<AvatarProps> = ({
	type = "circle",
	username,
	isLoading,
	image,
	size = 96,
}) => {
	const avatarContainerBaseStyle =
		type === "square"
			? "rounded-none"
			: type === "circle"
				? "rounded-full"
				: "rounded-lg";

	const getUsernameInitials = (username: string) => {
		const nameArray = username.split(" ");
		const firstWord = nameArray[0];
		const firstInitial = firstWord.charAt(0);
		const secondInitial =
			nameArray.length > 1
				? nameArray[1].charAt(0)
				: firstWord.length > 1
					? firstWord.charAt(1)
					: "";
		return `${firstInitial}${secondInitial}`;
	};

	return (
		<View
			style={{
				height: size,
				width: size,
			}}
			className={`${avatarContainerBaseStyle} bg-gray-300 justify-center items-center `}>
			{isLoading ? (
				<Loader />
			) : image ? (
				<Image
					resizeMethod="resize"
					source={{uri: image}}
					className={`${avatarContainerBaseStyle} w-full h-full`}
				/>
			) : (
				username && (
					<Text
						style={{
							fontSize: size / 3,
						}}
						className="font-bold mt-1">
						{getUsernameInitials(username)}
					</Text>
				)
			)}
		</View>
	);
};

export default Avatar;
