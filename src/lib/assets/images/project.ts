import type { Picture } from '^types';

import raie_landing from '^^assets/images/Screenshot 2023-11-27 at 14-08-31 Raie.png?w=1256&format=avif;webp;jpg&as=picture&imagetools';
import birch_landing from '^^assets/images/birch-landing.png?w=1128&format=avif;webp;jpg&as=picture&imagetools';
import birch_cms_programmes from '^^assets/images/birch-cms-programmes.png?w=1128&format=avif;webp;jpg&as=picture&imagetools';
import alesh_site from '^^assets/images/Screenshot 2023-11-28 at 16-51-12 Alesh Compton.png?w=1822&format=avif;webp;jpg&as=picture&imagetools';
import piros_cms from '^^assets/images/piros-cms.png?w=1822&format=avif;webp;jpg&as=picture&imagetools';
import asatic_cms from '^^assets/images/asatic-cms.png?w=1813&format=avif;webp;jpg&as=picture&imagetools';
import amy_cms from '^^assets/images/Screenshot 2023-11-28 at 17-26-12 Amy CMS.png?w=1822&format=avif;webp;jpg&as=picture&imagetools';

export const project = {
	raie: {
		landing: raie_landing as Picture
	},
	birch: {
		landing: birch_landing as Picture,
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
	}
};
