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

			const quarterScreenPx = windowHeight / 4;

			fadeOut = bottom < quarterScreenPx;
		}
	});
</script>

<svelte:document
	on:scroll={() => {
		const rect = node.getBoundingClientRect();

		const bottom = rect.bottom;

		const quarterScreenPx = windowHeight / 4;

		fadeOut = bottom < quarterScreenPx;
	}}
/>
<svelte:window bind:innerHeight={windowHeight} />

<div class={`transition-opacity ease-out duration-500 ${fadeOut ? '' : ''}`} bind:this={node}>
	<h1
		class="text-gray-12 text-5xl uppercase tracking-wide leading-none text-transition"
		style:color={fadeOut ? '#CECECE' : ''}
	>
		Tech-poiesis
	</h1>

	<p class="leading-none tracking-wider mt-xxs flex font-mono">
		<span
			class="text-my-olive transition-colors ease-out duration-500"
			style:color={fadeOut ? '#CECECE' : ''}>B</span
		>
		<span class="text-my-olive" style:color={fadeOut ? '#CECECE' : ''}>e</span>
		<span class="text-my-light-blue" style:color={fadeOut ? '#CECECE' : ''}>s</span>
		<span class="text-my-dark-red" style:color={fadeOut ? '#CECECE' : ''}>p</span>
		<span class="text-my-sea-green" style:color={fadeOut ? '#CECECE' : ''}>o</span>
		<span class="text-my-dark-olive" style:color={fadeOut ? '#CECECE' : ''}>k</span>
		<span class="mr-xxs text-my-orange" style:color={fadeOut ? '#CECECE' : ''}>e</span>

		<span class="text-my-rosy-brown" style:color={fadeOut ? '#CECECE' : ''}>w</span>
		<span class="text-my-dark-slate-gray" style:color={fadeOut ? '#CECECE' : ''}>e</span>
		<span class="text-my-plum" style:color={fadeOut ? '#CECECE' : ''}>b</span>
		<span class="text-my-dark-olive" style:color={fadeOut ? '#CECECE' : ''}>s</span>
		<span class="text-my-dark-olive" style:color={fadeOut ? '#CECECE' : ''}>i</span>
		<span class="text-my-steel-blue" style:color={fadeOut ? '#CECECE' : ''}>t</span>
		<span class="mr-xxs text-my-royal-blue" style:color={fadeOut ? '#CECECE' : ''}>e</span>

		<span class="text-my-golden-rod" style:color={fadeOut ? '#CECECE' : ''}>c</span>
		<span class="text-my-dark-olive" style:color={fadeOut ? '#CECECE' : ''}>r</span>
		<span class="text-my-navy-blue" style:color={fadeOut ? '#CECECE' : ''}>e</span>
		<span class="text-my-navy-blue" style:color={fadeOut ? '#CECECE' : ''}>a</span>
		<span class="text-my-plum" style:color={fadeOut ? '#CECECE' : ''}>t</span>
		<span class="text-my-plum" style:color={fadeOut ? '#CECECE' : ''}>i</span>
		<span class="text-my-dark-red" style:color={fadeOut ? '#CECECE' : ''}>o</span>
		<span class="text-my-golden-rod" style:color={fadeOut ? '#CECECE' : ''}>n</span>
	</p>
</div>

<style>
	.text-transition {
		@apply transition-colors ease-out duration-500;
	}
</style>
