<script context="module" lang="ts">
	import { onMount } from 'svelte';
</script>

<script lang="ts">
	let node: HTMLDivElement;

	let windowHeight: number;

	let initialShow = false;

	onMount(() => {
		if (!initialShow) {
			const rect = node.getBoundingClientRect();

			const quarterScreenPx = windowHeight / 4;

			initialShow = rect.bottom > quarterScreenPx && rect.bottom < windowHeight;
		}
	});
</script>

<svelte:document
	on:scroll={() => {
		if (!initialShow) {
			const rect = node.getBoundingClientRect();

			const quarterScreenPx = windowHeight / 4;

			initialShow = rect.bottom > quarterScreenPx && rect.bottom < windowHeight;
		}
	}}
/>
<svelte:window bind:innerHeight={windowHeight} />

<p
	class={`w-[580px] text-base pt-xl transition-opacity ease-out duration-1000 border-gray-12 text-gray-12 ${
		initialShow ? '' : 'opacity-0'
	}`}
	bind:this={node}
>
	I'm a design-focused web engineer who provides consultancy and tech services with a focus on
	personalized and high-quality solutions. I work with individuals and small companies, hobbyists
	and professionals, and find the right-sized approach for each.
</p>
