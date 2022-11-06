import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../features/userSlice";
import { useAppDispatch } from "../../../hooks/useAppDispatch";

export default function Logout() {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(logout());
		navigate("/");
		return () => {};
	}, []);

	return <></>;
}
