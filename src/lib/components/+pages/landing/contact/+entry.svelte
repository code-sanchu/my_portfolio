<script context="module" lang="ts">
	import { onMount } from 'svelte';

	import Form from './form';
</script>

<script lang="ts">
	let headingNode: HTMLDivElement;
	let containerNode: HTMLDivElement;

	let windowHeight: number;

	let animateIn1 = false;
	let animateIn2 = false;

	onMount(() => {
		if (!animateIn1) {
			const rect = headingNode.getBoundingClientRect();

			animateIn1 = rect.bottom < windowHeight;
		}

		if (!animateIn2) {
			const rect = containerNode.getBoundingClientRect();

			animateIn2 = rect.bottom - rect.height / 2 < windowHeight;
		}
	});
</script>

<svelte:document
	on:scroll={() => {
		if (!animateIn1) {
			const rect = headingNode.getBoundingClientRect();

			animateIn1 = rect.bottom < windowHeight;
		}

		if (!animateIn2) {
			const rect = containerNode.getBoundingClientRect();

			animateIn2 = rect.bottom - rect.height / 2 < windowHeight;
		}
	}}
/>
<svelte:window bind:innerHeight={windowHeight} />

<div class="relative pt-2xl font-light" bind:this={containerNode}>
	{#if containerNode}
		<div
			class={`absolute top-0 left-0 transition-all ease-out duration-700 border-t border-gray-6`}
			style:width={!animateIn1 ? '0px' : `${containerNode.getBoundingClientRect().width}px`}
		/>
	{/if}

	<h2
		class={`text-xl uppercase tracking-[0.075em] mb-xl transition-colors ease-out duration-700 ${
			!animateIn1 ? 'text-gray-6' : 'text-gray-12'
		}`}
		bind:this={headingNode}
	>
		Contact.
	</h2>

	<p
		class={`max-w-[500px] text-sm leading-[1.35rem] mt-xl md:mt-[4.5rem] transition-colors ease-out duration-700  ${
			!animateIn2 ? 'text-gray-6' : 'text-gray-12'
		}`}
	>
		It'd be great to hear from you if just for an informal chat or if you're ready to get building.
	</p>

	<div class="mt-xl">
		<div class="flex gap-sm items-center">
			<h4 class="text-gray-9 uppercase text-xs tracking-[0.06em]">Message Me</h4>
		</div>

		<Form />

		<div class="mt-xl">
			<div class="flex gap-xs">
				<p class="text-gray-9 text-xs uppercase tracking-[0.06em]">or email</p>
				<a class="flex items-center gap-xs" href=".">
					<span class="text-xs uppercase text-my-light-blue tracking-wide"
						>hello@tech-poiesis.net</span
					></a
				>
			</div>
		</div>
	</div>
</div>
