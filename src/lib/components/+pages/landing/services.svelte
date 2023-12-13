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
	class={`relative mt-3xl pt-3xl flex gap-xl justify-between border-t transition-all ease-out duration-500 ${
		fadeOut ? 'border-gray-4 grayscale opacity-40' : 'border-gray-6'
	}`}
	bind:this={node}
>
	<div>
		<h2 class={`text-xl uppercase tracking-wider mb-lg`}>Services.</h2>
	</div>

	<div class="flex flex-col gap-xl">
		<div class="flex gap-xl justify-between">
			<h3 class="text-lg text-my-dark-slate-gray font-mono">Consultancy</h3>
			<p class="pt-[5.5px] text-sm max-w-[400px]">
				I share my expertise and talk through your options about all things web.
			</p>
		</div>

		<div class="flex gap-xl justify-between">
			<h3 class="text-lg text-my-dark-slate-gray font-mono">Site creation</h3>
			<p class="pt-[5.5px] text-sm max-w-[400px]">
				A collaborative design process followed by the build, in which I use optimal tech.
			</p>
		</div>

		<div class="flex gap-xl justify-between">
			<h3 class="text-lg text-my-dark-slate-gray font-mono">Platforms</h3>
			<p class="pt-[5.5px] text-sm max-w-[400px]">
				Site builds and updates on cms platforms such as Squarespace, Cargo and Wordpress.
			</p>
		</div>
	</div>
</div>
