import React from "react";
import { RouteObject, useRoutes } from "react-router-dom";
import Login from "./components/modules/Login";
import Logout from "./components/modules/Logout";
import Profile from "./components/modules/Profile";
import Register from "./components/modules/Register";
import AppLayout from "./layouts/AppLayout";
import AuthLayout from "./layouts/AuthLayout";
import Home from "./pages/Home";

const routes: RouteObject[] = [
	{
		path: "/auth",
		element: <AuthLayout />,
		children: [
			{
				path: "/auth/login",
				element: <Login />,
			},
			{
				path: "/auth/register",
				element: <Register />,
			},
			{
				path: "/auth/logout",
				element: <Logout />,
			},
		],
	},
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/profile",
				element: <Profile />,
			},
		],
	},
];

export default function Router() {
	return useRoutes(routes);
}
