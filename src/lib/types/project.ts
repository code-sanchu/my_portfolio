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

export type Feature =
	| 'music-player'
	| 'image-gallery'
	| 'custom-cms'
	| 'youtube'
	| 'comment-system'
	| 'donation'
	| 'shop'
	| 'sign-up-form'
	| 'text-editor'
	| 'google-spreadsheet'
	| 'multi-language';

export type Project = {
	id: ProjectId;
	title: string;
	siteUrl: string;
	mainPicture: Picture;
	descriptionLong: string;
	descriptionShort: string;
	year: string;
	performanceUrl: string | null;
	features: Feature[] | null;
};
