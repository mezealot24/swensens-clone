import React from "react";
import HeaderActions from "./HeaderActions";
import { MobileNav } from "./MobileNav";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
	return (
		<header className="sticky top-0 z-20 hidden mx-8 py-4 bg-white text-black lg:flex">
			<section className="flex items-center justify-between relative mx-auto w-full max-w-screen-2xl p-12">
				<div className=" flex items-center justify-between">
					{/* logo */}
					<Link
						className="logo !my-0 !ml-0 !mr-24 flex h-full shrink-0 items-center bg-none"
						to="/"
					>
						<img src="/images/Swensens-logo.svg" alt="Swensens" />
					</Link>
				</div>

				{/* desktop nav & hire me button*/}
				<div className="hidden xl:flex items-center gap-8">
					<HeaderActions />
				</div>

				{/* Mobile nav */}
				<div className="xl:hidden">
					<MobileNav />
				</div>
			</section>
		</header>
	);
};
