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
				mono: ['Skyhook', 'monospace'],
				mono2: ['KlartextMono', 'monospace'],
				mono3: ['Telegrama', 'monospace'],
				'3d': ['Foldstruct', 'sans-serif'],
				'3d2': ['STF', 'sans-serif'],
			},

			colors: {
				'my-olive': 'rgb(128,128,0)',
				'my-light-blue': 'rgb(100, 149, 237)',
				'my-dark-red': 'rgb(139, 0, 0)',
				'my-sea-green': 'rgb(46, 139, 87)',
				'my-dark-olive': 'rgb(85, 107, 47)',
				'my-orange': 'rgb(255, 165, 0)',
				'my-dark-slate-gray': 'rgb(47, 79, 79)',
				'my-plum': 'rgb(221, 160, 221)',
				'my-steel-blue': 'rgb(70, 130, 180)',
				'my-royal-blue': 'rgb(65, 105, 225)',
				'my-golden-rod': 'rgb(218, 165, 32)',
				'my-navy-blue': 'rgb(0, 0, 128)',
				'my-red-fire': 'rgb(178, 34, 34)',
				'my-forest-green': 'rgb(34, 139, 34)',
				'my-tomato': 'rgb(255, 99, 71)',
				'my-rosy-brown': 'rgb(188, 143, 143)',
				'my-black': 'rgb(26, 26, 26)',
				'my-light-gray': '#aeaeae'
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
