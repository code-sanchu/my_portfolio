<script context="module" lang="ts">
	import { onMount } from 'svelte';
</script>

<script lang="ts">
	let containerNode: HTMLDivElement;
	let headingNode: HTMLDivElement;
	let sectionsNode: HTMLDivElement;

	let windowHeight: number;

	let animateIn1 = false;
	let animateSectionsIn = false;
	$: console.log('animateSectionsIn:', animateSectionsIn);

	onMount(() => {
		if (!animateIn1 && !animateSectionsIn) {
			const headingRect = headingNode.getBoundingClientRect();

			animateIn1 = headingRect.bottom < windowHeight;
		}

		if (!animateSectionsIn) {
			const sectionsRect = sectionsNode.getBoundingClientRect();

			animateSectionsIn = sectionsRect.bottom < windowHeight;
		}
	});
</script>

<svelte:document
	on:scroll={() => {
		if (!animateIn1 && !animateSectionsIn) {
			const headingRect = headingNode.getBoundingClientRect();

			animateIn1 = headingRect.bottom < windowHeight;
		}

		if (!animateSectionsIn) {
			const sectionsRect = sectionsNode.getBoundingClientRect();

			animateSectionsIn = sectionsRect.bottom < windowHeight;
		}
	}}
/>
<svelte:window bind:innerHeight={windowHeight} />

<div class={`relative pt-2xl`} bind:this={containerNode}>
	{#if containerNode}
		<div
			class="absolute top-0 left-0 transition-all ease-out duration-700 border-t border-gray-6"
			style:width={!animateIn1 ? '0px' : `${containerNode.getBoundingClientRect().width}px`}
		/>
	{/if}

	<div class={`flex gap-xl justify-between `}>
		<h2
			class={`text-xl uppercase tracking-wider mb-lg transition-colors ease-out duration-700 ${
				!animateIn1 ? 'text-gray-6' : 'text-gray-12'
			}`}
			bind:this={headingNode}
		>
			Services.
		</h2>

		<div
			class={`flex flex-col gap-xl transition-opacity ease-in duration-300 ${
				animateSectionsIn ? '' : 'opacity-0'
			}`}
			bind:this={sectionsNode}
		>
			<div
				class={`flex gap-xl justify-between transition-transform ease-out duration-500 ${
					animateSectionsIn ? '' : 'translate-y-sm'
				}`}
			>
				<h3 class="service-title">Consultancy</h3>
				<p class="text-sm max-w-[400px] leading-relaxed">
					I share my expertise and talk through your options about all things web.
				</p>
			</div>

			<div
				class={`flex gap-xl justify-between transition-transform ease-out duration-500 delay-[50ms] ${
					animateSectionsIn ? '' : 'translate-y-sm'
				}`}
			>
				<h3 class="service-title">Site creation</h3>
				<p class="text-sm max-w-[400px] leading-relaxed">
					A collaborative design process followed by the build, in which I use optimal tech.
				</p>
			</div>

			<div
				class={`flex gap-xl justify-between transition-transform ease-out duration-500 delay-[50ms] ${
					animateSectionsIn ? '' : 'translate-y-sm'
				}`}
			>
				<h3 class="service-title">Platforms</h3>
				<p class="text-sm max-w-[400px] leading-relaxed">
					Site builds and updates on cms platforms such as Squarespace, Cargo and Wordpress.
				</p>
			</div>
		</div>
	</div>
</div>

<style>
	.service-title {
		@apply text-my-golden-rod font-light text-lg font-mono tracking-wide leading-relaxed;
	}
</style>
