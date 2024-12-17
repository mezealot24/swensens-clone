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
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
	email: z.string().email("กรุณากรอกอีเมลให้ถูกต้อง."),
	password: z.string().min(8, "กรุณากรอกรหัสผ่านให้ถูกต้อง."),
});

type FormData = z.infer<typeof formSchema>;

export function LoginForm() {
	const form = useForm<FormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = async (data: FormData): Promise<void> => {
		console.log(data);
		// Implement your login logic here
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>อีเมล</FormLabel>
							<FormControl>
								<Input type="email" placeholder="อีเมลของคุณ" {...field} />
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
							<FormLabel>รหัสผ่าน</FormLabel>
							<FormControl>
								<Input
									type="password"
									placeholder="รหัสผ่านของคุณ"
									{...field}
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				<div className="flex flex-col gap-2">
					<Button variant="link" className="text-sm text-blue-600 self-start">
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
