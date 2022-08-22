import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "../components/modules/Navbar";
import { useAppSelector } from "../hooks/useAppDispatch";

export default function AppLayout() {
	const user = useAppSelector((state) => state.user);
	const navigate = useNavigate();

	useEffect(() => {
		if (!user) {
			navigate("/auth/login");
		}
		return () => {};
	}, [user]);

	return (
		<>
			<div className="grid grid-rows-[1fr_3.5rem] h-screen max-h-screen bg-base-200">
				<Outlet />
			</div>
			<Navbar />
			<ToastContainer />
		</>
	);
}
