/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				background: 'hsl(211, 100%, 6%)',
				custom: {
					DEFAULT: 'hsl(180, 100%, 90%)',
				},
				primary: {
					DEFAULT: 'hsl(200, 100%, 28%)',
					hover: 'hsl(200, 100%, 26%)'
				},
				foreground: 'hsl(198,70%,50%)'
			},
		},
	},
	plugins: [],
}
