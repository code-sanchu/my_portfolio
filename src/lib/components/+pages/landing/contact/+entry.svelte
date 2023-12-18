<script context="module" lang="ts">
	import { onMount } from 'svelte';

	import Form from './form';
</script>

<script lang="ts">
	let containerNode: HTMLDivElement;

	let windowHeight: number;

	let animateIn = false;

	onMount(() => {
		if (!animateIn) {
			const rect = containerNode.getBoundingClientRect();

			animateIn = rect.bottom - rect.height / 2 < windowHeight;
		}
	});
</script>

<svelte:document
	on:scroll={() => {
		if (!animateIn) {
			const rect = containerNode.getBoundingClientRect();

			animateIn = rect.bottom - rect.height / 2 < windowHeight;
		}
	}}
/>
<svelte:window bind:innerHeight={windowHeight} />

<div class="relative pt-2xl" bind:this={containerNode}>
	{#if containerNode}
		<div
			class={`absolute top-0 left-0 transition-all ease-out duration-700 border-t border-gray-6`}
			style:width={!animateIn ? '0px' : `${containerNode.getBoundingClientRect().width}px`}
		/>
	{/if}

	<h2
		class={`text-xl uppercase tracking-wider mb-xl transition-colors ease-out duration-700 ${
			!animateIn ? 'text-gray-6' : 'text-gray-12'
		}`}
	>
		Projects.
	</h2>

	<p
		class={`max-w-[500px] mt-[4.5rem] transition-colors ease-out duration-700  ${
			!animateIn ? 'text-gray-6' : 'text-gray-12'
		}`}
	>
		It'd be great to hear from you if for just an informal chat, you're ready to build a site or
		anything in-between.
	</p>

	<div class="mt-xl">
		<div class="flex gap-sm items-center">
			<h4 class="text-gray-9 uppercase text-xs tracking-wider">Message Me</h4>
		</div>

		<Form />

		<div class="mt-xl">
			<div class="flex gap-xs">
				<p class="text-gray-9 text-xs uppercase">or email</p>
				<a class="flex items-center gap-xs" href=".">
					<span class="text-xs uppercase text-my-light-blue">hello@tech-poiesis.net</span></a
				>
			</div>
		</div>
	</div>
</div>
