<script context="module" lang="ts">
	import { fade } from 'svelte/transition';

	import { Intro, Services, Circles, Projects, Contact, Heading } from '^pages/landing';
</script>

<script lang="ts">
	// todo: thin scrollbar; smooth scroll; projects data; coloured circles sticky to top for mobile?
	// services - can also help with configuration. consultancy - give once over.
	// todo: img loader widget.
	// todo: projects height calculation will change for small devices.
	// todo: hide raie logo on image.

	// todo: sections opacity/black + white; smooth scrolling + snap sections? transition in on mount.
</script>

<div class="fixed left-0 top-0 w-full p-sm flex justify-between">
	<div class="flex gap-xs">
		<button
			class="text-xs tracking-wider text-gray-6 underline decoration-gray-6 underline-offset-4"
			type="button"
		>
			<span>about</span>
		</button>
		<button
			class="text-xs tracking-wider text-gray-6 underline decoration-gray-6 underline-offset-4"
			type="button"
		>
			<span>projects</span>
		</button>
		<button
			class="text-xs tracking-wider text-gray-6 underline decoration-gray-6 underline-offset-4"
			type="button"
		>
			<span>services</span>
		</button>
	</div>

	<button
		class="text-xs tracking-wider text-gray-12 underline decoration-gray-12 underline-offset-4"
		type="button"
	>
		<span>say hi</span>
	</button>
</div>

<Circles />

<div class="relative min-h-screen grid place-items-center">
	<Heading />
</div>

<div class="mx-lg mb-xl">
	<Intro />

	<Projects />

	<Services />

	<Contact />
</div>
