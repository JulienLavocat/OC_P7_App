import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setUser } from "../features/userSlice";
import { AuthService } from "../services/authService";
import { UsersService } from "../services/usersService";
import { useAppDispatch, useAppSelector } from "./useAppDispatch";

export default function useEnsureLogin() {
	const user = useAppSelector((state) => state.user);
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const verifyOrRedirect = async () => {
			const token = localStorage.getItem("token");
			if (!token) {
				navigate("/auth/login");
				return;
			}

			try {
				const refreshedToken = (await AuthService.refreshToken(token))
					.token;
				const profile = await UsersService.getProfile(refreshedToken);
				dispatch(
					setUser({
						token: refreshedToken,
						user: profile,
					})
				);
				setIsLoading(false);
			} catch (error) {
				navigate("/auth/login");
			}
		};

		if (!user) verifyOrRedirect();

		return () => {};
	}, [user]);

	return { isLoading };
}
