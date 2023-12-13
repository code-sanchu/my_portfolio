import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),

		alias: {
			'^^assets/*': 'src/assets/*',

			'^assets/*': 'src/lib/assets/*',
			'^types': 'src/lib/types',
			'^data': 'src/lib/data',
			'^components': 'src/lib/components',
			'^actions': 'src/lib/actions',
			'^helpers': 'src/lib/helpers',
			'^stores': 'src/lib/stores',
			'^sections/*': 'src/lib/components/sections/*',
			'^pages/*': 'src/lib/components/+pages/*'
		}
	}
};

export default config;
