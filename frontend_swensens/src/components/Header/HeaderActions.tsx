// HeaderActions.tsx
import { useState } from "react";
import { CartButton } from "./CartButton";
import { LoginButton } from "./LoginButton";
import { LanguageButton } from "./LanguageButton";
import { MenuButton } from "./MenuButton";
import { LoginModal } from "@/features/auth/LoginModal";

const HeaderActions = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isLoginOpen, setIsLoginOpen] = useState(false);

	return (
		<>
			{/* Desktop Actions */}
			<div className="hidden lg:flex items-center space-x-8">
				<CartButton />
				<LoginButton onClick={() => setIsLoginOpen(true)} />
				<LanguageButton />
			</div>

			{/* Mobile Actions */}
			<div className="flex lg:hidden items-center space-x-4">
				<CartButton isMobile />
				<MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)} />
			</div>

			{/* LoginModal Trigger */}
			<LoginModal isOpen={isLoginOpen} onOpenChange={setIsLoginOpen} />
		</>
	);
};

export default HeaderActions;
