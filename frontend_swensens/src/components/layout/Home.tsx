import { FiDownload } from "react-icons/fi";

//components

export const Home = () => {
	return (
		<section className="relative h-auto">
			<div className="h-max w-full md:min-h-[calc(100vh-110px-88px)]">
				<div className="container m-auto max-w-[1200px] px-24 inner-container h-full">
					<div className="flex h-fit scroll-mt-[120px] flex-col items-start gap-16 md:h-[56px] md:flex-row md:items-center md:gap-24">
						<div className="flex flex-col items-start gap-16">
							<h1 className="text-title-lg-bold">ไปส่งที่:</h1>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
