<script context="module" lang="ts">
	import { onMount } from 'svelte';
</script>

<script lang="ts">
	let node: HTMLDivElement;

	let windowHeight: number;

	export let fadeOut: boolean;

	onMount(() => {
		if (fadeOut === undefined) {
			const rect = node.getBoundingClientRect();

			const bottom = rect.bottom;

			const quarterScreenPx = windowHeight / 4;

			fadeOut = bottom < quarterScreenPx || rect.bottom > windowHeight;
		}
	});
</script>

<svelte:document
	on:scroll={() => {
		const rect = node.getBoundingClientRect();

		const quarterScreenPx = windowHeight / 4;

		fadeOut = rect.bottom < quarterScreenPx || rect.bottom > windowHeight - 100;
	}}
/>
<svelte:window bind:innerHeight={windowHeight} />

<p
	class={`w-[580px] text-base pt-xl transition-colors ease-out duration-500 ${
		fadeOut ? 'text-gray-7 border-gray-7' : 'border-gray-12 text-gray-12'
	}`}
	bind:this={node}
>
	I'm a design-focused web engineer who provides consultancy and tech services with a focus on
	personalized and high-quality solutions. I work with individuals and small companies, hobbyists
	and professionals, and find the right-sized approach for each.
</p>
