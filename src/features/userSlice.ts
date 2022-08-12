import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserType {
	id: string;
	name: string;
	image: string;
	role: string;
}

export type UserState = UserType | null;

const initialState: UserState = null as UserState;

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (_, action: PayloadAction<UserState>) => {
			return action.payload;
		},
	},
});
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
