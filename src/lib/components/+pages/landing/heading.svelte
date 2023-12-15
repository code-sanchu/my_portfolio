<script context="module" lang="ts">
	import { onMount } from 'svelte';
</script>

<script lang="ts">
	let node: HTMLDivElement;

	let windowHeight: number;

	let fadeOut: boolean;

	onMount(() => {
		if (fadeOut === undefined) {
			const rect = node.getBoundingClientRect();

			const bottom = rect.bottom;

			const quarterScreenPx = windowHeight / 6;

			fadeOut = bottom < quarterScreenPx;
		}
	});
</script>

<svelte:document
	on:scroll={() => {
		const rect = node.getBoundingClientRect();

		const fadeOutPos = windowHeight / 6;

		fadeOut = rect.bottom < fadeOutPos;
	}}
/>
<svelte:window bind:innerHeight={windowHeight} />

<div
	class={`transition-all ease-out duration-1000 ${fadeOut ? 'opacity-40 grayscale' : ''}`}
	bind:this={node}
>
	<h1
		class={`text-gray-12 text-5xl uppercase tracking-wide leading-none transition-opacity ease-out duration-1000`}
	>
		Tech-poiesis
	</h1>

	<p class="leading-none tracking-wider mt-xxs flex font-mono">
		<span class="text-my-olive transition-colors ease-out duration-500">B</span>
		<span class="text-my-olive">e</span>
		<span class="text-my-light-blue">s</span>
		<span class="text-my-dark-red">p</span>
		<span class="text-my-sea-green">o</span>
		<span class="text-my-dark-olive">k</span>
		<span class="mr-xxs text-my-orange">e</span>

		<span class="text-my-rosy-brown">w</span>
		<span class="text-my-dark-slate-gray">e</span>
		<span class="text-my-plum">b</span>
		<span class="text-my-dark-olive">s</span>
		<span class="text-my-dark-olive">i</span>
		<span class="text-my-steel-blue">t</span>
		<span class="mr-xxs text-my-royal-blue">e</span>

		<span class="text-my-golden-rod">c</span>
		<span class="text-my-dark-olive">r</span>
		<span class="text-my-navy-blue">e</span>
		<span class="text-my-navy-blue">a</span>
		<span class="text-my-plum">t</span>
		<span class="text-my-plum">i</span>
		<span class="text-my-dark-red">o</span>
		<span class="text-my-golden-rod">n</span>
	</p>
</div>
