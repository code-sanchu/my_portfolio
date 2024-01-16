import type { Picture } from '^types';

import raie_landing_main_pic from '^^assets/images/projects/raie.png?w=1024&format=avif;webp;jpg&as=picture&imagetools';
import amy_kevin_el_toro from '^^assets/images/projects/amy.webp?w=1024&format=avif;webp;jpg&as=picture&imagetools';
import piros_landing_main_pic from '^^assets/images/projects/piros.webp?w=1024&format=avif;webp;jpg&as=picture&imagetools';
import alesh_painting from '^^assets/images/projects/alesh.jpg?w=1024&format=avif;webp;jpg&as=picture&imagetools';
import kindred_yoga_landing from '^^assets/images/projects/kindred.jpg?w=800&format=avif;webp;jpg&as=picture&imagetools';
import murat_landing from '^^assets/images/projects/murat.jpg?w=1024&format=avif;webp;jpg&as=picture&imagetools';
import birch_donate_page from '^^assets/images/projects/birch.jpg?w=1024&format=avif;webp;jpg&as=picture&imagetools';
import blackheath_yoga_landing from '^^assets/images/projects/blackheath.jpg?w=1024&format=avif;webp;jpg&as=picture&imagetools';
import asatic_landing from '^^assets/images/projects/asatic.jpg?w=1024&format=avif;webp;jpg&as=picture&imagetools';

export const project = {
	raie: {
		landing_main_pic: raie_landing_main_pic as Picture
	},
	piros: {
		landing_main_pic: piros_landing_main_pic as Picture,
	},
	amy: {
		kevin_el_toro: amy_kevin_el_toro as Picture,
	},
	kindred_yoga: { landing: kindred_yoga_landing as Picture },
	alesh: {
		painting: alesh_painting as Picture
	},

	birch: {
		donate_page: birch_donate_page as Picture
	},
	asatic: {
		landing: asatic_landing as Picture
	},
	murat: { landing: murat_landing as Picture },
	blackheath_yoga: { site: blackheath_yoga_landing as Picture }
};
