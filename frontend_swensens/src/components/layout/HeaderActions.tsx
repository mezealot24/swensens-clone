import { useState } from "react";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Menu, ShoppingBag, Globe } from "lucide-react";
import MobileNav from "./MobileNav";

const HeaderActions = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<>
			<div className="hidden lg:flex items-center justify-center space-x-8">
				{/* Shopping bag section */}
				<div className="flex items-center">
					<ShoppingBag className="h-5 w-5" />
				</div>

				{/* Login button section */}
				<div className="flex items-center">
					<Button
						variant="default"
						className="flex items-center space-x-2 rounded-full text-lg"
					>
						<span className="text-title-md-medium">
							เข้าสู่ระบบ / ลงทะเบียน
						</span>
					</Button>
				</div>

				{/* Language selector section */}
				<div className="flex items-center">
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
			</div>

			<button
				className="block lg:hidden"
				onClick={toggleMenu}
				aria-label="Toggle menu"
				aria-expanded={isMenuOpen}
			>
				<Menu className="h-6 w-6 text-text-primary" />
			</button>

			<MobileNav isOpen={isMenuOpen} handleHamburger={toggleMenu} />
		</>
	);
};

export default HeaderActions;
