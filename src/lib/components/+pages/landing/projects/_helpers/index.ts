import { uid } from 'uid/single';

import { randomIntFromInterval } from '^helpers';

const textStrings = [
	'text-my-olive',
	'text-my-light-blue',
	'text-my-dark-red',
	'text-my-sea-green',
	'text-my-dark-olive',
	'text-my-orange',
	'text-my-dark-slate-gray',
	'text-my-plum',
	'text-my-steel-blue',
	'text-my-royal-blue',
	'text-my-golden-rod',
	'text-my-navy-blue',
	'text-my-red-fire',
	'text-my-forest-green',
	'text-my-tomato',
	'text-my-rosy-brown'
];

const chooseRandomColor = () => {
	const num = randomIntFromInterval(0, textStrings.length - 1);

	return textStrings[num];
};

export function strToTextColoursArr(str: string) {
	const titleArr = str
		.split('')
		.map((letter) => ({ letter, colour: chooseRandomColor(), key: uid() }));

	return titleArr;
}
