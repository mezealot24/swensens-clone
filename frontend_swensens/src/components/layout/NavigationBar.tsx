import { useState } from "react";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Menu, ShoppingBag, Globe } from "lucide-react";
import MobileNav from "./MobileNav";

const NavigationBar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className="container mx-auto px-4 py-8">
			<nav className="flex items-center justify-between px-4 py-3 lg:px-8 xl:px-16">
				<div className="flex items-center">
					<a href="/th" className="mr-4 lg:mr-8">
						<img
							src="/images/Swensens-logo.svg"
							alt="Swensens Logo"
							className="h-8 lg:h-10"
						/>
					</a>
				</div>

				<div className="hidden space-x-4 lg:flex">
					<ShoppingBag className="h-5 w-5" />
					<Button variant="default" className="flex items-center space-x-2">
						<span className="text-title-md-medium">
							เข้าสู่ระบบ / ลงทะเบียน
						</span>
					</Button>
					<Popover>
						<PopoverTrigger asChild>
							<Button variant="ghost" className="flex items-center space-x-2">
								<Globe className="h-5 w-5" />
								<span className="text-title-md-medium">th</span>
							</Button>
						</PopoverTrigger>
						<PopoverContent>{/* Language selection options */}</PopoverContent>
					</Popover>
				</div>

				<button
					className="block lg:hidden"
					onClick={toggleMenu}
					aria-label="Toggle menu"
					aria-expanded={isMenuOpen}
				>
					<Menu className="h-6 w-6 text-text-primary" />
				</button>
			</nav>

			<MobileNav isOpen={isMenuOpen} handleHamburger={toggleMenu} />
		</header>
	);
};

export default NavigationBar;
