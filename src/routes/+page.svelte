<script context="module" lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	import { Circles, Contact, Heading, Intro, Projects, Services } from '^pages/landing';
</script>

<script lang="ts">
	// todo: coloured circles sticky to top for mobile?;
	// todo: img loader widget.
	// todo: projects height calculation will change for small devices.
	// todo: hide raie logo on image.
	// todo: sticky header as on alesh, etc. probs don't need store.
	// todo: projects titles section doesn't quite seem right when scoll down to it.

	// NEED TO DO
	// x (1) data.
	// (2) responsive.
	// (3) more decoration for big screens?
	// (4) section animations.

	// sections animation: (i) if opacity from 0 in, it's from 0 only on initial mount. (ii) maybe use intersection observer. (iii) plastic.design site fades in section title first then rest. (iv) such animations may look out of place with rest of the design. Look for others.

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

{#if mounted}
	<div class="fixed z-20 left-0 top-0 w-full p-sm flex justify-between bg-white" transition:fade>
		<div class="flex gap-xs">
			<button
				class={`text-xs tracking-wider underline underline-offset-4 text-gray-8 decoration-gray-8 hover:text-gray-12 hover:decoration-gray-12 ease-linear duration-200 transition-colors`}
				type="button"
				id="about-link"
			>
				about
			</button>
			<button
				class={`text-xs tracking-wider underline underline-offset-4 text-gray-8 decoration-gray-8 hover:text-gray-12 hover:decoration-gray-12 ease-linear duration-200 transition-colors`}
				type="button"
				id="projects-link"
			>
				projects
			</button>
			<button
				class={`text-xs tracking-wider underline underline-offset-4 text-gray-8 decoration-gray-8 hover:text-gray-12 hover:decoration-gray-12 ease-linear duration-200 transition-colors`}
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
		<div id="about-section">
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
