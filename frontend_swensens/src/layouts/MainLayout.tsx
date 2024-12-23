import { Outlet } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const MainLayout = () => {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main className="flex-1 w-full bg-background">
				<div className="max-w-7xl mx-auto">
					<Outlet />
				</div>
			</main>
			<Footer />
		</div>
	);
};
