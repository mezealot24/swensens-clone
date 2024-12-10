import { useState } from "react";

import HeaderActions from "./HeaderActions";

import { Link } from "react-router-dom";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const handleHamburger = () => {
		setIsOpen(!isOpen);
		document.body.style.overflow = isOpen ? "auto" : "hidden";
	};

	return (
		<>
			<header className="sticky top-0 z-20 hidden h-[80px] w-full gap-8 bg-background-white px-16 [box-shadow:0_2px_15px_rgba(0,0,0,.05)] lg:flex">
				<nav className="relative mx-auto w-full max-w-screen-2xl px-24 flex justify-between items-center">
					<div className="flex w-full items-center justify-between mx-auto px-24">
						<Link to="/">
							<img
								src="/images/Swensens-logo.svg"
								alt="logo"
								className="h-8 lg:h-10"
							/>
						</Link>
						<HeaderActions />
					</div>
				</nav>
			</header>
		</>
	);
};

export default Header;
