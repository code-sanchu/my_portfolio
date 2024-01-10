import type { Picture } from '^types';

// import raie_landing from '^^assets/images/raie.png?w=1024&format=avif;webp;jpg&as=picture&imagetools';
import raie_landing_main_pic from '^^assets/images/projects/raie.png?w=1024&format=avif;webp;jpg&as=picture&imagetools';
import amy_kevin_el_toro from '^^assets/images/projects/amy.webp?w=1024&format=avif;webp;jpg&as=picture&imagetools';
import piros_landing_main_pic from '^^assets/images/projects/piros.webp?w=1024&format=avif;webp;jpg&as=picture&imagetools';

import birch_cms_programmes from '^^assets/images/birch.png?w=1024&format=avif;webp;jpg&as=picture&imagetools';
import alesh_site from '^^assets/images/alesh.jpg?w=1024&format=avif;webp;jpg&as=picture&imagetools';
import asatic_cms from '^^assets/images/asatic.png?w=1024&format=avif;webp;jpg&as=picture&imagetools';
import murat from '^^assets/images/murat.jpg?w=1024&format=avif;webp;jpg&as=picture&imagetools';
import kindred_yoga from '^^assets/images/kindred_yoga.png?w=1024&format=avif;webp;jpg&as=picture&imagetools';
import blackheath_yoga from '^^assets/images/blackheath_yoga.png?w=1024&format=avif;webp;jpg&as=picture&imagetools';

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

	birch: {
		cms_programmes: birch_cms_programmes as Picture
	},
	alesh: {
		site: alesh_site as Picture
	},
	asatic: {
		cms: asatic_cms as Picture
	},
	murat: { site: murat as Picture },
	kindred_yoga: { site: kindred_yoga as Picture },
	blackheath_yoga: { site: blackheath_yoga as Picture }
};
