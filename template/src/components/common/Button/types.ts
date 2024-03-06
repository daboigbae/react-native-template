export interface ButtonProps {
	buttonStyle?: string;
	textStyle?: string;
	isLoading?: boolean;
	isDisabled?: boolean;
	label?: string;
	onPress: () => void;
	loaderColor?: string;
	loaderSize?: "small" | "large";
}
