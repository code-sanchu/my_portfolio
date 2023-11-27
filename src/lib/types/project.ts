import type { Picture } from './picture';

export type ProjectId = 'raie' | 'birch';

export type Project = {
	id: ProjectId;
	title: string;
	url: string;
	mainPicture: Picture;
	infoText: string;
};
