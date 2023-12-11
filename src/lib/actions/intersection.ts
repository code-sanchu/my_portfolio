export function handleIntersection(
	node: HTMLElement,
	funcs: { onIntersect: () => void; onNonIntersect: () => void }
) {
	const observer = new IntersectionObserver((entries) => {
		if (entries[0].isIntersecting) {
			funcs.onIntersect();
		} else {
			funcs.onNonIntersect();
		}
	});
	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
