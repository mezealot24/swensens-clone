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
			<div className="hidden lg:flex items-center justify-end space-x-8">
				{/* Shopping bag section */}
				<button
					type="button"
					className="relative max-w-full cursor-pointer space-x-8 font-semibold disabled:cursor-not-allowed disabled:fill-text-disabled disabled:text-text-disabled p-0 h-10 px-4 py-2 text-title-md-medium leading-[22px] md:h-12 md:py-3 md:text-title-md-medium md:leading-[22px] ml-2"
					tabIndex={0}
				>
					<div className="flex items-center justify-center">
						<div className="relative flex items-center justify-center">
							<ShoppingBag className="h-5 w-5" />
						</div>
					</div>
				</button>

				{/* Login button section */}
				<div className="flex items-center space-x-2">
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
				<div className="flex items-center space-x-2	">
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
