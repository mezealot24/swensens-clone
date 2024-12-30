import { BrowserRouter } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer/index";
import Home from "@/pages/Home";

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<main className="flex-1">
					<Home />
				</main>

				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
