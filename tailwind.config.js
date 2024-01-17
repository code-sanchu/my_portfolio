// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createPlugin } = require('windy-radix-palette');

const colors = createPlugin();

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Helvetica', 'sans-serif'],
			},

			colors: {
				'my-green-1': 'rgb(9.8, 59.2, 40.8)',
				'my-lime-1': '#bcbe39',
				'my-blue-1': '#2980c2',
				'my-blue-2': '#4da6d0',
				'my-blue-light-1': '#8ddae3',
				'my-orange-1': '#f3c681',
				'my-orange-red-1': '#fa937f',
				'my-purple-1': '#a49ccc',
				'my-purple-light-1': '#d8b3c5',
				'my-yellow-1': '#e8d489',
				'my-brown-1': '#9d776b',
				'my-cyan-1': '#39c3c5',
				'my-red-dark-1': '#f47a88',
			},

			screens: {
				xxs: '360px',
				xs: '410px',
				'xs/sm': '525px',
				sm: '640px',
				'sm/md': '704px',
				md: '768px',
				'md/lg': '896px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1536px',
				'3xl': '1800px'
			},

			spacing: {
				xxxs: '.1rem',
				xxs: '.25rem',
				xs: '.5rem',
				sm: '1rem',
				md: '1.5rem',
				lg: '2rem',
				xl: '3rem',
				'1.5xl': '4.5rem',
				'2xl': '6rem',
				'2.5xl': '7.5rem',
				'3xl': '9rem'
			},

			fontSize: {
				xxs: '0.6rem',
				'1.5lg': '1.1875rem',
				'1.5xl': '1.375rem'
			}
		}
	},
	plugins: [require('tailwind-scrollbar'), require('tailwind-scrollbar-hide'), colors.plugin]
};
