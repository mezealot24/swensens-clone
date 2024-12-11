import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const BodyContainer: React.FC = () => {
	return (
		<section className="container mx-auto px-4 py-8">
			<h2 className="text-2xl font-bold mb-6">โปรโมชั่น</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{/* โปรโมชั่นการ์ด 1 */}
				<Card className="overflow-hidden hover:shadow-lg transition-shadow">
					<CardContent className="p-0">
						<div className="relative">
							<img
								src="/promotion-1.jpg"
								alt="Swensen's Promotion"
								className="w-full h-auto"
							/>
							<Badge className="absolute top-2 right-2 bg-red-600">
								2 ควอท
							</Badge>
						</div>
						<div className="p-4">
							<p className="text-xl font-bold text-red-600">฿449</p>
							<p className="text-sm text-gray-500">ปกติ ฿738</p>
						</div>
					</CardContent>
				</Card>

				{/* โปรโมชั่นการ์ด 2 */}
				<Card className="overflow-hidden hover:shadow-lg transition-shadow">
					<CardContent className="p-0">
						<div className="relative">
							<img
								src="/promotion-2.jpg"
								alt="Swensen's Promotion"
								className="w-full h-auto"
							/>
							<Badge className="absolute top-2 right-2 bg-red-600">
								2 มินิควอท
							</Badge>
						</div>
						<div className="p-4">
							<p className="text-xl font-bold text-red-600">฿379</p>
							<p className="text-sm text-gray-500">ปกติ ฿478</p>
						</div>
					</CardContent>
				</Card>

				{/* เพิ่มการ์ดอื่นๆ ตามต้องการ */}
			</div>
		</section>
	);
};
