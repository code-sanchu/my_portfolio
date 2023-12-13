import { writable } from 'svelte/store';

type ScrollValues = {
	pos: number;
};

const initData: ScrollValues = {
	pos: 0
};

const scrollStore = writable(initData);

function updateHelper<TField extends keyof ScrollValues>(
	field: TField,
	value: ScrollValues[TField]
) {
	scrollStore.update((state) => {
		return {
			...state,
			[field]: value
		};
	});
}

const updateScroll = {
	pos: (value: number) => updateHelper('pos', value)
};

export { type ScrollValues, scrollStore, updateScroll };
