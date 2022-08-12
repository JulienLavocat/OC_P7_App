import React from "react";
import { RouteObject, useRoutes } from "react-router-dom";
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
		],
	},
];

export default function Router() {
	return useRoutes(routes);
}
