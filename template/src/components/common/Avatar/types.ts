export interface AvatarProps {
	type?: "circle" | "square" | "rounded";
	username?: string;
	isLoading?: boolean;
	image?: string;
	size?: number;
}
