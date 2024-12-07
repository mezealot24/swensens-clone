/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "15px",
			screens: {
				"2xl": "1400px",
			},
		},
		screens: {
			sm: "640px",
			md: "768px",
			lg: "960px",
			xl: "1200px",
		},
		fontFamily: {
			primary: "var(--font-jetbrainsMono)",
		},
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "#E31837",
					light: "#FF4D6A",
					dark: "#C41430",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "#FFE8E8",
					foreground: "#E31837",
				},
				accent: {
					DEFAULT: "#FF9494",
					hover: "#FF7676",
					foreground: "#FFFFFF",
				},
				destructive: {
					DEFAULT: "#FF4D4D",
					foreground: "#FFFFFF",
				},
				muted: {
					DEFAULT: "#F8F8F8",
					foreground: "#666666",
				},
				popover: {
					DEFAULT: "#FFFFFF",
					foreground: "#1A1A1A",
				},
				card: {
					DEFAULT: "#FFFFFF",
					foreground: "#1A1A1A",
				},
				swensens: {
					red: "#E31837",
					pink: "#FF9494",
					cream: "#FFF5F5",
					brown: "#4A3F3F",
					gray: "#F2F2F2",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
