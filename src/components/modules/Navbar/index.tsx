import React from "react";
import { Avatar, Tooltip } from "react-daisyui";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import navbarLogo from "../../../assets/logos/navbar.svg";
import { useAppSelector } from "../../../hooks/useAppDispatch";

export default function Navbar() {
	const image = useAppSelector((state) => state.user?.user.image);
	const { t } = useTranslation();

	return (
		<div className="absolute bottom-0 flex bg-base-100 px-4 justify-between items-center left-0 right-0 h-14 border-t">
			<Link to="/">
				<img src={navbarLogo} className="h-8" />
			</Link>
			<Link to="/auth/logout" className="h-10">
				<Tooltip message={t("navbar.logout")}>
					<Avatar
						src={image}
						shape="circle"
						size="xs"
						className="cursor-pointer hover:brightness-75"
					/>
				</Tooltip>
			</Link>
		</div>
	);
}
