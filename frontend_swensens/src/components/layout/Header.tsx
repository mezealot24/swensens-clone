import React from "react";
import HeaderActions from "./HeaderActions";
import { MobileNav } from "./MobileNav";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
	return (
		<header className="sticky top-0 z-20 bg-white shadow-md shadow-gray-300/50">
			<div className="flex items-center justify-between px-4 py-2 mx-auto sm:px-6 lg:px-20 lg:py-4">
				<div className="flex items-center justify-between w-full px-16">
					{/* Logo */}
					<div className="flex items-center px-16">
						{/* Logo */}
						<Link
							className="logo flex h-full shrink-0 items-center bg-none"
							to="/"
						>
							<img
								src="/images/Swensens-logo.svg"
								width={152}
								height={140}
								alt="Swensens"
								className="h-8 w-auto sm:h-10 lg:h-12"
							/>
						</Link>
					</div>

					{/* Desktop Actions */}
					<div className="hidden lg:flex items-center pr-16">
						<HeaderActions />
					</div>

					{/* Mobile Navigation */}
					<div className="lg:hidden">
						<MobileNav />
					</div>
				</div>
			</div>
		</header>
	);
};
