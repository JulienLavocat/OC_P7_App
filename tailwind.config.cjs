/** @type {import('tailwindcss').Config} */
module.exports = {
	plugins: [require("daisyui")],
	content: ["./src/**/*.{ts,tsx}"],
	daisyui: {
		themes: ["cupcake"],
	},
};
