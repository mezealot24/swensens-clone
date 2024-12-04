/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			container: {
				center: true,
				padding: {
					DEFAULT: "1rem",
					sm: "2rem",
					lg: "4rem",
					xl: "5rem",
				},
			},
			screens: {
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
			},
			colors: {
				// คุณสามารถกำหนดสีของแบรนด์ Swensen's ได้ที่นี่
				primary: {
					DEFAULT: "#E31837", // สีแดง Swensen's
				},
				secondary: {
					DEFAULT: "#FFD6DD", // สีชมพูอ่อน
				},
			},
		},
	},
	plugins: [],
};
