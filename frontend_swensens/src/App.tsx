import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer/index";
import Home from "@/pages/Home";
import { LoginPage } from "@/pages/auth/LoginPage";
import { RegisterPage } from "@/pages/auth/RegisterPage";
import { AuthProvider } from "@/features/auth/AuthProvider";
import { PATHS } from "@/config/routes";

function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Header />
				<main className="flex-1">
					<Routes>
						<Route path={PATHS.HOME} element={<Home />} />
						<Route path={PATHS.LOGIN} element={<LoginPage />} />
						<Route path={PATHS.REGISTER} element={<RegisterPage />} />
					</Routes>
				</main>
				<Footer />
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;
