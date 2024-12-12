import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { BodyContainer } from "./components/layout/Body";

// สร้าง HomePage component
const HomePage = () => {
	return (
		<div>
			<BodyContainer />
		</div>
	);
};

function App() {
	return (
		<BrowserRouter>
			<div className="flex min-h-screen flex-col">
				{/* Desktop Header */}
				<Header />

				{/* Mobile Header */}
				<header className="sticky top-0 z-20 flex h-[60px] w-full items-center bg-white lg:hidden">
					<div className="container mx-auto flex items-center justify-between px-4">
						<img
							src="/images/Swensens-logo.svg"
							alt="Swensen's"
							className="h-8 w-auto"
						/>
						{/* HeaderActions จะถูกแสดงที่นี่สำหรับ mobile */}
					</div>
				</header>

				{/* Main Content */}
				<main className="relative flex flex-1 flex-col bg-background">
					<Routes>
						<Route path="/" element={<HomePage />} />
					</Routes>
				</main>

				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
