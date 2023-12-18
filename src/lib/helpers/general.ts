export function randomIntFromInterval(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

export function getFirstLetters(str: string) {
	const words = str.split(' ');

	const result = words.map((word) => word.charAt(0)).join('');

	return result;
}
