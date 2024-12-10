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
			<header className="sticky z-50 top-0 flex lg:mx-24 mx-4 items-center justify-between bg-white border-b border-[#FFF5F5] p-4 shadow-sm">
				<section className="flex items-center w-full max-w-[1200px]">
					{/* Logo */}
					<div className="flex items-center ">
						<img
							src="/swensens-logo.png"
							alt="Swensen's"
							className="h-10 w-auto"
						/>
					</div>
				</section>

				<HeaderActions />
			</header>
		</>
	);
};
