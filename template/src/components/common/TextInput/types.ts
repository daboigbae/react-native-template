import {TextInputProps as InputProps} from "react-native";

export interface TextInputProps extends InputProps {
	backgroundColor?: string;
	inputStyle?: string;
	borderLess?: boolean;
	type?: "text" | "password" | "search";
	label?: string;
	labelStyle?: string;
	borderColor?: string;
	value?: string;
	onChangeText: (text: string) => void;
	labelPosition?: "start" | "end" | "center";
}
