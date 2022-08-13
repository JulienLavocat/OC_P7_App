import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/modules/Navbar";
import { setUser } from "../features/userSlice";
import { useAppDispatch, useAppSelector } from "../hooks/useAppDispatch";

export default function AppLayout() {
	const user = useAppSelector((state) => state.user);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (!user) {
			dispatch(
				setUser({
					id: "julienlavocat",
					name: "Julien Lavocat",
					image: "https://dicebear.julienlavocat.me/api/initials/julienlavocat.svg",
					role: "user",
				})
			);
		}
		return () => {};
	}, [user]);

	return (
		<>
			<div className="grid grid-rows-[1fr_3.5rem] h-screen max-h-screen bg-base-200">
				<Outlet />
			</div>
			<Navbar />
		</>
	);
}
