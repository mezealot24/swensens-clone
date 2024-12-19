import { MapPinIcon, ChevronDownIcon } from "lucide-react";

export const BodyContainer: React.FC = () => {
	return (
		<section className="container m-auto max-w-[1200px] px-20 h-full py-8">
			<div className="bg-white border-b">
				<div className="mx-auto max-w-7xl px-4 py-3">
					<div className="flex items-center gap-4">
						<span className="flex text-nowrap text-title-md-bold font-medium font-kanit">
							ไปส่งที่:
						</span>
						<button className="flex items-center gap-2 p-4 rounded-lg bg-slate-200 text-black hover:text-gray-900 flex-1">
							<MapPinIcon className="h-5 w-5 " />

							<span className="font-medium font-kanit">
								เลือกที่อยู่สำหรับจัดส่ง
							</span>

							<div className="ml-auto">
								<ChevronDownIcon className="h-5 w-5" />
							</div>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};
