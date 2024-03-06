/**
 * Auth SOP API Client.
 */

import type {ApiClient} from "../client";

export const get = (client: ApiClient) => {
	return client.client.get("/facts?limit=1");
};
