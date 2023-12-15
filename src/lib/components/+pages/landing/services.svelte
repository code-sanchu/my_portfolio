<script context="module" lang="ts">
	import { onMount } from 'svelte';
</script>

<script lang="ts">
	let node: HTMLDivElement;

	let windowHeight: number;

	let show: boolean;
	let show2 = false;

	$: {
		if (show) {
			setTimeout(() => {
				show2 = true;
			}, 700);
		} else {
			show2 = false;
		}
	}

	onMount(() => {
		if (show === undefined) {
			const rect = node.getBoundingClientRect();

			const quarterScreenPx = windowHeight / 4;

			show = rect.bottom > quarterScreenPx && rect.bottom < windowHeight;
		}
	});
</script>

<svelte:document
	on:scroll={() => {
		const rect = node.getBoundingClientRect();

		const quarterScreenPx = windowHeight / 4;

		show = rect.bottom > quarterScreenPx && rect.bottom < windowHeight;
	}}
/>
<svelte:window bind:innerHeight={windowHeight} />

<div class={`relative pt-3xl`} bind:this={node}>
	{#if node}
		<div
			class="absolute top-0 left-0 transition-all ease-out duration-700 border-t border-gray-6"
			style:width={!show ? '0px' : `${node.getBoundingClientRect().width}px`}
		/>
	{/if}

	<div
		class={`flex gap-xl justify-between transition-opacity ease-out duration-500 ${
			!show ? 'opacity-0' : ''
		}`}
	>
		<h2 class={`text-xl uppercase tracking-wider mb-lg`}>Services.</h2>

		<div class="flex flex-col gap-xl">
			<div class="flex gap-xl justify-between">
				<h3 class="service-title">Consultancy</h3>
				<p class="text-sm max-w-[400px] leading-relaxed">
					I share my expertise and talk through your options about all things web.
				</p>
			</div>

			<div class="flex gap-xl justify-between">
				<h3 class="service-title">Site creation</h3>
				<p class="text-sm max-w-[400px] leading-relaxed">
					A collaborative design process followed by the build, in which I use optimal tech.
				</p>
			</div>

			<div class="flex gap-xl justify-between">
				<h3 class="service-title">Platforms</h3>
				<p class="text-sm max-w-[400px] leading-relaxed">
					Site builds and updates on cms platforms such as Squarespace, Cargo and Wordpress.
				</p>
			</div>
		</div>
	</div>
</div>

<style>
	.service-title {
		@apply text-my-golden-rod font-light text-lg font-mono tracking-wide leading-relaxed;
	}
</style>
