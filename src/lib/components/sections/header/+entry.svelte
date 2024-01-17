<script context="module" lang="ts">
	import Nav from './nav.svelte';
</script>

<div class="flex justify-between items-start p-sm md:p-[1.25rem] lg:p-md 2xl:p-xl">
	<div class="flex items-center gap-sm">
		<h1
			class="font-light text-xl md:text-2xl lg:text-3xl 2xl:text-[2.6rem] tracking-widest cursor-pointer"
			id="home-link"
		>
			TPS
		</h1>
	</div>

	<Nav />
</div>
