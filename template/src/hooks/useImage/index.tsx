import {launchCamera, launchImageLibrary} from "react-native-image-picker";

import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";

import usePermissions from "@hooks/usePermissions";
import {NavigationParams} from "@navigation/Navigation";
import {MODAL_SCREENS, NAVIGATOR_MODAL_STACK} from "@utils/screens";

const useImage = () => {
	const navigation = useNavigation<StackNavigationProp<NavigationParams>>();
	const {getGalleryPermission} = usePermissions();

	const handleGallery = async () => {
		try {
			const permission = await getGalleryPermission();

			console.log("Gallery Permission", permission);
			if (permission === "granted") {
				await launchImageLibrary(
					{mediaType: "photo", includeBase64: true},
					res => {
						console.log(res);
					}
				);
			} else if (permission === "blocked") {
				navigation.navigate(NAVIGATOR_MODAL_STACK, {
					screen: MODAL_SCREENS.PERMISSION_DENIED_SCREEN,
					params: {
						permissionType: "gallery",
					},
				});
			} else if (permission === "limited") {
				navigation.navigate(NAVIGATOR_MODAL_STACK, {
					screen: MODAL_SCREENS.PERMISSION_DENIED_SCREEN,
					params: {
						permissionType: "gallery",
					},
				});
			} else {
				navigation.navigate(NAVIGATOR_MODAL_STACK, {
					screen: MODAL_SCREENS.PERMISSION_SCREEN,
					params: {
						permissionType: "gallery",
					},
				});
			}
		} catch (e) {
			console.log(e);
		}
	};

	const handleCamera = async () => {
		const permission = await getGalleryPermission();

		console.log("Camera Permission", permission);
		try {
			if (permission === "granted") {
				await launchCamera({mediaType: "photo"}, res => {
					console.log(res);
				});
			} else if (permission === "blocked") {
				navigation.navigate(NAVIGATOR_MODAL_STACK, {
					screen: MODAL_SCREENS.PERMISSION_DENIED_SCREEN,
					params: {
						permissionType: "camera",
					},
				});
			} else if (permission === "limited") {
				navigation.navigate(NAVIGATOR_MODAL_STACK, {
					screen: MODAL_SCREENS.PERMISSION_DENIED_SCREEN,
					params: {
						permissionType: "camera",
					},
				});
			} else {
				navigation.navigate(NAVIGATOR_MODAL_STACK, {
					screen: MODAL_SCREENS.PERMISSION_SCREEN,
					params: {
						permissionType: "camera",
					},
				});
			}
		} catch (e) {
			console.log(e);
		}
	};

	return {handleGallery, handleCamera};
};

export default useImage;
