<script context="module" lang="ts">
	import { fade } from 'svelte/transition';

	import { image } from '^assets/images';

	import { Picture } from '^components';
	import { Intro } from '^pages/landing-new';
</script>

<!-- <div class="fixed right-sm top-md">
	<Nav />
</div> -->

<div
	class="fixed top-[22%] -left-0 -translate-x-[250px] transition-transform ease-linear duration-150"
>
	<div class="w-[400px] opacity-50">
		<Picture data={image.line_art[1]} />
	</div>
</div>

<div class="fixed left-sm top-md flex">
	<h1 class="font-3d2 text-[2.5rem] tracking-widest">TPS</h1>
</div>

<div class="relative min-h-screen grid place-items-center" transition:fade>
	<div class="w-[560px] max-w-full pr-xl" id="about-section">
		<Intro />
	</div>
</div>
