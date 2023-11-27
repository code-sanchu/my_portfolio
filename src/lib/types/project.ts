import type { Picture } from './picture';

export type ProjectId = 'raie';

export type Project = {
	id: ProjectId;
	title: string;
	url: string;
	mainPicture: Picture;
	infoText: string;
};
