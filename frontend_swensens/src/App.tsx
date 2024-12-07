import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/layout/NavigationBar";
import Home from "./components/layout/Home";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
function App() {
	return (
		<BrowserRouter>
			<Header />
			<NavigationBar />

			<main className="flex-1">
				<Routes>
					<Route path="/" element={<Home />} />
					{/* เพิ่ม routes อื่นๆ ตามต้องการ */}
				</Routes>
			</main>

			<Footer />
		</BrowserRouter>
	);
}

export default App;
