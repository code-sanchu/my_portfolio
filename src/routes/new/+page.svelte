<script context="module" lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	import { image } from '^assets/images';

	import { Nav, Picture } from '^components';
	import { Contact, Heading, Intro, Projects, Services } from '^pages/landing-new';
</script>

<script lang="ts">
	// random blob shapes of gentle hues; a little as on at the beginning. https://lucyhardcastle.com/
	// could also copy thee title style from there.
</script>

<div
	class="fixed top-[22%] -left-0 -translate-x-[250px] transition-transform ease-linear duration-150"
>
	<div class="w-[400px] opacity-50">
		<Picture data={image.line_art[1]} />
	</div>
</div>

<div class="fixed left-sm top-sm flex">
	<h1 class="font-3d2 text-4xl tracking-widest">TPS</h1>
	<!-- <h1 class="font-3d2 text-4xl tracking-wider">TECH POIESIS</h1> -->
</div>

<div class="relative min-h-screen grid place-items-center" transition:fade>
	<div class="w-[560px] max-w-full pr-xl" id="about-section">
		<Intro />
	</div>
</div>
