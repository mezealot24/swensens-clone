import { Button } from "@/components/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { ShoppingCart } from "lucide-react";

interface MobileNavProps {
	isOpen: boolean;
}

const MobileNav = ({ isOpen }: MobileNavProps) => {
	if (!isOpen) return null;

	return (
		<div className="absolute inset-x-0 top-full bg-background-white px-4 py-3 lg:hidden">
			<Button variant="default" className="flex w-full items-center space-x-2">
				<ShoppingCart className="h-5 w-5" />
				<span className="text-title-md-medium">เข้าสู่ระบบ / ลงทะเบียน</span>
			</Button>
			<Popover>
				<PopoverTrigger asChild>
					<Button
						variant="ghost"
						className="mt-3 flex w-full items-center space-x-2"
					>
						<img
							src="/images/change-language.svg"
							alt="Language"
							className="h-5 w-5"
						/>
						<span className="text-title-md-medium">th</span>
					</Button>
				</PopoverTrigger>
				<PopoverContent>{/* Language selection options */}</PopoverContent>
			</Popover>
		</div>
	);
};

export default MobileNav;
