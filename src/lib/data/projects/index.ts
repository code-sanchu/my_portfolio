import { image } from '^assets/images';
import type { Project, ProjectId } from '^types';

const raie: Project = {
	id: 'raie',
	title: 'Raie Music',
	siteUrl: 'https://www.raiemusic.com/',
	mainPicture: image.project.raie.landing_main_pic,
	descriptionLong: [
		"Raie is a singer/songwriter with years of experience in the music world. She's worked with industry heavyweights in the production of her 3 albums and recently launched a new one — Red Brick Angel.",
		'Raie wanted a website to showcase her music and document her journey through images, film and text.'
	],
	workDescription: 'Site design, build and maintenance.',
	year: '2023',
	performanceUrl:
		'https://pagespeed.web.dev/analysis/https-www-raiemusic-com/uvai5c049i?form_factor=mobile',
	features: ['music-player', 'image-gallery', 'youtube']
};

const birch: Project = {
	id: 'birch',
	title: 'Birch Collective',
	siteUrl: 'https://www.thebirchcollective.co.uk/',
	mainPicture: image.project.birch.donate_page,
	descriptionLong: [
		'The Birch Collective is an innovative social enterprise aiming to tackle loneliness and mental health issues in young people by connecting them to nature.',
		"The site is a showcase of the charity and its programmes. It's editable via a highly customisable and easy to use custom cms."
	],
	workDescription: 'Site and cms design, build and maintenance.',
	year: '2021 &#8212; 2023',
	features: ['custom-cms', 'donation', 'image-gallery', 'sign-up-form', 'google-spreadsheet'],
	performanceUrl: null
};

const alesh: Project = {
	id: 'alesh',
	title: 'Alesh Compton',
	siteUrl: 'https://aleshcompton.com/',
	mainPicture: image.project.alesh.painting,
	descriptionLong: [
		'Alesh Compton is a creative, multi-disciplinary artist.',
		'The site has a shop for his uniquely created clothes and a portfolio of his multi-disciplinary art.'
	],
	workDescription: 'Site design, build and maintenance.',
	year: '2022&ndash;2023',
	performanceUrl:
		'https://pagespeed.web.dev/analysis/https-aleshcompton-com-squatumentary/zuf3i9gg4c?form_factor=mobile',
	features: ['shop', 'image-gallery', 'youtube']
};

const piros: Project = {
	id: 'piros',
	title: 'Piros Photography',
	siteUrl: 'https://www.piros.photography/',
	mainPicture: image.project.piros.landing_main_pic,
	descriptionLong: [
		'Piroska Markus is a budding amateur photographer.',
		'The site consists of photographic essays on parts of the world and a variety of other topics. It also has a user and comment system, along with a custom cms for Piroska to edit the site.'
	],
	workDescription: 'Site and cms design, build and maintenance.',
	year: '2022&ndash;2023',
	features: ['custom-cms', 'comment-system', 'image-gallery', 'youtube'],
	performanceUrl: null
};

const asatic: Project = {
	id: 'asatic',
	title: 'Asatic',
	siteUrl: 'https://www.asatic.org/',
	mainPicture: image.project.asatic.landing,
	descriptionLong: [
		"Asatic is a journal run by parts of the English Sri Lankan diaspora. It's global in scope but focuses on Sri Lankan issues.",
		'The site presents news and video articles. The cms has been built to allow for considerable customisation of the layout, articles and collections.'
	],
	workDescription: 'Site and cms design, build and maintenance.',
	year: '2022 - 2023',
	features: ['custom-cms', 'text-editor', 'multi-language', 'youtube'],
	performanceUrl: null
};

const amy: Project = {
	id: 'amy',
	title: 'Amy Jewellery',
	siteUrl: 'https://www.amyrodriguez.art/portfolio/1',
	mainPicture: image.project.amy.kevin_el_toro,
	descriptionLong: [
		'Amy Rodriguez is an unorthodox jewellery artist specialising in metals.',
		'Her work is presented on this site via a custom cms, which is also integrated with a shop.'
	],
	workDescription: 'Site and cms design, build and maintenance.',
	year: '2020 - 2023',
	features: ['custom-cms', 'shop', 'image-gallery'],
	performanceUrl: null
};

const murat: Project = {
	id: 'murat',
	title: 'Murat Gökmen',
	siteUrl: 'https://www.muratgokmen.com/',
	mainPicture: image.project.murat.landing,
	descriptionLong: [
		'Murat wanted his Squarespace site to be a design not included in the provided layouts.',
		'As well as the coding work done, I provided instructions for him to easily update the site himself.'
	],
	workDescription: 'Squarespace updates &#8212; styling and scripting.',
	year: '2021',
	features: null,
	performanceUrl: null
};

const kindred_yoga: Project = {
	id: 'kindred_yoga',
	title: 'Kindred Yoga',
	siteUrl: 'https://www.kindredyogalife.com/',
	mainPicture: image.project.kindred_yoga.landing,
	descriptionLong: [
		'Kindred Yoga is a successful yoga studio.',
		'My role consists of updating the site when aspects such as teachers and classes change, as well as quality control of the styling across devices.'
	],
	workDescription: 'Squarespace updates &#8212; styling and scripting.',
	year: '2021 - 2023',
	features: null,
	performanceUrl: null
};

const blackheath_yoga: Project = {
	id: 'blackheath_yoga',
	title: 'Blackheath Yoga',
	siteUrl: 'https://www.blackheathyoga.co.uk/',
	mainPicture: image.project.blackheath_yoga.site,
	descriptionLong: [
		'Blackheath yoga is a successful yoga studio in South London.',
		'Work included: integrating a payment and booking platform; creating re-usable pop-ups for promotions.'
	],
	workDescription: 'Wix updates &#8212; styling and scripting.',
	year: '2023',
	features: null,
	performanceUrl: null
};

export const projects: { [k in ProjectId]: Project } = {
	raie,
	alesh,
	amy,
	murat,
	birch,
	piros,
	asatic,
	kindred_yoga,
	blackheath_yoga
};
