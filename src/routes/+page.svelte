<script context="module" lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	import { Circles, Contact, Heading, Intro, Projects, Services } from '^pages/landing';
</script>

<script lang="ts">
	// todo: projects data; coloured circles sticky to top for mobile?; highlight active section link? nicer scroll into view animation?; scrollIntoView doesn't work form below?; opacity 0 for sections when approach top + bottom;
	// services - can also help with configuration. consultancy - give once over.
	// todo: img loader widget.
	// todo: projects height calculation will change for small devices.
	// todo: hide raie logo on image.
	// todo: projects titles section doesn't quite seem right when scoll down to it.

	let mounted = false;

	onMount(() => {
		mounted = true;
	});

	let about: HTMLDivElement;
	let projects: HTMLDivElement;
	let services: HTMLDivElement;
	let contact: HTMLDivElement;
</script>

{#if mounted}
	<div class="fixed z-20 left-0 top-0 w-full p-sm flex justify-between" transition:fade>
		<div class="flex gap-xs">
			<button
				class="text-xs tracking-wider text-gray-8 underline decoration-gray-8 underline-offset-4 hover:text-gray-12 hover:decoration-gray-12 ease-linear duration-200"
				type="button"
				id="about-link"
			>
				about
			</button>
			<button
				class="text-xs tracking-wider text-gray-8 underline decoration-gray-8 underline-offset-4 hover:text-gray-12 hover:decoration-gray-12 ease-linear duration-200"
				type="button"
				id="projects-link"
			>
				projects
			</button>
			<button
				class="text-xs tracking-wider text-gray-8 underline decoration-gray-8 underline-offset-4 hover:text-gray-12 hover:decoration-gray-12 ease-linear duration-200"
				type="button"
				id="services-link"
			>
				services
			</button>
		</div>

		<button
			class="text-xs tracking-wider text-gray-12 underline decoration-gray-12 underline-offset-4 hover:text-my-dark-slate-gray hover:decoration-my-dark-slate-gray ease-linear duration-200"
			type="button"
			id="contact-link"
		>
			say hi
		</button>
	</div>

	<Circles />

	<div class="relative min-h-screen grid place-items-center" transition:fade>
		<Heading />
	</div>

	<div class="mx-lg mb-2xl flex flex-col gap-[270px]" transition:fade>
		<div bind:this={about} id="about-section">
			<Intro />
		</div>

		<div bind:this={projects} id="projects-section">
			<Projects />
		</div>

		<div bind:this={services} id="services-section">
			<Services />
		</div>

		<div bind:this={contact} id="contact-section">
			<Contact />
		</div>
	</div>
{/if}
