<script context="module" lang="ts">
	import { fade } from 'svelte/transition';
</script>

<script lang="ts">
	let windowWidth: number;

	$: baseWidth = windowWidth < 700 ? 120 : 200;
	$: increment = windowWidth < 700 ? 10 : 12;

	const firstSet = [
		'border-my-olive',
		'border-my-light-blue',
		'border-my-dark-red',
		'border-my-sea-green',
		'border-my-dark-olive',
		'border-my-orange',
		'border-my-dark-slate-gray',
		'border-my-plum'
	];

	const secondSet = [
		'border-my-steel-blue',
		'border-my-royal-blue',
		'border-my-golden-rod',
		'border-my-navy-blue',
		'border-my-red-fire',
		'border-my-forest-green',
		'border-my-tomato',
		'border-my-rosy-brown'
	];
</script>

<svelte:window bind:innerWidth={windowWidth} />

{#if baseWidth && increment}
	<div>
		<div class="relative h-[80px]">
			{#each firstSet as border, i}
				<div class={`line border ${border}`} style:width="{baseWidth + increment * i}px" />
			{/each}
		</div>

		<div class="relative ml-sm">
			{#each secondSet as border, i}
				<div class={`line border ${border}`} style:width="{baseWidth + increment * i}px" />
			{/each}
		</div>
	</div>
{/if}

<style>
	.line {
		@apply absolute -translate-x-1/2 top-1/2 -translate-y-1/2 aspect-square rounded-full opacity-40;
	}
</style>
