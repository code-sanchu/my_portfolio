<script context="module" lang="ts">
	import { onMount } from 'svelte';
</script>

<script lang="ts">
	let containerNode: HTMLDivElement;

	let windowHeight: number;

	let show = false;

	let topfadeOut = false;

	onMount(() => {
		const rect = containerNode.getBoundingClientRect();

		if (!show) {
			show = rect.bottom < windowHeight;
		}

		const topPos = 200;

		topfadeOut = rect.bottom < topPos;
	});
</script>

<svelte:document
	on:scroll={() => {
		const rect = containerNode.getBoundingClientRect();

		if (!show) {
			show = rect.bottom < windowHeight;
		}

		const topPos = 200;

		topfadeOut = rect.bottom < topPos;
	}}
/>
<svelte:window bind:innerHeight={windowHeight} />

<p
	class={`w-[580px] text-base pt-xl transition-all ease-out duration-700 border-gray-12 ${
		show ? '' : 'opacity-0'
	} ${topfadeOut ? 'text-gray-6' : 'text-gray-12'}`}
	bind:this={containerNode}
>
	I'm a design-focused web engineer who provides consultancy and tech services with a focus on
	personalized and high-quality solutions. I work with individuals and small companies, hobbyists
	and professionals, and find the right-sized approach for each.
</p>
