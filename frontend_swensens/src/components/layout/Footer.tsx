import {
	FaFacebookF,
	FaInstagram,
	FaAppStoreIos,
	FaGooglePlay,
	FaLine,
} from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="bg-background-orange-500 text-footer-text py-8 px-4 sm:px-8 lg:px-16">
			<div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
				<div className="flex flex-col items-start">
					<h3 className="text-title-lg-bold mb-4">About Us</h3>
					<a href="/th/about-us" className="hover:text-footer-link-hover">
						About Swensens
					</a>
					<a href="/th/our-product" className="hover:text-footer-link-hover">
						Our Product
					</a>
					<a
						href="/th/terms-and-conditions"
						className="hover:text-footer-link-hover"
					>
						Terms and Conditions
					</a>
					<a href="/th/privacy-policy" className="hover:text-footer-link-hover">
						Privacy Policy
					</a>
				</div>
				<div className="flex flex-col items-start">
					<h3 className="text-title-lg-bold mb-4">Connect with Us</h3>
					<div className="flex space-x-4">
						<a
							href="https://www.facebook.com/SwensensThailand"
							target="_blank"
							rel="noopener noreferrer"
							className="text-footer-link-hover"
						>
							<FaFacebookF className="h-6 w-6" />
						</a>
						<a
							href="https://www.instagram.com/swensensth/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-footer-link-hover"
						>
							<FaInstagram className="h-6 w-6" />
						</a>
						<a
							href="https://lin.ee/5FeH0ys"
							target="_blank"
							rel="noopener noreferrer"
							className="text-footer-link-hover"
						>
							<FaLine className="h-6 w-6" />
						</a>
					</div>
				</div>
				<div className="flex flex-col items-start">
					<h3 className="text-title-lg-bold mb-4">Download App</h3>
					<a
						href="https://apps.apple.com/th/app/swensens/id943095176"
						target="_blank"
						rel="noopener noreferrer"
						className="mb-2"
					>
						<FaAppStoreIos className="h-8 w-8 inline-block mr-2" />
						App Store
					</a>
					<a
						href="https://play.google.com/store/apps/details?id=com.thaistarcorp.swensens"
						target="_blank"
						rel="noopener noreferrer"
						className="mb-2"
					>
						<FaGooglePlay className="h-8 w-8 inline-block mr-2" />
						Google Play
					</a>
				</div>
				<div className="flex flex-col items-start">
					<h3 className="text-title-lg-bold mb-4">Get in Touch</h3>
					<p>Swensens Head Office</p>
					<p>52/1 Moo 8 Bangna-Trad Rd. Km.7</p>
					<p>Bangkaew, Bangplee, Samutprakarn 10540</p>
					<p>Thailand</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
