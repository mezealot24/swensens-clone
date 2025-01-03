//src/components/auth/LoginForm.tsx

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/features/auth/PasswordInput";
import { useAuth } from "@/features/auth/AuthProvider";
import { useNavigate } from "react-router-dom";

const loginSchema = z.object({
	email: z
		.string()
		.trim()
		.min(1, { message: "กรุณากรอกอีเมล" })
		.email({ message: "กรุณากรอกอีเมลให้ถูกต้อง" }),
	password: z
		.string()
		.trim()
		.min(8, { message: "รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร" }),
});

type LoginFormData = z.infer<typeof loginSchema>;

export function LoginForm() {
	const { login } = useAuth();
	const navigate = useNavigate();
	const form = useForm<LoginFormData>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = async (data: LoginFormData) => {
		try {
			await login(data.email, data.password);
			navigate("/");
		} catch (error) {
			console.error("Login failed:", error);
		}
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col gap-4"
			>
				<div className="space-y-2">
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<div className="flex items-center gap-0.5">
									<FormLabel className="text-sm font-normal">อีเมล</FormLabel>
									<span className="text-red-500">*</span>
								</div>
								<FormControl>
									<Input
										placeholder="อีเมล"
										className="h-11 px-4 rounded-sm"
										{...field}
									/>
								</FormControl>
							</FormItem>
						)}
					/>
				</div>

				<div className="space-y-2">
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<div className="flex items-center gap-0.5">
									<FormLabel className="text-sm font-normal">
										รหัสผ่าน
									</FormLabel>
									<span className="text-red-500">*</span>
								</div>
								<FormControl>
									<PasswordInput
										placeholder="รหัสผ่าน"
										className="h-11 px-4 rounded-sm"
										{...field}
									/>
								</FormControl>
							</FormItem>
						)}
					/>
				</div>

				<Button
					variant="link"
					type="button"
					className="text-blue-600 self-start p-0 h-8 text-sm hover:underline"
				>
					ลืมรหัสผ่าน?
				</Button>

				<Button
					variant="default"
					className="h-12 px-12 py-3 rounded-3xl bg-swensens-red hover:bg-primary-light focus:ring-2 focus:ring-primary-dark disabled:bg-muted text-white font-semibold font-kanit text-lg md:text-xl"
				>
					เข้าสู่ระบบ
				</Button>
			</form>
		</Form>
	);
}
