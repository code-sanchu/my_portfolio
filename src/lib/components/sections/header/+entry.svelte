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

<div
	class="flex justify-between items-start md:items-center p-sm md:p-[1.25rem] lg:p-md 2xl:p-xl bg-white"
>
	<h1
		class="font-light text-xl md:text-2xl lg:text-3xl 2xl:text-[2.6rem] tracking-widest cursor-pointer"
		id="home-link"
	>
		TPS
	</h1>

	<div
		class={`transition-opacity duration-200 ease-in-out ${
			!sectionReady.initialLayout ? 'opacity-0' : ''
		}`}
	>
		<Nav />
	</div>
</div>
