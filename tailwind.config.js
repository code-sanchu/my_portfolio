/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				// sans: ['Helvetica', 'sans-serif']
			},

			colors: {
				'my-light-blue': 'rgb(68,194,255)'
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
				'1.5lg': '1.1875rem',
				'1.5xl': '1.375rem'
			}
		}
	},
	plugins: [require('tailwind-scrollbar')]
};
