import {useEffect, useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";

import {ApiClient} from "@api/client";
import {UserSliceState} from "@redux/types";

/**
 * Axios client configuration.
 * https://axios-http.com/docs/req_config
 */

const DEFAULT_CONFIGURATION = {
	baseURL: "https://dogapi.dog/api/v2", // Replace with your API base URL
};

const useApi = () => {
	const dispatch = useDispatch();

	const authToken = useSelector(
		({UserSlice}: UserSliceState) => UserSlice.authToken
	);

	const Client = useMemo(
		() => new ApiClient(authToken, DEFAULT_CONFIGURATION),
		[authToken]
	);

	interface ApiResponse {
		refreshToken?: string;
		// Include other properties that might be in your API response
	}

	const handleAPICall = async <T extends ApiResponse>(
		apiPromise: Promise<T>
	) => {
		try {
			const res = await apiPromise;

			if (res.refreshToken) {
				// Dispatch action to update the auth token as requests are being made
			}

			return res;
		} catch (e) {
			throw (e as Error).message;
		}
	};

	useEffect(() => {
		Client.client.interceptors.request.use(
			function (requestConfig) {
				return requestConfig;
			},
			function (error: Error) {
				// Do something with request error
				return Promise.reject(error);
			}
		);
	}, [authToken, Client, dispatch]);

	return {handleAPICall, Client};
};

export default useApi;
