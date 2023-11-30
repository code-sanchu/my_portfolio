export function smoothWheelScroll(
	container: HTMLElement,
	event: WheelEvent,
	duration: number = 1000
) {
	const startX = container.scrollLeft;
	const startTime = performance.now();

	function scrollAnimation(currentTime: number) {
		const elapsedTime = currentTime - startTime;
		const progress = Math.min(elapsedTime / duration, 1);
		// const easeInOutQuad = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

		const scrollAmount = event.deltaY >= 0 ? event.deltaY + 300 : event.deltaY - 300;

		container.scrollLeft = startX + scrollAmount * progress;
		// container.scrollLeft = startX + scrollAmount * easeInOutQuad(progress);

		if (progress < 1) {
			requestAnimationFrame(scrollAnimation);
		}
	}

	requestAnimationFrame(scrollAnimation);
}
