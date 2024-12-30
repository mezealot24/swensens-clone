// MenuButton.tsx
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

interface MenuButtonProps {
	onClick: () => void;
}

export const MenuButton = ({ onClick }: MenuButtonProps) => {
	return (
		<Button variant="ghost" onClick={onClick} className="p-2">
			<Menu className="h-5 w-5 text-gray-700" />
		</Button>
	);
};
