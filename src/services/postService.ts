import { Configuration, PostsApi } from "../api";
import { store } from "../store";
import toastifyAsyncError from "../utils/toastifyAsyncError";

const postsApi = new PostsApi(
	new Configuration({
		basePath: import.meta.env.VITE_API,
	})
);

export class PostService {
	static async createPost(content?: string, image?: File) {
		return await toastifyAsyncError(
			postsApi.create(content, image, {
				headers: {
					Authorization: "Bearer " + store.getState().user?.token,
				},
			})
		);
	}

	static async getFeed() {
		const res = await toastifyAsyncError(
			postsApi.getFeed({
				headers: {
					Authorization: "Bearer " + store.getState().user?.token,
				},
			})
		);

		return res.data;
	}
}
