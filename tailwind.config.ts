import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/**/*.{html,ts}"],
	theme: {
		extend: {}
	},
	plugins: [require("@tailwindcss/forms")]
};

export default config;
