<script context="module" lang="ts">
	import { fade } from 'svelte/transition';

	import Projects from '^pages/projects';

	type SectionVisibilityStatus = 'closed' | 'opening' | 'open' | 'closing';
</script>

<script lang="ts">
	// todo: say hi at the bottom. another link to projects too.
	let projectsStatus: SectionVisibilityStatus = 'closed';
</script>

{#if projectsStatus === 'closed' || projectsStatus === 'closing'}
	<div class="min-h-screen grid place-items-center" transition:fade>
		<div class="relative">
			<h1 class="text-gray-12 text-5xl uppercase tracking-wide leading-none">Tech-poiesis</h1>

			<p class="leading-none tracking-wider mt-xxs flex">
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

			<!-- <div class="shimmer" /> -->
		</div>
	</div>

	<div class="mx-lg mb-xl">
		<p class="w-[660px] text-lg text-gray-12">
			I'm a design-focused developer that provides consultancy and tech services with a focus on
			personalized and high-quality solutions. I work with individuals and small companies,
			hobbyists and professionals, and find the right-sized approach for each client.
		</p>

		<!-- <div class="flex justify-end mt-xl">
			<div>
				<h4 class="text-right">User Experience</h4>
				<p class="max-w-[660px] text-lg text-gray-11">
					I use innovative technology to produce the most optimal
				</p>
			</div>
		</div> -->

		<div class="mt-2xl border-t border-my-light-blue flex justify-between pt-xl">
			<h2 class="flex flex-col text-lg uppercase tracking-wider text-my-light-blue">
				<span class="flex">
					<span class="text-my-olive">M</span>
					<span class="text-my-light-blue">y</span>
				</span>
				<span class="flex">
					<span class="text-my-golden-rod">S</span>
					<span class="text-my-dark-olive">e</span>
					<span class="text-my-navy-blue">r</span>
					<span class="text-my-navy-blue">v</span>
					<span class="text-my-plum">i</span>
					<span class="text-my-plum">c</span>
					<span class="text-my-dark-red">e</span>
					<span class="text-my-golden-rod">s</span>
				</span>
			</h2>

			<div class="flex flex-col gap-lg">
				<div class="flex gap-xl justify-between pb-xl border-b border-my-light-blue">
					<div class="">
						<h3 class="uppercase font-mono">Consultancy</h3>
					</div>
					<p class="w-[400px] text-base text-gray-11">
						Finding the right approach for you. Talking through what you want and the options
						available.
					</p>
				</div>

				<div class="flex gap-xl justify-between pb-xl border-b border-my-light-blue">
					<div class="">
						<h3 class="uppercase font-mono">Site creation</h3>
					</div>
					<p class="w-[400px] text-base text-gray-11">
						Finding the right approach for you. Talking through what you want and the options
						available.
					</p>
				</div>

				<div class="flex gap-xl justify-between pb-xl border-b border-my-light-blue">
					<div class="">
						<h3 class="uppercase font-mono">Platforms</h3>
					</div>
					<p class="w-[400px] text-base text-gray-11">
						Finding the right approach for you. Talking through what you want and the options
						available.
					</p>
				</div>
			</div>
		</div>
	</div>
{/if}

<Projects bind:sectionStatus={projectsStatus} />

<div class="fixed right-sm top-1/2 -translate-y-1/2 flex flex-col items-end gap-md">
	<button
		class="relative flex flex-col items-end uppercase text-xs tracking-wider text-my-light-blue"
		type="button"
	>
		<span class="pr-xxs pl-sm">Ab</span>
		<span class="w-full h-[1px] bg-gradient-to-l from-my-light-blue to-white" />
		<span class="mt-xxxs pr-xxs pl-sm">out</span>
		<span class="w-full h-[1px] bg-gradient-to-l from-my-light-blue to-white" />
	</button>

	<span
		class="absolute right-0 top-0 h-[160%] w-[1px] bg-gradient-to-b from-my-light-blue to-white"
	/>

	<button
		class="relative flex flex-col items-end uppercase text-xs tracking-wider text-my-light-blue"
		type="button"
	>
		<span class="pr-xxs pl-sm">Serv</span>
		<span class="w-full h-[1px] bg-gradient-to-l from-my-light-blue to-white" />
		<span class="mt-xxxs pr-xxs pl-sm">ices</span>
		<span class="w-full h-[1px] bg-gradient-to-l from-my-light-blue to-white" />
	</button>
</div>

<!-- <div class="fixed top-sm left-1/2 -translate-x-1/2">
	<button
		class="flex flex-col items-center uppercase text-xs tracking-wider text-my-light-blue"
		type="button"
	>
		<span class="px-xs">ab</span>
		<span class=" w-[90%] h-[1px] my-linear-grad" />
		<span class="px-xs">out</span>
		<span class="w-[120%] h-[1px] my-linear-grad" />
	</button>
</div> -->

<!-- <div class="fixed bottom-sm left-sm">
	<button
		class="text-xs tracking-wider text-gray-12 underline decoration-gray-12 underline-offset-4"
		type="button"
	>
		<span>hello@tech-poiesis.net</span>
	</button>
</div> -->

<div class="fixed top-sm right-sm">
	<button
		class="text-xs tracking-wider text-gray-12 underline decoration-gray-12 underline-offset-4"
		type="button"
	>
		<span>say hi</span>
	</button>
</div>

<!-- <style>
	@keyframes shimmer {
		0% {
			transform: translateX(-300%);
		}
		13%,
		100% {
			transform: translateX(300%);
		}
	}

	.shimmer {
		@apply absolute left-0 top-0 w-1/2 h-full;

		background: linear-gradient(
			100deg,
			rgba(255, 255, 255, 0) 20%,
			rgba(255, 255, 255, 0.5) 50%,
			rgba(255, 255, 255, 0) 80%
		);
		animation: shimmer 16s infinite linear forwards;
	}
</style> -->

<!-- <style>
	.my-linear-grad {
		background: linear-gradient(to right, white, rgb(100, 149, 237) 50%, white);
		/* background: linear-gradient(to left, #333, #333 50%, #eee 75%, #333 75%); */
	}
</style> -->
