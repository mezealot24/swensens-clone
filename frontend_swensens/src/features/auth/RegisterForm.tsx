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
import { useAuth } from "@/features/auth/AuthProvider";
import { useNavigate } from "react-router-dom";

const registerSchema = z
	.object({
		firstName: z.string().min(1, "กรุณากรอกชื่อ"),
		lastName: z.string().min(1, "กรุณากรอกนามสกุล"),
		email: z.string().email("อีเมลไม่ถูกต้อง"),
		password: z.string().min(6, "รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร"),
		confirmPassword: z.string().min(6, "กรุณายืนยันรหัสผ่าน"),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "รหัสผ่านไม่ตรงกัน",
		path: ["confirmPassword"],
	});

type RegisterFormData = z.infer<typeof registerSchema>;

export function RegisterForm() {
	const { registerUser } = useAuth();
	const navigate = useNavigate();
	const form = useForm<RegisterFormData>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
	});

	const onSubmit = async (data: RegisterFormData) => {
		try {
			await registerUser({
				email: data.email,
				password: data.password,
				firstName: data.firstName,
				lastName: data.lastName,
			});
			navigate("/");
		} catch (error) {
			console.error("Registration failed:", error);
		}
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
					<FormField
						control={form.control}
						name="firstName"
						render={({ field }) => (
							<FormItem>
								<FormLabel>ชื่อ</FormLabel>
								<FormControl>
									<Input placeholder="ชื่อ" {...field} />
								</FormControl>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="lastName"
						render={({ field }) => (
							<FormItem>
								<FormLabel>นามสกุล</FormLabel>
								<FormControl>
									<Input placeholder="นามสกุล" {...field} />
								</FormControl>
							</FormItem>
						)}
					/>
				</div>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>อีเมล</FormLabel>
							<FormControl>
								<Input placeholder="อีเมล" {...field} />
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>รหัสผ่าน</FormLabel>
							<FormControl>
								<Input type="password" placeholder="รหัสผ่าน" {...field} />
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="confirmPassword"
					render={({ field }) => (
						<FormItem>
							<FormLabel>ยืนยันรหัสผ่าน</FormLabel>
							<FormControl>
								<Input
									type="password"
									placeholder="ยืนยันรหัสผ่าน"
									{...field}
								/>
							</FormControl>
						</FormItem>
					)}
				/>
				<Button type="submit" className="w-full rounded-full bg-primary">
					สร้างบัญชี
				</Button>
			</form>
		</Form>
	);
}

export default RegisterForm;
