import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

export default async function toastifyAsyncError<T>(promise: Promise<T>) {
	try {
		const r = await promise;
		return r;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			const err = error as AxiosError<any, any>;

			const message = Array.isArray(err.response?.data.message)
				? err.response?.data.message[0]
				: err.response?.data.message;

			toast(message || error.message, {
				autoClose: 3000,
				type: "error",
				position: "bottom-left",
			});
		}
		throw error;
	}
}
