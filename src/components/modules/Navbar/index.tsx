import React from "react";
import { Avatar } from "react-daisyui";
import { Link } from "react-router-dom";
import navbarLogo from "../../../assets/logos/navbar.svg";
import { useAppSelector } from "../../../hooks/useAppDispatch";

export default function Navbar() {
	const user = useAppSelector((state) => state.user);

	return (
		<div className="absolute bottom-0 flex bg-base-100 px-4 justify-between items-center left-0 right-0 h-14 border-t">
			<img src={navbarLogo} className="h-8" />
			<Link to="/profile" className="h-10">
				<Avatar
					src={user?.image}
					shape="circle"
					size="xs"
					className="cursor-pointer hover:brightness-75"
				/>
			</Link>
		</div>
	);
}
