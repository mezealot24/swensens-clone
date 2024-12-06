import NavigationBar from "./NavigationBar";

function Header() {
	return (
		<header className="container mx-auto px-16 py-8 sticky top-0 z-20 hidden h-[80px] w-full gap-8 bg-background-white [box-shadow:0_2px_15px_rgba(0,0,0,.05)] lg:flex">
			<div className=" flex justify-between items-center">
				{/* desktop nav */}
				<div className="hidden xl:flex items-center gap-8">
					<NavigationBar />
				</div>

				{/* Mobile nav */}
				<div className="xl:hidden">MobileNav</div>
			</div>
		</header>
	);
}

export default Header;
