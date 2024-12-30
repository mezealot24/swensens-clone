import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { MapIcon } from "lucide-react";
import { useState } from "react";
import { Address } from "@/types/address";

interface LocationModalProps {
	isOpen: boolean;
	onClose: () => void;
	onSelectLocation?: (location: Address) => void;
}

const LocationModal = ({
	isOpen,
	onClose,
	onSelectLocation,
}: LocationModalProps) => {
	const [addresses] = useState<Address[]>([]);

	const handleMapSelect = () => {
		console.log("Map selection clicked");
	};

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className="mx-auto rounded-[10px] bg-white p-6 md:p-10 h-fit overflow-hidden max-h-[90vh] max-w-[calc(100vw-20px)] sm:max-w-[428px] md:max-w-[624px]">
				<DialogHeader className="mb-4">
					<DialogTitle className="text-xl font-kanit">
						เลือกที่อยู่สำหรับจัดส่ง
					</DialogTitle>
				</DialogHeader>

				<div className="flex flex-col space-y-4">
					{/* Location Header Row */}
					<div className="flex items-center justify-between">
						<div className="text-sm font-kanit text-gray-700">
							ที่อยู่ที่บันทึกไว้
						</div>
						<button
							onClick={handleMapSelect}
							className="inline-flex items-center gap-2 rounded px-3 py-2 text-sm font-kanit text-blue-600 hover:bg-blue-50"
						>
							<MapIcon className="h-4 w-4" />
							เลือกจากแผนที่
						</button>
					</div>

					{/* Empty State */}
					{addresses.length === 0 && (
						<div className="flex flex-col items-center justify-center space-y-4 py-8">
							<div className="relative h-24 w-24">
								{/* Placeholder for location icon - replace with your SVG/image */}
								<div className="absolute inset-0 flex items-center justify-center rounded-full bg-gray-100">
									<MapIcon className="h-12 w-12 text-gray-400" />
								</div>
							</div>
							<p className="text-sm font-kanit text-gray-500">
								ไม่มีที่อยู่ที่บันทึกไว้
							</p>
						</div>
					)}

					{/* Address List - shown when addresses exist */}
					{addresses.length > 0 && (
						<div className="space-y-2">
							{addresses.map((address) => (
								<button
									key={address.id}
									onClick={() => onSelectLocation?.(address)}
									className="w-full flex items-start p-4 text-left border rounded-lg hover:bg-slate-50"
								>
									<div className="flex flex-col">
										<span className="font-medium font-kanit">
											{address.title}
										</span>
										<span className="text-sm text-gray-500 font-kanit">
											{address.details}
										</span>
									</div>
								</button>
							))}
						</div>
					)}
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default LocationModal;
