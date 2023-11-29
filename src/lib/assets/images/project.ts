import type { Picture } from '^types';

import raie_landing from '^^assets/images/raie.jpg?w=1024&format=avif;webp;jpg&as=picture&imagetools';
import birch_cms_programmes from '^^assets/images/birch-cms-programmes.jpg?w=1024&format=avif;webp;jpg&as=picture&imagetools';
import alesh_site from '^^assets/images/Alesh Compton.jpg?w=1024&format=avif;webp;jpg&as=picture&imagetools';
import piros_cms from '^^assets/images/piros-cms.jpg?w=1024&format=avif;webp;jpg&as=picture&imagetools';
import asatic_cms from '^^assets/images/asatic-cms.jpg?w=1024&format=avif;webp;jpg&as=picture&imagetools';
import amy_cms from '^^assets/images/Amy CMS.jpg?w=1024&format=avif;webp;jpg&as=picture&imagetools';
import murat from '^^assets/images/MURAT GÖKMEN.jpg?w=1024&format=avif;webp;jpg&as=picture&imagetools';
import kindred_yoga from '^^assets/images/Kindred Yoga.jpg?w=1024&format=avif;webp;jpg&as=picture&imagetools';
import blackheath_yoga from '^^assets/images/Blackheath Yoga.jpg?w=1024&format=avif;webp;jpg&as=picture&imagetools';

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
