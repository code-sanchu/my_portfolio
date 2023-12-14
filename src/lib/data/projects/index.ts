import { image } from '^assets/images';
import type { Project, ProjectId } from '^types';

const raie: Project = {
	id: 'raie',
	title: 'Raie Music',
	siteUrl: 'https://www.raiemusic.com/',
	mainPicture: image.project.raie.landing,
	descriptionLong: [
		"Raie is an up and coming singer/songwriter with years of experience in the music world. She's worked with industry heavyweights in the production of her 3 albums and recently launched a new one — Red Brick Angel.",
		'Raie wanted a website to showcase her music and document her journey through images, film and text.'
	],
	descriptionShort: 'website &#8212; design and build',
	year: '2023',
	performanceUrl:
		'https://pagespeed.web.dev/analysis/https-www-raiemusic-com/uvai5c049i?form_factor=mobile',
	features: ['music-player', 'image-gallery', 'youtube']
};

const birch: Project = {
	id: 'birch',
	title: 'Birch Collective',
	siteUrl: 'https://www.thebirchcollective.co.uk/',
	mainPicture: image.project.birch.cms_programmes,
	descriptionLong: [
		'The Birch Collective is a Bristol based charity that connects vulnerable young people to nature.',
		'The brief was to create a site that appealed young people whilst also projecting professionalism.'
	],
	descriptionShort: 'website and cms &#8212; design and build',
	year: '2021 &#8212; 2023',
	features: ['custom-cms', 'donation', 'image-gallery', 'sign-up-form', 'google-spreadsheet'],
	performanceUrl: null
};

const alesh: Project = {
	id: 'alesh',
	title: 'Alesh Compton',
	siteUrl: 'https://aleshcompton.com/',
	mainPicture: image.project.alesh.site,
	descriptionLong: [],
	descriptionShort: 'website with shop &#8212; design and build',
	year: '2022&ndash;2023',
	performanceUrl:
		'https://pagespeed.web.dev/analysis/https-aleshcompton-com-squatumentary/zuf3i9gg4c?form_factor=mobile',
	features: ['shop', 'image-gallery', 'youtube']
};

const piros: Project = {
	id: 'piros',
	title: 'Piros Photography',
	siteUrl: 'https://www.piros.photography/',
	mainPicture: image.project.piros.cms,
	descriptionLong: [],
	descriptionShort: 'website and cms &#8212; design and build',
	year: '2022 - 2023',
	features: ['custom-cms', 'comment-system', 'image-gallery', 'youtube'],
	performanceUrl: null
};

const asatic: Project = {
	id: 'asatic',
	title: 'Asatic',
	siteUrl: 'https://www.asatic.org/',
	mainPicture: image.project.asatic.cms,
	descriptionLong: [],
	descriptionShort: 'website and cms &#8212; design and build',
	year: '2022 - 2023',
	features: ['custom-cms', 'text-editor', 'multi-language', 'youtube'],
	performanceUrl: null
};

const amy: Project = {
	id: 'amy',
	title: 'Amy Jewellery',
	siteUrl: 'https://www.amyrodriguez.art/portfolio/1',
	mainPicture: image.project.amy.cms,
	descriptionLong: [],
	descriptionShort: 'website and cms, with shop &#8212; design and build',
	year: '2020 - 2023',
	features: ['custom-cms', 'shop', 'image-gallery'],
	performanceUrl: null
};

const murat: Project = {
	id: 'murat',
	title: 'Murat Gökmen',
	siteUrl: 'https://www.muratgokmen.com/',
	mainPicture: image.project.murat.site,
	descriptionLong: [],
	descriptionShort: 'squarespace updates &#8212; styling and scripting',
	year: '2021',
	features: null,
	performanceUrl: null
};

const kindred_yoga: Project = {
	id: 'kindred_yoga',
	title: 'Kindred Yoga',
	siteUrl: 'https://www.kindredyogalife.com/',
	mainPicture: image.project.kindred_yoga.site,
	descriptionLong: [],
	descriptionShort: 'squarespace updates &#8212; styling and scripting',
	year: '2021 - 2023',
	features: null,
	performanceUrl: null
};

const blackheath_yoga: Project = {
	id: 'blackheath_yoga',
	title: 'Blackheath Yoga',
	siteUrl: 'https://www.blackheathyoga.co.uk/',
	mainPicture: image.project.blackheath_yoga.site,
	descriptionLong: [],
	descriptionShort: 'wix updates &#8212; styling and scripting',
	year: '2023',
	features: null,
	performanceUrl: null
};

export const projects: { [k in ProjectId]: Project } = {
	raie,
	alesh,
	birch,
	amy,
	piros,
	asatic,
	murat,
	kindred_yoga,
	blackheath_yoga
};
