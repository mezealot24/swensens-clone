import { useState } from "react";
import { Link } from "react-router-dom";
import {
	AiOutlineSearch,
	AiOutlineUser,
	AiOutlineHeart,
	AiOutlineShoppingCart,
} from "react-icons/ai";
import MobileNav from "./MobileNav";
/* import Hamburger from "./Hamburger";
import MobileMenu from "./MobileMenu"; */

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const handleHamburger = () => {
		setIsOpen(!isOpen);
		document.body.style.overflow = isOpen ? "auto" : "hidden";
	};

	return (
		<>
			<header className="bg-white h-[60px] lg:h-[68px] shadow-lg sticky top-0 z-20">
				<div className="container h-full flex justify-between items-center">
					<div className="flex items-center gap-4 lg:flex-row-reverse">
						{/* <Hamburger handleHamburger={handleHamburger} /> */}
						<Link to="/th">
							<img
								src="/images/swensens-logo.png"
								alt="logo"
								className="w-10 h-10"
							/>
						</Link>
					</div>

					<div className="flex gap-4 items-center">
						<AiOutlineSearch className="w-6 h-6" />
						<Link to="/account">
							<AiOutlineUser className="w-6 h-6 hidden lg:block" />
						</Link>
						<AiOutlineHeart className="w-6 h-6 hidden lg:block" />
						<Link to="/cart">
							<AiOutlineShoppingCart className="w-6 h-6" />
						</Link>
					</div>
				</div>
			</header>
			<MobileNav isOpen={isOpen} handleHamburger={handleHamburger} />
		</>
	);
};

export default Header;
