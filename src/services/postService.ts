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
				headers: this.getAuthHeaders(),
			})
		);
	}

	static async getFeed() {
		const res = await toastifyAsyncError(
			postsApi.getFeed({
				headers: this.getAuthHeaders(),
			})
		);

		return res.data;
	}

	static async like(postId: number) {
		const res = await toastifyAsyncError(
			postsApi.like(postId, {
				headers: this.getAuthHeaders(),
			})
		);

		return res.data;
	}

	static async dislike(postId: number) {
		const res = await toastifyAsyncError(postsApi.dislike(postId));

		return res.data;
	}

	static async delete(postId: number) {
		const res = await toastifyAsyncError(
			postsApi._delete(postId, {
				headers: this.getAuthHeaders(),
			})
		);
	}

	private static getAuthHeaders() {
		return {
			Authorization: "Bearer " + store.getState().user?.token,
		};
	}
}
