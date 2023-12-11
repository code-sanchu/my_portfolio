<script context="module" lang="ts">
	import { fade } from 'svelte/transition';

	import { Intro, Services, Circles, Projects, Contact } from '^pages/landing';

	type SectionVisibilityStatus = 'closed' | 'opening' | 'open' | 'closing';
</script>

<script lang="ts">
	let projectsStatus: SectionVisibilityStatus = 'closed';
</script>

{#if projectsStatus === 'closed' || projectsStatus === 'closing'}
	<div class="relative min-h-screen grid place-items-center" transition:fade>
		<Circles />

		<div class="relative">
			<h1 class="text-gray-12 text-5xl uppercase tracking-wide leading-none">Tech-poiesis</h1>

			<p class="leading-none tracking-wider mt-xxs flex font-mono">
				<span class="text-my-olive">B</span>
				<span class="text-my-olive">e</span>
				<span class="text-my-light-blue">s</span>
				<span class="text-my-dark-red">p</span>
				<span class="text-my-sea-green">o</span>
				<span class="text-my-dark-olive">k</span>
				<span class="mr-xxs text-my-orange">e</span>

				<span class="text-my-rosy-brown">w</span>
				<span class="text-my-dark-slate-gray">e</span>
				<span class="text-my-plum">b</span>
				<span class="text-my-dark-olive">s</span>
				<span class="text-my-dark-olive">i</span>
				<span class="text-my-steel-blue">t</span>
				<span class="mr-xxs text-my-royal-blue">e</span>

				<span class="text-my-golden-rod">c</span>
				<span class="text-my-dark-olive">r</span>
				<span class="text-my-navy-blue">e</span>
				<span class="text-my-navy-blue">a</span>
				<span class="text-my-plum">t</span>
				<span class="text-my-plum">i</span>
				<span class="text-my-dark-red">o</span>
				<span class="text-my-golden-rod">n</span>
			</p>
		</div>
	</div>

	<div class="mx-lg mb-xl">
		<Intro />

		<Projects />

		<Services />

		<Contact />
	</div>
{/if}

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
