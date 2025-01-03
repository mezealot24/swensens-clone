//src/components/auth/LoginModal.tsx
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { LoginForm } from "./LoginForm";

interface LoginModalProps {
	isOpen: boolean;
	onOpenChange: (open: boolean) => void;
}

export function LoginModal({ isOpen, onOpenChange }: LoginModalProps) {
	return (
		<Dialog open={isOpen} onOpenChange={onOpenChange}>
			<DialogContent className="sm:max-w-md">
				<DialogHeader>
					<DialogTitle className="whitespace-normal text-gray-600">
						ยินดีต้อนรับสมาชิก Swensen's <br />
						เข้าสู่ระบบแล้วเริ่มสั่งไอศกรีมกันเลย!
					</DialogTitle>
				</DialogHeader>

				<LoginForm />

				<div className="text-center text-gray-600 text-sm">
					<span>ยังไม่มีบัญชีใช่หรือไม่ </span>
					<Button
						variant="ghost"
						className="text-blue-600 p-2 h-auto font-normal hover:bg-transparent hover:text-blue-600"
						onClick={() => {
							/* Handle registration */
						}}
					>
						สมัครสมาชิก
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
}
