// LanguageButton.tsx
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

export const LanguageButton = () => {
	return (
		<Button variant="ghost" className="flex items-center  hover:bg-transparent">
			<Globe className="h-4 w-4 text-gray-700" />
			<span className="text-xl text-gray-700">TH</span>
		</Button>
	);
};
