<script lang="ts">
	export let node: HTMLElement;
	export let inView: boolean;

	let viewContainer: HTMLDivElement;

	$: {
		if (node && viewContainer) {
			const observer = new IntersectionObserver(
				(entries) => {
					if (entries[0].isIntersecting) {
						inView = true;
					} else {
						inView = false;
					}
				},
				{ root: document.querySelector('#view-area') }
			);

			observer.observe(node);
		}
	}
</script>

<div
	class="fixed left-0 w-full border-2 z-10 top-1/2 -translate-y-1/2 h-[600px]"
	bind:this={viewContainer}
/>
