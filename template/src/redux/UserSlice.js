import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
	name: "UserSlice",
	initialState: {
		//TODO: add initial state
	},
	reducers: {
		//TODO: add reducers
		setUser: (state, action) => {
			state = action.payload;
		}
	}
});

export const { setUser } = UserSlice.actions;
export default UserSlice.reducer;
