import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserType {
	token: string;
	user: {
		id: number;
		firstName: string;
		lastName: string;
		displayName: string;
		image: string;
		role: string;
	};
}

export type UserState = UserType | null;

const initialState: UserState = null as UserState;

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (_, action: PayloadAction<UserState>) => {
			localStorage.setItem("token", action.payload?.token || "");
			return action.payload;
		},
	},
});
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
