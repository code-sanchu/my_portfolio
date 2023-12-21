<script context="module" lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	import { Circles, Contact, Heading, Intro, Projects, Services } from '^pages/landing';
	import { Nav } from '^components';
</script>

<script lang="ts">
	// todo: coloured circles sticky to top for mobile?;
	// todo: img loader widget.
	// todo: hide raie logo on image?
	// todo: sticky header as on alesh, etc. probs don't need store?

	// todo: font light site icon
	// todo: projects titles moving with mobile.
	// todo: contact form coloured lines shouldn't take up whole page on mobile?
	// todo: go over leading of main card text for mobile

	// NEED TO DO
	// (2) responsive.
	// (3) more decoration for big screens?

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

{#if mounted}
	<div class="fixed z-20 left-0 top-0 w-full" transition:fade>
		<Nav />
	</div>

	<div class="fixed top-[22%] sm:top-[30%] -left-lg">
		<Circles />
	</div>

	<div class="relative min-h-screen grid place-items-center translate-y-[10vh]" transition:fade>
		<Heading />
	</div>

	<!-- <div class="mx-sm mb-2xl flex flex-col gap-[270px]" transition:fade> -->
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
