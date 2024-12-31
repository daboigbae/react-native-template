import {createSlice} from "@reduxjs/toolkit";

export const UserSlice = createSlice({
	name: "UserSlice",
	initialState: {
		user: null,
		authToken: null,
	},
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
		},
		setAuthToken: (state, action) => {
			state.authToken = action.payload;
		},
	},
});

export const {setUser, setAuthToken} = UserSlice.actions;
export default UserSlice.reducer;
