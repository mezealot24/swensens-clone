import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import NavigationBar from "./components/NavigationBar";
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<NavigationBar />
		<App />
	</React.StrictMode>
);
