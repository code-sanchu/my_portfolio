<script context="module" lang="ts">
	import { fade } from 'svelte/transition';

	import Projects from '^pages/projects';

	type SectionVisibilityStatus = 'closed' | 'opening' | 'open' | 'closing';
</script>

<script lang="ts">
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
{/if}

<Projects bind:sectionStatus={projectsStatus} />

<div class="fixed right-sm top-1/2 -translate-y-1/2">
	<button
		class="flex flex-col items-end uppercase text-xs tracking-wider text-my-light-blue"
		type="button"
	>
		<span class="pr-xxs pl-sm">Serv</span>
		<span class="w-full h-[1px] bg-gradient-to-l from-my-light-blue to-white" />
		<span class="mt-xxxs pr-xxs pl-sm">ices</span>
		<span class="w-full h-[1px] bg-gradient-to-l from-my-light-blue to-white" />
	</button>

	<span
		class="absolute right-0 top-0 h-[160%] w-[1px] bg-gradient-to-b from-my-light-blue to-white"
	/>
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
