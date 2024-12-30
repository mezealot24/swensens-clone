//src/components/auth/LoginForm.tsx

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { PasswordInput } from "./PasswordInput";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
	email: z
		.string()
		.trim()
		.min(1, { message: "กรุณากรอกอีเมล" })
		.email({ message: "กรุณากรอกอีเมลให้ถูกต้อง" }),
	password: z
		.string()
		.trim()
		.min(8, { message: "รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร" })
		.max(50, { message: "รหัสผ่านต้องไม่เกิน 50 ตัวอักษร" }),
});

type FormData = z.infer<typeof formSchema>;

export function LoginForm() {
	const form = useForm<FormData>({
		resolver: zodResolver(formSchema),
		mode: "onSubmit", // Validate only on form submission
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = async (data: FormData): Promise<void> => {
		try {
			// Sanitize data before processing
			const sanitizedData = {
				email: data.email.trim(),
				password: data.password.trim(),
			};

			console.log(sanitizedData);
			// Implement your login logic here
			// For example:
			// const response = await login(sanitizedData);
		} catch (error) {
			// Handle login error
			console.error("Login failed", error);
		}
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="flex text-xl">
								อีเมล
								<div className="text-red-500 text-sm">*</div>
							</FormLabel>
							<FormControl className="h-12">
								<Input
									placeholder="อีเมลของคุณ"
									{...field}
									autoComplete="email"
									// Remove error display during typing
									onBlur={field.onBlur}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="flex text-xl ">
								รหัสผ่าน
								<div className="text-red-500 text-sm">*</div>
							</FormLabel>
							<FormControl className="h-12">
								<PasswordInput
									placeholder="รหัสผ่านของคุณ"
									{...field}
									autoComplete="current-password"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className="flex flex-col gap-2">
					<Button
						type="button"
						variant="link"
						className="text-sm text-blue-600 self-start"
					>
						ลืมรหัสผ่าน?
					</Button>

					<Button type="submit" className="w-full rounded-full">
						เข้าสู่ระบบ
					</Button>
				</div>
			</form>
		</Form>
	);
}
