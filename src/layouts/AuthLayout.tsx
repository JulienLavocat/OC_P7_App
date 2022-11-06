import { Outlet, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useAppSelector } from "../hooks/useAppDispatch";

export default function AuthLayout() {
	const user = useAppSelector((state) => state.user.loggedIn);
	const navigate = useNavigate();
	if (user) navigate("/");

	return (
		<div className="h-screen w-screen bg-base-200 flex items-center justify-center">
			<div className="bg-base-100 w-full max-w-sm p-4 rounded-lg shadow">
				<Outlet />
			</div>
			<ToastContainer />
		</div>
	);
}
