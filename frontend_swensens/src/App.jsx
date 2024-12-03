import "./App.css";

import React from "react";

function Greeting({ name }) {
	return <h1>Hello, {name}</h1>;
}

export default function App() {
	return <Greeting name="Toukta" />;
}
