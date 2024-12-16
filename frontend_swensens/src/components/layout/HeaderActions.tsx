import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Menu, ShoppingBag, Globe } from "lucide-react";
import { MobileNav } from "./MobileNav";
import { LoginModal } from "../auth/LoginModal";

const HeaderActions = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isLoginOpen, setIsLoginOpen] = useState(false);

	return (
		<>
			{/* Desktop Actions */}
			<div className="hidden lg:flex items-center space-x-8">
				<Button variant="ghost" className="relative p-2 hover:bg-transparent">
					<ShoppingBag className="h-6 w-6 text-gray-700" />
				</Button>

				<Button
					variant="default"
					className="bg-red-600 hover:bg-red-700 text-white rounded-full px-6 py-2"
					onClick={() => setIsLoginOpen(true)} // Trigger LoginModal
				>
					<span>เข้าสู่ระบบ / ลงทะเบียน</span>
				</Button>

				<Button
					variant="ghost"
					className="flex items-center space-x-2 hover:bg-transparent"
				>
					<span className="text-gray-700">TH</span>
				</Button>
			</div>

			{/* Mobile Actions */}
			<div className="flex lg:hidden items-center space-x-4">
				<Button variant="ghost" className="p-2">
					<ShoppingBag className="h-5 w-5 text-gray-700" />
				</Button>
				<Button
					variant="ghost"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					className="p-2"
				>
					<Menu className="h-5 w-5 text-gray-700" />
				</Button>
			</div>

			{/* LoginModal Trigger */}
			<LoginModal
				isOpen={isLoginOpen} // Pass the state to control open/close
				onOpenChange={setIsLoginOpen} // Update state when modal closes
			/>
		</>
	);
};

export default HeaderActions;
