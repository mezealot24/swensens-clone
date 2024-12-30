import { MapPinIcon, ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Address } from "@/types/address";

import LocationModal from "@/features/LocationModal";

// Data
const categories = [
	{ id: 1, name: "ไอศกรีมซันเด", image: "/images/categories/sundae.jpg" },
	{ id: 2, name: "ไอศกรีมสกู๊ป", image: "/images/categories/scoop.jpg" },
	{ id: 3, name: "เครื่องดื่ม", image: "/images/categories/drinks.jpg" },
	{ id: 4, name: "ของหวาน", image: "/images/categories/desserts.jpg" },
];

const promotions = [
	{
		id: 1,
		title: "Super Save Set",
		description: "เซ็ตสุดคุ้ม ลด 20%",
		image: "/images/promotions/promo1.jpg",
	},
	{
		id: 2,
		title: "Birthday Special",
		description: "ฉลองวันเกิดรับส่วนลดพิเศษ",
		image: "/images/promotions/promo2.jpg",
	},
	{
		id: 3,
		title: "Member Day",
		description: "เฉพาะสมาชิก รับส่วนลดเพิ่ม 10%",
		image: "/images/promotions/promo3.jpg",
	},
];

export const Home = () => {
	const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
	const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);

	return (
		<div className="flex flex-col min-h-screen">
			{/* Delivery Location Section */}
			<section className="container m-auto max-w-[1200px] px-4 lg:px-20 py-4">
				<div className="bg-white border-b">
					<div className="mx-auto max-w-7xl px-4 py-3">
						<div className="flex items-center gap-4">
							<span className="flex text-nowrap font-medium font-kanit">
								ไปส่งที่:
							</span>
							<button
								className="flex items-center gap-2 p-4 rounded-lg bg-slate-100 text-black hover:bg-slate-200 flex-1"
								onClick={() => setIsLocationModalOpen(true)}
							>
								<MapPinIcon className="h-5 w-5" />
								<span className="font-medium font-kanit">
									{selectedAddress?.title || "เลือกที่อยู่สำหรับจัดส่ง"}
								</span>
								<ChevronDownIcon className="h-5 w-5 ml-auto" />
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* Location Modal */}
			<LocationModal
				isOpen={isLocationModalOpen}
				onClose={() => setIsLocationModalOpen(false)}
				onSelectLocation={(address) => {
					setSelectedAddress(address);
					// Update location display text if needed
				}}
			/>

			{/* Main Banner */}
			<section className="container mx-auto px-4 lg:px-20 py-6">
				<div className="relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden">
					<img
						src="/images/banner/main-banner.jpg"
						alt="Swensen's Banner"
						className="w-full h-full object-cover"
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-center">
						<div className="text-white p-8 lg:p-12">
							<h1 className="text-3xl lg:text-5xl font-bold mb-4 font-kanit">
								สเวนเซ่นส์ส่งถึงบ้าน
							</h1>
							<p className="text-lg lg:text-xl mb-6 font-kanit">
								เย็นฉ่ำ อร่อยถึงบ้านคุณ
							</p>
							<Button variant="default" size="lg" className="rounded-full">
								สั่งเลย
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Categories */}
			<section className="container mx-auto px-4 lg:px-20 py-8">
				<h2 className="text-2xl font-bold mb-6 font-kanit">เมนูยอดนิยม</h2>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{categories.map((category) => (
						<div
							key={category.id}
							className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
						>
							<img
								src={category.image}
								alt={category.name}
								className="w-full h-48 object-cover rounded-t-xl"
							/>
							<div className="p-4">
								<h3 className="font-kanit font-medium text-lg">
									{category.name}
								</h3>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Promotions */}
			<section className="container mx-auto px-4 lg:px-20 py-8">
				<h2 className="text-2xl font-bold mb-6 font-kanit">โปรโมชั่น</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{promotions.map((promo) => (
						<div
							key={promo.id}
							className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
						>
							<img
								src={promo.image}
								alt={promo.title}
								className="w-full h-48 object-cover rounded-t-xl"
							/>
							<div className="p-4">
								<h3 className="font-kanit font-medium text-lg">
									{promo.title}
								</h3>
								<p className="text-gray-600 mt-2">{promo.description}</p>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	);
};

export default Home;
