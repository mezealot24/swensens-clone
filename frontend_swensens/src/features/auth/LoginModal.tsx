//src/components/auth/LoginModal.tsx

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
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
					<DialogTitle className="max-w-full text-4xl font-primary font-semibold leading-loose text-gray-600">
						ยินดีต้อนรับสมาชิก Swensen's เข้าสู่ระบบ แล้วเริ่มสั่งไอศกรีมกันเลย!
					</DialogTitle>
				</DialogHeader>
				<div className="flex items-center space-x-2">
					<div className="grid flex-1 gap-2">
						<LoginForm />
					</div>
				</div>
				<div className="w-full flex justify-center">
					<span className="text-sm text-gray-600">
						ยังไม่มีบัญชีใช่หรือไม่?
						<Button variant="link" className="text-sm text-blue-600">
							สร้างบัญชี
						</Button>
					</span>
				</div>
			</DialogContent>
		</Dialog>
	);
}
