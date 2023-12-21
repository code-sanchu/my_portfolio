export const getTitlesPosition = (containerId: string) => {
	const container = document.getElementById(containerId);

	if (!container) {
		return;
	}

	const positions = Array.from(container.children)
		.filter((node) => node.tagName === 'H4')
		.map((titleNode) => {
			const plusNode = titleNode.children[0];
			const textNode = titleNode.children[1];

			const plusNodeRect = plusNode.getBoundingClientRect();
			const textNodeRect = textNode.getBoundingClientRect();

			return {
				plus: {
					top: plusNodeRect.top,
					left: plusNodeRect.left
				},
				text: {
					top: textNodeRect.top,
					left: textNodeRect.left
				}
			};
		});

	return positions;
};
