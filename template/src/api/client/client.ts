/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * HTTP API client.
 */
import type {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import axios, {AxiosError} from "axios";
import {cloneDeep, defaults, mapKeys} from "lodash";

import {example} from "./example";

/**
 * API client for interacting with the API.
 */

export class ApiClient {
	public client: AxiosInstance;

	// constructor for the API client
	constructor(
		authToken: string | undefined | null = " ",
		config: AxiosRequestConfig = {}
	) {
		this.client = this._setupClient(config);

		if (authToken) {
			this.setBearerToken(authToken);
		}
	}

	// Example API methods. Replace with your own API methods.

	public example = {
		get: () => this._parseResponse(example.get(this)),
	};

	// sets up the client with the given configuration
	private _setupClient(appConfig: AxiosRequestConfig) {
		const config: AxiosRequestConfig = cloneDeep(appConfig);

		config.headers = mapKeys(config.headers, (_, key) => key.toLowerCase());

		defaults(config.headers, {
			"content-type": "application/json",
		});
		return axios.create(config);
	}

	// sets the bearer token for the client
	public setBearerToken(token: string) {
		this.client.defaults.headers.common.Authorization = `Bearer ${token}`;
	}

	// parses the response from the API
	private _parseResponse(
		response: Promise<AxiosResponse<any>>
	): Promise<any> {
		return response
			.then(resp => {
				return {
					//status: API_STATUS.SUCCESS,
					//message: resp.data.user_message,
					data: resp.data ?? resp.data,
					refreshToken:
						resp.data.access_token ?? resp.data.access_token,
				};
			})
			.catch((error: AxiosError) => {
				throw error;
			});
	}
}
