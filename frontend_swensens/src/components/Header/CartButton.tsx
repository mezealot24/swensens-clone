// CartButton.tsx
import { Button } from "@/components/ui/button";
import { ShoppingBasket } from "lucide-react";

interface CartButtonProps {
	isMobile?: boolean;
}

export const CartButton = ({ isMobile = false }: CartButtonProps) => {
	return isMobile ? (
		<Button variant="ghost" className="p-2">
			<ShoppingBasket className=" w-6 h-6 !size-auto text-gray-700" />{" "}
			{/* ปรับ h-6 w-6 เพื่อเพิ่มขนาด */}
		</Button>
	) : (
		<Button
			variant="ghost"
			size="lg"
			className="relative p-2 hover:bg-transparent"
		>
			<ShoppingBasket
				size={32}
				className="w-10 h-10 !size-auto text-gray-700 hover:drop-shadow-lg"
			/>
		</Button>
	);
};
