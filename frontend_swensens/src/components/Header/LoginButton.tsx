// LoginButton.tsx
import { Button } from "@/components/ui/button";

interface LoginButtonProps {
	onClick: () => void;
}

export const LoginButton = ({ onClick }: LoginButtonProps) => {
	return (
		<Button
			variant="default"
			className="h-12 px-12 py-3 rounded-3xl bg-swensens-red hover:bg-primary-light focus:ring-2 focus:ring-primary-dark disabled:bg-muted text-white font-semibold font-kanit text-lg md:text-xl"
			onClick={onClick}
		>
			<div className="flex items-center justify-center">
				เข้าสู่ระบบ / ลงทะเบียน
			</div>
		</Button>
	);
};
