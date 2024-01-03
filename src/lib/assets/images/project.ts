import type { Picture } from '^types';

import raie_landing from '^^assets/images/raie.png?w=1024&format=avif;webp;jpg&as=picture&imagetools';
import birch_cms_programmes from '^^assets/images/birch.png?w=1024&format=avif;webp;jpg&as=picture&imagetools';
import alesh_site from '^^assets/images/alesh.jpg?w=1024&format=avif;webp;jpg&as=picture&imagetools';
import piros_cms from '^^assets/images/piros.png?w=1024&format=avif;webp;jpg&as=picture&imagetools';
import asatic_cms from '^^assets/images/asatic.png?w=1024&format=avif;webp;jpg&as=picture&imagetools';
import amy_cms from '^^assets/images/amy.png?w=1024&format=avif;webp;jpg&as=picture&imagetools';
import murat from '^^assets/images/murat.jpg?w=1024&format=avif;webp;jpg&as=picture&imagetools';
import kindred_yoga from '^^assets/images/kindred_yoga.png?w=1024&format=avif;webp;jpg&as=picture&imagetools';
import blackheath_yoga from '^^assets/images/blackheath_yoga.png?w=1024&format=avif;webp;jpg&as=picture&imagetools';

export const project = {
	raie: {
		landing: raie_landing as Picture
	},
	birch: {
		cms_programmes: birch_cms_programmes as Picture
	},
	alesh: {
		site: alesh_site as Picture
	},
	piros: {
		cms: piros_cms as Picture
	},
	asatic: {
		cms: asatic_cms as Picture
	},
	amy: {
		cms: amy_cms as Picture
	},
	murat: { site: murat as Picture },
	kindred_yoga: { site: kindred_yoga as Picture },
	blackheath_yoga: { site: blackheath_yoga as Picture }
};
