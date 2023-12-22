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
	class={`text-sm tracking-wide md:text-base pt-xl font-light transition-all ease-out duration-700 leading-[1.35rem] ${
		animateIn ? '' : 'opacity-0 translate-y-md'
	} ${topfadeOut ? 'text-gray-6' : 'text-gray-12'}`}
	bind:this={containerNode}
>
	I'm a design-focused web engineer who provides consultancy and tech services with a focus on
	personalized and high-quality solutions. I work with individuals and small companies, hobbyists
	and professionals, and find the right-sized approach for each.
</p>
