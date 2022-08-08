import React from "react";
import { RouteObject, useRoutes } from "react-router-dom";
import Home from "./pages/Home";

const routes: RouteObject[] = [
	{
		path: "/",
		element: <Home />,
	},
];

export default function Router() {
	return useRoutes(routes);
}
