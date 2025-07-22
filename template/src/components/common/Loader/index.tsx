import React from "react";
import {ActivityIndicator, View} from "react-native";

import {LoaderProps} from "./types";

const Loader: React.FC<LoaderProps> = ({
	loaderColor = "white",
	loaderSize = "small",
	cover = false,
}) => {
	return cover ? (
		<View className="h-full w-full justify-center items-center absolute">
			<ActivityIndicator color={loaderColor} size={loaderSize} />
		</View>
	) : (
		<ActivityIndicator color={loaderColor} size={loaderSize} />
	);
};

export default Loader;
