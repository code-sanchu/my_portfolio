export const getTitlesPosition = (containerId: string) => {
	const container = document.getElementById(containerId);

	if (!container) {
		return;
	}

	const positions = Array.from(container.children)
		.filter((node) => node.tagName === 'H4')
		.map((titleNode) => {
			const plusNode = titleNode.children[0] as HTMLSpanElement;
			const textNode = titleNode.children[1] as HTMLSpanElement;

			// const plusNodeRect = plusNode.getBoundingClientRect();
			// const textNodeRect = textNode.getBoundingClientRect();

			return {
				plus: {
					top: plusNode.offsetTop,
					left: plusNode.offsetLeft
				},
				text: {
					top: textNode.offsetTop,
					left: textNode.offsetLeft
				}
			};
		});

	return positions;
};
