<script context="module" lang="ts">
	import { onMount } from 'svelte';
</script>

<script lang="ts">
	let containerNode: HTMLDivElement;

	let windowHeight: number;

	let animateIn = false;

	let topfadeOut = false;

	onMount(() => {
		const rect = containerNode.getBoundingClientRect();

		if (!animateIn) {
			animateIn = rect.bottom < windowHeight;
		}

		const topPos = 200;

		topfadeOut = rect.bottom < topPos;
	});
</script>

<svelte:document
	on:scroll={() => {
		const rect = containerNode.getBoundingClientRect();

		if (!animateIn) {
			animateIn = rect.bottom < windowHeight;
		}

		const topPos = 200;

		topfadeOut = rect.bottom < topPos;
	}}
/>
<svelte:window bind:innerHeight={windowHeight} />

<p
	class={`text-sm tracking-wide md:text-base transition-all ease-out duration-700 leading-[1.35rem] text-black`}
	bind:this={containerNode}
>
	I'm a design-focused web engineer who provides consultancy and tech services with a focus on
	personalized and high-quality solutions. I work with individuals and small companies, hobbyists
	and professionals, and find the right-sized approach for each.
</p>

<style>
	.shine-text {
		position: relative;
	}

	.shine-text::before {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			to right,
			transparent 0%,
			rgba(255, 255, 255, 0.8) 50%,
			transparent 100%
		);
		animation: shine 2s infinite;
	}

	@keyframes shine {
		to {
			left: 100%;
		}
	}
</style>
