import React from "react";
import { RouteObject, useRoutes } from "react-router-dom";
import Profile from "./components/modules/Profile";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";

const routes: RouteObject[] = [
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
