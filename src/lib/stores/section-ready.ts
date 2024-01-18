import { writable } from 'svelte/store';

type SectionReadyValues = {
	artImage: boolean
	projects: boolean
	logo: boolean
	main: boolean
};

const initData: SectionReadyValues = {
	artImage: false,
	projects: false,
	logo: false,
	main: false
};

const sectionReadyStore = writable(initData);

function updateHelper<TField extends keyof SectionReadyValues>(
	field: TField,
	value: SectionReadyValues[TField]
) {
	sectionReadyStore.update((state) => {
		return {
			...state,
			[field]: value
		};
	});
}

const updateSectionReady = {
	artImage: () => updateHelper('artImage', true),
	projects: () => updateHelper('projects', true),
	logo: () => updateHelper('logo', true),
	main: () => updateHelper('main', true),
};

export { type SectionReadyValues, sectionReadyStore, updateSectionReady };
