import React, { useState } from "react";
import HeaderActions from "./HeaderActions";

export const Header: React.FC = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [language, setLanguage] = useState("TH");

	const handleLoginClick = () => {
		setIsLoggedIn(!isLoggedIn); // สลับสถานะล็อกอิน
	};

	const handleLanguageChange = (lang: string) => {
		setLanguage(lang);
	};

	return (
		<>
			<header className="site-header sticky top-0 z-20 hidden h-[80px] w-full gap-8 bg-background-white px-16 [box-shadow:0_2px_15px_rgba(0,0,0,.05)] lg:flex">
				<section className="relative container flex items-center mx-auto w-full max-w-screen-2xl">
					<div className="container mx-auto flex justify-between items-center">
						{/* Logo */}
						<img
							src="/swensens-logo.png"
							alt="Swensen's"
							className="h-10 w-auto"
						/>

						<HeaderActions />
					</div>
				</section>
			</header>
		</>
	);
};
