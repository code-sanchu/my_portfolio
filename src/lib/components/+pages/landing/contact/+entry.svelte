<script context="module" lang="ts">
	import { onMount } from 'svelte';

	import Form from './form';
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

			fadeOut = bottom < quarterScreenPx || rect.bottom > windowHeight;
		}
	});
</script>

<svelte:document
	on:scroll={() => {
		const rect = node.getBoundingClientRect();

		const quarterScreenPx = windowHeight / 4;

		fadeOut = rect.bottom < quarterScreenPx || rect.bottom > windowHeight;
	}}
/>
<svelte:window bind:innerHeight={windowHeight} />

<div
	class={`relative pt-3xl border-t transition-all ease-out duration-500 ${
		fadeOut ? 'grayscale opacity-40' : ''
	}`}
	bind:this={node}
>
	<div>
		<h2 class={`text-xl uppercase tracking-wider mb-lg`}>Contact.</h2>
	</div>

	<p class="max-w-[500px] mt-[4.5rem]">
		I'd love to hear from you, whether for just an informal chat, if you're ready to build a site or
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
