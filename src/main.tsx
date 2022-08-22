import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import { Theme } from "react-daisyui";
import "./i18n";
import "react-toastify/dist/ReactToastify.min.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<Theme dataTheme="corporate">
				<BrowserRouter>
					<Router />
				</BrowserRouter>
			</Theme>
		</Provider>
	</React.StrictMode>
);
