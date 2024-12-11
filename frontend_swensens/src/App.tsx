import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { BodyContainer } from "./components/layout/Body";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<main className="relative flex min-h-screen flex-col bg-background">
				<Routes>
					<Route path="/" />
					{/* เพิ่ม routes อื่นๆ ตามต้องการ */}
				</Routes>
			</main>
			<BodyContainer />
			<Footer />
		</BrowserRouter>
	);
}

export default App;
