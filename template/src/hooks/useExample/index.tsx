import { useState } from "react";
import {Alert} from "react-native";

import useApi from "@hooks/useAPI";

const useExample = () => {
	const {handleAPICall, Client} = useApi();

	const [isLoading, setIsLoading] = useState(false);

	const get = async () => {
		setIsLoading(true);
		try {
			const res = await handleAPICall(Client.example.get());
			return res.data.data;
		} catch (e) {
			Alert.alert((e as Error).message);
		} finally {
			setIsLoading(false);
		}
	};

	return {get, isLoading};
};

export default useExample;
