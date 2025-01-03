import * as React from "react";
import { Button } from "@/components/ui/button";
import {
	ChevronLeft,
	ChevronRight,
	Heart,
	IceCream,
	Sparkles,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const banners = [
	{
		id: 1,
		type: "image",
		image: "/images/banners/banner01.jpeg",
	},
	{
		id: 2,
		type: "image",
		image: "/images/banners/banner2.jpg",
	},
	{
		id: 3,
		type: "styled",
	},
];

export function Carousel() {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
		Autoplay({ delay: 5000 }),
	]);

	const [selectedIndex, setSelectedIndex] = React.useState(0);

	const scrollPrev = React.useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = React.useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	React.useEffect(() => {
		if (!emblaApi) return;

		emblaApi.on("select", () => {
			setSelectedIndex(emblaApi.selectedScrollSnap());
		});
	}, [emblaApi]);

	const renderSlide = (banner: (typeof banners)[0], index: number) => {
		if (banner.type === "image") {
			return (
				<div className="relative w-full aspect-[3/1] sm:aspect-[4/1]">
					<img
						src={banner.image}
						alt={`Banner ${banner.id}`}
						className="w-full h-full object-cover rounded-md 2xl:rounded-2xl"
					/>
				</div>
			);
		}

		return (
			<div className="relative w-full aspect-[3/1] sm:aspect-[4/1]">
				<div className="absolute inset-0 bg-pink-100 rounded-md 2xl:rounded-2xl">
					{/* Background Pattern */}
					<div className="absolute inset-0 opacity-10">
						{[...Array(20)].map((_, i) => (
							<motion.div
								key={i}
								className="absolute"
								style={{
									left: `${Math.random() * 100}%`,
									top: `${Math.random() * 100}%`,
								}}
								animate={{
									scale: [1, 1.2, 1],
									rotate: [0, 360],
								}}
								transition={{
									duration: 3,
									repeat: Infinity,
									delay: i * 0.1,
								}}
							>
								<Sparkles className="text-pink-400 w-4 h-4" />
							</motion.div>
						))}
					</div>

					{/* Main Content */}
					<div className="absolute inset-0 flex items-center">
						<div className="w-full px-8 lg:px-16">
							<div className="max-w-2xl">
								<motion.div
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.3 }}
								>
									<h1 className="text-3xl lg:text-5xl font-bold mb-4 font-kanit text-pink-600">
										สเวนเซ่นส์ส่งถึงบ้าน
									</h1>
								</motion.div>

								<motion.p
									className="text-lg lg:text-xl mb-6 font-kanit text-pink-500"
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.5 }}
								>
									เย็นฉ่ำ อร่อยถึงบ้านคุณ
								</motion.p>

								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.7 }}
								>
									<Button
										variant="default"
										size="lg"
										className="rounded-full bg-pink-500 hover:bg-pink-600 font-kanit"
									>
										<span>สั่งเลย</span>
										<Heart className="ml-2 w-4 h-4" />
									</Button>
								</motion.div>
							</div>
						</div>

						{/* Decorative Elements */}
						<motion.div
							className="absolute right-12 top-1/2 transform -translate-y-1/2"
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: 0.9 }}
						>
							<div className="relative">
								<IceCream className="w-32 h-32 text-pink-400" />
								<motion.div
									className="absolute -top-4 -left-4"
									animate={{
										y: [0, -10, 0],
									}}
									transition={{
										duration: 2,
										repeat: Infinity,
									}}
								>
									<Sparkles className="w-8 h-8 text-yellow-400" />
								</motion.div>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div>
			<div className="relative">
				<div ref={emblaRef} className="overflow-hidden rounded-lg">
					<div className="flex">
						{banners.map((banner, index) => (
							<motion.div
								key={banner.id}
								className="relative flex-[0_0_100%]"
								initial={{ opacity: 0 }}
								animate={{ opacity: selectedIndex === index ? 1 : 0 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.5 }}
							>
								{renderSlide(banner, index)}
							</motion.div>
						))}
					</div>
				</div>

				<Button
					variant="outline"
					size="icon"
					className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
					onClick={scrollPrev}
				>
					<ChevronLeft className="h-4 w-4" />
				</Button>

				<Button
					variant="outline"
					size="icon"
					className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
					onClick={scrollNext}
				>
					<ChevronRight className="h-4 w-4" />
				</Button>
			</div>

			<div className="flex justify-center gap-2 mt-4">
				{banners.map((_, index) => (
					<button
						key={index}
						className={`h-2 w-2 rounded-full transition-colors ${
							selectedIndex === index ? "bg-primary" : "bg-accent"
						}`}
						onClick={() => emblaApi?.scrollTo(index)}
					/>
				))}
			</div>
		</div>
	);
}
