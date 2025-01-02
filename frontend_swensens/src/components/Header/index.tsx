import React from "react";
import HeaderActions from "./HeaderActions";

import { Link } from "react-router-dom";

const Header: React.FC = () => {
	return (
		<header className="sticky top-0 z-20  w-full [box-shadow:0_2px_15px_rgba(0,0,0,.05)] ">
			<div className="bg-white shadow-md">
				<div className="container flex items-center justify-between py-2">
					<div className="col1 w-[15%]">
						{/* Logo */}
						<Link className="flex items-start bg-none p-3" to="/">
							<img
								src="/src/assets/svg/Swensens-logo.svg"
								width={120}
								height={110}
								alt="Swensens"
								className="h-8 w-auto sm:h-10 lg:h-12"
							/>
						</Link>
					</div>

					{/* Desktop Actions */}
					<div className="col2 flex items-end">
						<HeaderActions />
					</div>

					{/* Mobile Navigation */}
					<div className="lg:hidden">Mobile Navigation</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
