import React, { useState } from "react";

function NavigationBar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<nav className="bg-white shadow-md">
			<div className="container mx-auto px-4 py-2">
				{/* Desktop & Tablet Navigation */}
				<div className="hidden md:flex justify-between items-center">
					{/* Logo */}
					<div className="text-xl font-bold">
						<a href="/">Logo</a>
					</div>

					{/* Navigation Buttons */}
					<div className="flex items-center space-x-6">
						<button className="text-gray-700 hover:text-gray-900">Cart</button>
						<button className="text-gray-700 hover:text-gray-900">
							Login/Register
						</button>
						<button className="text-gray-700 hover:text-gray-900">TH/EN</button>
					</div>
				</div>

				{/* Mobile Navigation */}
				<div className="md:hidden flex justify-between items-center">
					{/* Logo */}
					<div className="text-xl font-bold">
						<a href="/">Logo</a>
					</div>

					{/* Hamburger Menu Button */}
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="text-gray-700 hover:text-gray-900"
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							{isMenuOpen ? (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							) : (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							)}
						</svg>
					</button>
				</div>

				{/* Mobile Menu */}
				{isMenuOpen && (
					<div className="md:hidden pt-4">
						<div className="flex flex-col space-y-4">
							<button className="text-gray-700 hover:text-gray-900 py-2">
								Cart
							</button>
							<button className="text-gray-700 hover:text-gray-900 py-2">
								Login/Register
							</button>
							<button className="text-gray-700 hover:text-gray-900 py-2">
								TH/EN
							</button>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}

export default NavigationBar;
