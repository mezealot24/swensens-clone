import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.js/index.js";
import App from "./App.jsx";

function NavigationBar() {
	// TODO: Actually implement a navigation bar
	return <h1>Hello from React!</h1>;
}

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<NavigationBar />
		<App />
	</StrictMode>
);
