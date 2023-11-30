import { image } from '^assets/images';
import type { Project, ProjectId } from '^types';

const raie: Project = {
	id: 'raie',
	title: 'Raie Music',
	siteUrl: 'https://www.raiemusic.com/',
	mainPicture: image.project.raie.landing,
	infoText: 'Designed and built in 2023. For Raie - a musician.',
	performanceUrl:
		'https://pagespeed.web.dev/analysis/https-www-raiemusic-com/uvai5c049i?form_factor=mobile',
	features: ['music-player', 'image-gallery']
};

const birch: Project = {
	id: 'birch',
	title: 'Birch Collective',
	siteUrl: 'https://www.thebirchcollective.co.uk/',
	mainPicture: image.project.birch.cms_programmes,
	infoText:
		'Site and custom CMS; design and build. 2022 - 2023. The Birch Collective is a Bristol based charity.',
	features: ['custom-cms', 'donation', 'image-gallery', 'sign-up-form'],
	performanceUrl: null
};

const alesh: Project = {
	id: 'alesh',
	title: 'Alesh Compton',
	siteUrl: 'https://aleshcompton.com/',
	mainPicture: image.project.alesh.site,
	infoText:
		'Shop and portfolio built 2022 - 2023. For Alesh Compton - an artist and clothes maker.',
	performanceUrl:
		'https://pagespeed.web.dev/analysis/https-aleshcompton-com-squatumentary/zuf3i9gg4c?form_factor=mobile',
	features: ['shop', 'image-gallery', 'youtube']
};

const piros: Project = {
	id: 'piros',
	title: 'Piros Photography',
	siteUrl: 'https://www.piros.photography/',
	mainPicture: image.project.piros.cms,
	infoText: 'Site and custom CMS; design and build 2023. For Piroska Markus - a photographer.',
	features: ['custom-cms', 'comment-system', 'image-gallery', 'youtube'],
	performanceUrl: null
};

const asatic: Project = {
	id: 'asatic',
	title: 'Asatic',
	siteUrl: 'https://www.asatic.org/',
	mainPicture: image.project.asatic.cms,
	infoText:
		'Site and custom CMS designed and built in 2022. The site is a news forum focusing on Sri Lankan politics.',
	features: ['custom-cms', 'text-editor', 'multi-language', 'youtube'],
	performanceUrl: null
};

const amy: Project = {
	id: 'amy',
	title: 'Amy Jewellery',
	siteUrl: 'https://www.amyrodriguez.art/portfolio/1',
	mainPicture: image.project.amy.cms,
	infoText:
		'Site and custom CMS designed and built in 2021. The site is a portfolio and shop for Amy Rodriguez - a jewellery maker specialising in metals.',
	features: ['custom-cms', 'shop', 'image-gallery'],
	performanceUrl: null
};

const murat: Project = {
	id: 'murat',
	title: 'Murat Gökmen',
	siteUrl: 'https://www.muratgokmen.com/',
	mainPicture: image.project.murat.site,
	infoText: 'Custom css and js work done on this Squarespace site.',
	features: null,
	performanceUrl: null
};

const kindred_yoga: Project = {
	id: 'kindred_yoga',
	title: 'Kindred Yoga',
	siteUrl: 'https://www.kindredyogalife.com/',
	mainPicture: image.project.kindred_yoga.site,
	infoText: 'Custom css and js work done on this Squarespace site.',
	features: null,
	performanceUrl: null
};

const blackheath_yoga: Project = {
	id: 'blackheath_yoga',
	title: 'Blackheath Yoga',
	siteUrl: 'https://www.blackheathyoga.co.uk/',
	mainPicture: image.project.blackheath_yoga.site,
	infoText: 'Custom css and js work done on this Wix site.',
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
