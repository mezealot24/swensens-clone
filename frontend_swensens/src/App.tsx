import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { BodyContainer } from "./components/layout/Body";

function App() {
	return (
		<BrowserRouter>
			{/* Full-width container */}
			<div className="min-h-screen flex flex-col">
				{/* Header with full width and centered content */}
				<div className="w-full bg-white">
					<Header />
				</div>

				{/* Main content with full width and centered content */}
				<main className="flex-1 w-full bg-background">
					<div className="max-w-7xl mx-auto">
						<BodyContainer />
						<Routes>
							<Route path="/" />
						</Routes>
					</div>
				</main>

				{/* Footer with full width and centered content */}
				<div className="w-full bg-white">
					<div className="max-w-7xl mx-auto">
						<Footer />
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
