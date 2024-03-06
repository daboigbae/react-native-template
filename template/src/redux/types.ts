export interface UserSliceState {
	UserSlice: {
		user: unknown | null | undefined;
		authToken: string | null | undefined;
	};
}
