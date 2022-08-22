import { toast } from "react-toastify";
import {
	AuthenticationApi,
	Configuration,
	LoginDto,
	RegisterDto,
} from "../api";
import toastifyAsyncError from "../utils/toastifyAsyncError";

const api = new AuthenticationApi(
	new Configuration({
		basePath: import.meta.env.VITE_API,
	})
);

export class AuthService {
	public static async register(dto: RegisterDto) {
		const r = await toastifyAsyncError(api.register(dto));
		return r.data;
	}

	public static async login(dto: LoginDto) {
		const r = await toastifyAsyncError(api.login(dto));
		return r.data;
	}
}
