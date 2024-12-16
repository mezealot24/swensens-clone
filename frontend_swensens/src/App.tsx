import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { BodyContainer } from "./components/layout/Body";

function App() {
	return (
		<BrowserRouter>
			<div className="w-full h-full">
				{/* Header จะจัดการทั้ง Desktop และ Mobile แล้ว */}
				<Header />

				{/* Main Content */}
				<main className="relative flex flex-1 flex-col bg-background">
					<BodyContainer />
					<Routes>
						<Route path="/" />
					</Routes>
				</main>

				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
