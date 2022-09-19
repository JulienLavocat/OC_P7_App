import { Configuration, UsersApi } from "../api";
import { store } from "../store";
import toastifyAsyncError from "../utils/toastifyAsyncError";

const usersApi = new UsersApi(
	new Configuration({
		basePath: import.meta.env.VITE_API,
	})
);

export class UsersService {
	static async getProfile(token: string) {
		const r = await toastifyAsyncError(
			usersApi.getProfile({
				headers: {
					Authorization: "Bearer " + token,
				},
			})
		);
		return r.data;
	}
}
