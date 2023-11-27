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
	url: 'https://www.raiemusic.com/',
	mainPicture: image.project.raie.landing,
	infoText: 'Designed and built in 2023 for The Birch Collective. '
};

export const projects: { [k in ProjectId]: Project } = {
	raie,
	birch
};
