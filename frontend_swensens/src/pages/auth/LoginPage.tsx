import { LoginForm } from "@/components/auth/LoginForm";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PATHS } from "@/routes/paths";

export function LoginPage() {
	return (
		<section className="w-full overflow-x-hidden bg-background">
			<section className="relative mx-auto w-full p-6 pb-10 max-w-screen-2xl min-h-screen">
				<section className="relative w-full xl:min-h-screen grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12 lg:gap-8 h-full py-10">
					<div className="col-span-full lg:col-span-5">
						<div className="flex flex-col space-y-6">
							{/* Header Actions */}
							<div className="hidden md:flex items-center justify-between">
								<Link to={PATHS.HOME}>
									<Button variant="ghost" size="sm" className="gap-2">
										<ArrowLeft className="h-4 w-4" />
										กลับ
									</Button>
								</Link>

								<div className="flex items-center gap-4">
									<span className="text-muted-foreground">
										ยังไม่มีบัญชีใช่หรือไม่
									</span>
									<Link to={PATHS.REGISTER}>
										<Button variant="outline" className="rounded-full">
											สร้างบัญชี
										</Button>
									</Link>
								</div>
							</div>

							{/* Login Form Card */}
							<div className="rounded-lg border bg-card p-6 shadow-sm">
								<div className="mb-6">
									<h1 className="text-2xl font-semibold">
										ยินดีต้อนรับสมาชิก Swensen's
									</h1>
									<p className="text-muted-foreground">
										เข้าสู่ระบบ แล้วเริ่มสั่งไอศกรีมกันเลย!
									</p>
								</div>
								<LoginForm />
							</div>

							{/* Mobile Register Link */}
							<div className="flex justify-center lg:hidden">
								<span className="text-sm text-muted-foreground">
									ยังไม่มีบัญชีใช่หรือไม่?{" "}
									<Link
										to={PATHS.REGISTER}
										className="text-primary hover:underline"
									>
										สร้างบัญชี
									</Link>
								</span>
							</div>
						</div>
					</div>

					{/* Banner Image */}
					<div className="absolute inset-y-0 right-0 hidden lg:block h-full min-h-screen w-2/5">
						<img
							src="/images/banner/login-banner.jpg"
							alt="banner"
							className="h-full w-full object-cover"
						/>
					</div>
				</section>
			</section>
		</section>
	);
}
