import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthResponse } from "../api";

export interface UserState {
	token: string;
	user: {
		id: number;
		firstName: string;
		lastName: string;
		displayName: string;
		image: string;
		role: string;
	};
	loggedIn: boolean;
}

const initialState: UserState = {
	token: "",
	loggedIn: false,
	user: null as unknown as UserState["user"],
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<AuthResponse>) => {
			localStorage.setItem("token", action.payload?.token || "");

			if (!action.payload) return;
			state.user = action.payload?.user;
			state.token = action.payload?.token;
			state.loggedIn = true;
		},
		logout: (state) => {
			localStorage.removeItem("token");
			state.user = null as unknown as UserState["user"];
			state.token = "";
			state.loggedIn = false;
		},
	},
});
export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
