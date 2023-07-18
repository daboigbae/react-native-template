import {createSlice} from "@reduxjs/toolkit";

export const UserSlice = createSlice({
	name: "UserSlice",
	initialState: {
		user: {
			name: "Alex",
		},
	},
	reducers: {
		setUser: (state, action) => {
			state = action.payload;
		},
	},
});

export const {setUser} = UserSlice.actions;
export default UserSlice.reducer;
