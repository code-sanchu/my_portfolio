import { image } from '^assets/images';
import type { Project, ProjectId } from '^types';

const raie: Project = {
	id: 'raie',
	title: 'Raie Music',
	url: 'https://www.raiemusic.com/',
	mainPicture: image.project.raie.landing,
	infoText:
		'Designed and built in 2023 for Raie Music. Designed asthetically to suit the musicality of Raie and functionally to have an easy to use in-site music player...'
};

const birch: Project = {
	id: 'birch',
	title: 'The Birch Collective',
	url: 'https://www.thebirchcollective.co.uk/',
	mainPicture: image.project.birch.cms_programmes,
	infoText:
		'Site and custom CMS designed, built and developed; beginning in 2022 with work done in 2023.'
};

const alesh: Project = {
	id: 'alesh',
	title: 'Alesh Compton',
	url: 'https://aleshcompton.com/',
	mainPicture: image.project.alesh.site,
	infoText: 'Shop and portfolio built in 2023.'
};

const piros: Project = {
	id: 'piros',
	title: 'Piros Photography',
	url: 'https://www.piros.photography/',
	mainPicture: image.project.piros.cms,
	infoText: 'Site and custom CMS designed, built and developed; beginning in 2023.'
};

const asatic: Project = {
	id: 'asatic',
	title: 'Asatic',
	url: 'https://www.asatic.org/',
	mainPicture: image.project.asatic.cms,
	infoText: 'Site and custom CMS designed, built and developed in 2022.'
};

const amy: Project = {
	id: 'amy',
	title: 'Amy Jewellery',
	url: 'https://www.amyrodriguez.art/portfolio/1',
	mainPicture: image.project.amy.cms,
	infoText: 'Site and custom CMS designed, built and developed in 2021.'
};

const murat: Project = {
	id: 'murat',
	title: 'Murat Gökmen',
	url: 'https://www.muratgokmen.com/',
	mainPicture: image.project.murat.site,
	infoText: 'Custom css and js work done on this Squarespace site.'
};

const kindred_yoga: Project = {
	id: 'kindred_yoga',
	title: 'Kindred Yoga',
	url: 'https://www.kindredyogalife.com/',
	mainPicture: image.project.kindred_yoga.site,
	infoText: 'Custom css and js work done on this Squarespace site.'
};

const blackheath_yoga: Project = {
	id: 'blackheath_yoga',
	title: 'Blackheath Yoga',
	url: 'https://www.blackheathyoga.co.uk/',
	mainPicture: image.project.blackheath_yoga.site,
	infoText: 'Custom css and js work done on this Wix site.'
};

export const projects: { [k in ProjectId]: Project } = {
	raie,
	birch,
	amy,
	alesh,
	piros,
	asatic,
	murat,
	kindred_yoga,
	blackheath_yoga
};
