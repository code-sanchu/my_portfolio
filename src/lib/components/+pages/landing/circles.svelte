<script context="module" lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
</script>

<script lang="ts">
	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<div class="fixed top-[30%] -left-lg opacity-70" transition:fade>
	<div class="relative h-[80px]">
		<div
			class="absolute -translate-x-1/2 top-1/2 -translate-y-1/2 w-[200px] aspect-square rounded-full border border-my-olive"
		/>
		<div
			class="absolute -translate-x-1/2 top-1/2 -translate-y-1/2 w-[210px] aspect-square rounded-full border border-my-light-blue"
		/>
		<div
			class="absolute -translate-x-1/2 top-1/2 -translate-y-1/2 w-[220px] aspect-square rounded-full border border-my-dark-red"
		/>
		<div
			class="absolute -translate-x-1/2 top-1/2 -translate-y-1/2 w-[230px] aspect-square rounded-full border border-my-sea-green"
		/>
		<div
			class="absolute -translate-x-1/2 top-1/2 -translate-y-1/2 w-[240px] aspect-square rounded-full border border-my-dark-olive"
		/>
		<div
			class="absolute -translate-x-1/2 top-1/2 -translate-y-1/2 w-[250px] aspect-square rounded-full border border-my-orange"
		/>
		<div
			class="absolute -translate-x-1/2 top-1/2 -translate-y-1/2 w-[260px] aspect-square rounded-full border border-my-dark-slate-gray"
		/>
		<div
			class="absolute -translate-x-1/2 top-1/2 -translate-y-1/2 w-[270px] aspect-square rounded-full border border-my-plum"
		/>
	</div>

	<div class="relative ml-sm">
		<div
			class="absolute -translate-x-1/2 top-1/2 -translate-y-1/2 w-[200px] aspect-square rounded-full border border-my-steel-blue"
		/>
		<div
			class="absolute -translate-x-1/2 top-1/2 -translate-y-1/2 w-[210px] aspect-square rounded-full border border-my-royal-blue"
		/>
		<div
			class="absolute -translate-x-1/2 top-1/2 -translate-y-1/2 w-[220px] aspect-square rounded-full border border-my-golden-rod"
		/>
		<div
			class="absolute -translate-x-1/2 top-1/2 -translate-y-1/2 w-[230px] aspect-square rounded-full border border-my-navy-blue"
		/>
		<div
			class="absolute -translate-x-1/2 top-1/2 -translate-y-1/2 w-[240px] aspect-square rounded-full border border-my-red-fire"
		/>
		<div
			class="absolute -translate-x-1/2 top-1/2 -translate-y-1/2 w-[250px] aspect-square rounded-full border border-my-forest-green"
		/>
		<div
			class="absolute -translate-x-1/2 top-1/2 -translate-y-1/2 w-[260px] aspect-square rounded-full border border-my-tomato"
		/>
		<div
			class="absolute -translate-x-1/2 top-1/2 -translate-y-1/2 w-[270px] aspect-square rounded-full border border-my-rosy-brown"
		/>
	</div>
</div>
