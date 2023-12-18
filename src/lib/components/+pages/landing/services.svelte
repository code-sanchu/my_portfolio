<script context="module" lang="ts">
	import { onMount } from 'svelte';
</script>

<script lang="ts">
	let containerNode: HTMLDivElement;
	let headingNode: HTMLDivElement;
	let sectionsNode: HTMLDivElement;

	let windowHeight: number;

	let animateIn1 = false;
	let animateIn2 = false;

	let topFadeOut = false;

	onMount(() => {
		if (!animateIn1) {
			const headingRect = headingNode.getBoundingClientRect();

			animateIn1 = headingRect.bottom < windowHeight;
		}

		if (!animateIn2) {
			const sectionsRect = sectionsNode.getBoundingClientRect();

			animateIn2 = sectionsRect.bottom - sectionsRect.height / 2 < windowHeight;
		}

		const containerRect = containerNode.getBoundingClientRect();

		const topPos = 200;

		topFadeOut = containerRect.bottom < topPos;
	});
</script>

<svelte:document
	on:scroll={() => {
		if (!animateIn1) {
			const headingRect = headingNode.getBoundingClientRect();

			animateIn1 = headingRect.bottom < windowHeight;
		}

		if (!animateIn2) {
			const sectionsRect = sectionsNode.getBoundingClientRect();

			animateIn2 = sectionsRect.bottom - sectionsRect.height / 2 < windowHeight;
		}

		const containerRect = containerNode.getBoundingClientRect();

		const topPos = 200;

		topFadeOut = containerRect.bottom < topPos;
	}}
/>
<svelte:window bind:innerHeight={windowHeight} />

<div
	class={`relative pt-2xl transition-colors ease-out duration-700 ${
		!animateIn1 || topFadeOut ? 'text-gray-6' : 'text-gray-12'
	}`}
	bind:this={containerNode}
>
	{#if containerNode}
		<div
			class={`absolute top-0 left-0 transition-all ease-out duration-700 border-t ${
				topFadeOut ? 'border-gray-3' : 'border-gray-6'
			}`}
			style:width={!animateIn1 ? '0px' : `${containerNode.getBoundingClientRect().width}px`}
		/>
	{/if}

	<div class={`flex items-start gap-xl justify-between `}>
		<h2
			class={`text-xl uppercase tracking-wider mb-xl transition-colors ease-out duration-700 ${
				!animateIn1 || topFadeOut ? 'text-gray-6' : 'text-gray-12'
			}`}
			bind:this={headingNode}
		>
			Services.
		</h2>

		<div
			class={`flex flex-col gap-xl transition-opacity ease-in duration-300 ${
				animateIn2 ? '' : 'opacity-0'
			}`}
			bind:this={sectionsNode}
		>
			<div
				class={`flex gap-xl justify-between transition-transform ease-out duration-500${
					animateIn2 ? '' : 'translate-y-sm'
				}`}
			>
				<h3
					class={`service-title transition-all ease-out duration-700 ${
						topFadeOut ? 'text-gray-6' : 'text-my-light-blue'
					}`}
				>
					<span class="text-my-light-blue">01.</span> Consultancy
				</h3>
				<p class="text-sm max-w-[400px] leading-relaxed">
					I share my expertise and talk through your options about all things web.
				</p>
			</div>

			<div
				class={`flex gap-xl justify-between transition-transform ease-out duration-500 delay-[50ms] border-t pt-xl border-gray-6 ${
					animateIn2 ? '' : 'translate-y-sm'
				}`}
			>
				<h3
					class={`service-title transition-all ease-out duration-700 ${
						topFadeOut ? 'text-gray-6' : 'text-my-light-blue'
					}`}
				>
					<span class="text-my-light-blue">02.</span> Site creation
				</h3>
				<p class="text-sm max-w-[400px] leading-relaxed">
					A collaborative design process followed by the build, in which I use optimal tech.
				</p>
			</div>

			<div
				class={`flex gap-xl justify-between transition-transform ease-out duration-500 delay-[50ms] border-t pt-xl border-gray-6 ${
					animateIn2 ? '' : 'translate-y-sm'
				}`}
			>
				<h3
					class={`service-title transition-all ease-out duration-700 ${
						topFadeOut ? 'text-gray-6' : 'text-my-light-blue'
					}`}
				>
					<span class="text-my-light-blue">03.</span> Platforms
				</h3>
				<p class="text-sm max-w-[400px] leading-relaxed">
					Site builds and updates on cms platforms such as Squarespace, Cargo and Wordpress.
				</p>
			</div>
		</div>
	</div>
</div>

<style>
	.service-title {
		@apply font-light uppercase text-sm tracking-wide leading-relaxed;
	}
</style>
