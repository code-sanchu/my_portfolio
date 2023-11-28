// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createPlugin } = require('windy-radix-palette');

const colors = createPlugin();

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Helvetica', 'sans-serif']
			},

			colors: {
				'my-light-blue': 'rgb(68,194,255)'
				/* 				gray: {
					DEFAULT: '#202020',
					50: '#CBCBCB',
					100: '#C1C1C1',
					200: '#ACACAC',
					300: '#989898',
					400: '#848484',
					500: '#6F6F6F',
					600: '#5B5B5B',
					700: '#464646',
					800: '#646464',
					900: '#202020'
				} */
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
	plugins: [require('tailwind-scrollbar'), colors.plugin]
};
