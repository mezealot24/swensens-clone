import { Button } from "@/components/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { ShoppingCart } from "lucide-react";

interface MobileNavProps {
	isOpen: boolean;
	handleHamburger: () => void;
}

const MobileNav = ({ isOpen, handleHamburger }: MobileNavProps) => {
	if (!isOpen) return null;

	return (
		<nav className="fixed inset-x-0 top-[60px] z-50 bg-slate-400  lg:hidden">
			<div className="container px-4 py-6 space-y-4">
				{/* Shopping Cart */}
				<div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
					<ShoppingCart className="h-10 w-10 text-primary" />
					<span className="text-sm font-medium">ตะกร้าสินค้า</span>
				</div>

				{/* Login Button */}
				<Button
					variant="default"
					className="w-full bg-red-500 text-white hover:bg-red-600 rounded-full"
				>
					<span className="text-sm font-medium">เข้าสู่ระบบ / ลงทะเบียน</span>
				</Button>

				{/* Language Selector */}
				<Popover>
					<PopoverTrigger asChild>
						<Button
							variant="outline"
							className="w-full flex items-center justify-between border rounded-lg"
						>
							<div className="flex items-center gap-2">
								<img
									src="/images/change-language.svg"
									alt="Language"
									className="h-5 w-5"
								/>
								<span className="text-sm font-medium">ไท�</span>
							</div>
						</Button>
					</PopoverTrigger>
					<PopoverContent className="w-full p-2">
						<div className="space-y-2">
							<Button variant="ghost" className="w-full justify-start">
								ไทย
							</Button>
							<Button variant="ghost" className="w-full justify-start">
								English
							</Button>
						</div>
					</PopoverContent>
				</Popover>
			</div>
		</nav>
	);
};

export default MobileNav;
