import React from "react";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
	return (
		<div className="h-screen w-screen bg-base-200 flex items-center justify-center">
			<div className="bg-base-100 w-full max-w-sm p-4 rounded-lg shadow">
				<Outlet />
			</div>
		</div>
	);
}
