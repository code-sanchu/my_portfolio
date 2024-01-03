<script context="module" lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	import { Circles, Contact, Heading, Intro, Projects, Services } from '^pages/landing';
	import { Nav } from '^components';
</script>

<script lang="ts">
	// check: on mobile, can't scroll on projects section for some reason (can on others) - fixed?
	// check: check if thin scrollbar applied across browsers - wasn't on firefox windows

	import Picture from '^components/picture.svelte';
	import { image } from '^assets/images';

	// END
	// - optimise images

	// NICE TO HAVE
	// - more decoration on landing for big screens?
	// - better project titles animate in?

	// NEED TO DO
	// - main card text update since no longer flexed.
	// - responsive.

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

{#if mounted}
	<div class="fixed z-20 left-0 top-0 w-full" transition:fade>
		<Nav />
	</div>

	<div
		class="fixed top-[22%] -left-0 -translate-x-[250px] transition-transform ease-linear duration-150"
	>
		<!-- <div class="fixed top-[22%] sm:top-[30%] -left-lg transition-transform ease-linear duration-150"> -->
		<!-- <Circles /> -->
		<div class="w-[400px] opacity-50">
			<Picture data={image.line_art[1]} />
		</div>
	</div>

	<div class="relative min-h-screen grid place-items-center" transition:fade>
		<Heading />
	</div>

	<div class="mx-sm mb-2xl flex flex-col gap-3xl" transition:fade>
		<div class="w-[580px] max-w-full pr-xl" id="about-section">
			<Intro />
		</div>

		<div id="projects-section">
			<Projects />
		</div>

		<div id="services-section">
			<Services />
		</div>

		<div id="contact-section">
			<Contact />
		</div>
	</div>
{/if}
