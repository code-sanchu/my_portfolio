import type { Picture } from './picture';

export type ProjectId =
	| 'raie'
	| 'birch'
	| 'alesh'
	| 'piros'
	| 'asatic'
	| 'amy'
	| 'murat'
	| 'kindred_yoga'
	| 'blackheath_yoga';

export type Project = {
	id: ProjectId;
	title: string;
	url: string;
	mainPicture: Picture;
	infoText: string;
	performanceUrl?: string;
	tech?: string[];
};
