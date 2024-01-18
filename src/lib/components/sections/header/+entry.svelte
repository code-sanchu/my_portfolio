<script context="module" lang="ts">
	import Nav from './nav.svelte';

	import { sectionReadyStore, type SectionReadyValues } from '^stores';
</script>

<script lang="ts">
	let sectionReady: SectionReadyValues;

	sectionReadyStore.subscribe((state) => {
		sectionReady = state;
	});
</script>

<div class="flex justify-between items-start p-sm md:p-[1.25rem] lg:p-md 2xl:p-xl">
	<h1
		class="font-light text-xl md:text-2xl lg:text-3xl 2xl:text-[2.6rem] tracking-widest cursor-pointer opacity-0 backdrop-blur-sm bg-white/30"
		style:opacity={!sectionReady?.logo ? 0 : 1}
		id="home-link"
	>
		TPS
	</h1>

	<Nav />
</div>
