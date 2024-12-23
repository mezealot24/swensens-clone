import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { ArrowLeft } from "lucide-react";

const formSchema = z.object({
	firstName: z.string().min(1, "กรุณากรอกชื่อ"),
	lastName: z.string().min(1, "กรุณากรอกนามสกุล"),
	email: z.string().email("อีเมลไม่ถูกต้อง"),
	password: z.string().min(6, "รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร"),
	dateOfBirth: z.string().min(1, "กรุณาเลือกวันเกิด"),
	phoneNumber: z.string().min(10, "เบอร์โทรศัพท์ไม่ถูกต้อง"),
	gender: z.enum(["Male", "Female", "Other"]),
	termsAccepted: z.boolean().refine((val) => val === true, {
		message: "กรุณายอมรับเงื่อนไขการใช้งาน",
	}),
});

export function RegisterForm() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			dateOfBirth: "",
			phoneNumber: "",
			gender: "Other",
			termsAccepted: false,
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}

	return (
		<section className="w-full overflow-x-hidden bg-background">
			<section className="relative mx-auto w-full p-6 pb-10 max-w-screen-2xl min-h-screen">
				<section className="relative w-full xl:min-h-screen grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12 lg:gap-8 h-full py-10">
					<div className="col-span-full lg:col-span-5">
						<div className="flex flex-col space-y-6">
							<div className="hidden md:flex items-center justify-between">
								<Button variant="ghost" size="sm" className="gap-2">
									<ArrowLeft className="h-4 w-4" />
									กลับ
								</Button>

								<div className="flex items-center gap-4">
									<span className="text-muted-foreground">
										มีบัญชีสมาชิกอยู่แล้วใช่หรือไม่
									</span>
									<Button variant="outline" className="rounded-full">
										เข้าสู่ระบบ
									</Button>
								</div>
							</div>

							<div className="rounded-lg border bg-card p-6 shadow-sm">
								<Form {...form}>
									<form
										onSubmit={form.handleSubmit(onSubmit)}
										className="space-y-6"
									>
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
														<FormMessage />
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
														<FormMessage />
													</FormItem>
												)}
											/>
										</div>

										<Button
											type="submit"
											className="w-full rounded-full bg-primary"
										>
											สร้างบัญชี
										</Button>
									</form>
								</Form>
							</div>
						</div>
					</div>

					<div className="absolute inset-y-0 right-0 hidden lg:block h-full min-h-screen w-2/5">
						<img
							src="/images/banner/register-banner.jpg"
							alt="banner"
							className="h-full w-full object-cover"
						/>
					</div>
				</section>
			</section>
		</section>
	);
}
