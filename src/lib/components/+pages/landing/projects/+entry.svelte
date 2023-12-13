<script context="module" lang="ts">
	import { onMount } from 'svelte';
	import { uid } from 'uid/single';

	import type { ProjectId } from '^types';

	import Projects from './projects.svelte';
	import Titles from './titles.svelte';

	type ProjectCardType = 'info' | 'main-card';
</script>

<script lang="ts">
	let shownProjectCards: { type: ProjectCardType; key: string; id: ProjectId }[] = [];

	const handleShowProjectCard = (projectId: ProjectId, type: ProjectCardType) => {
		shownProjectCards = [{ id: projectId, type, key: uid() }, ...shownProjectCards];
	};

	let sectionHeightInitial: number;
	let projectCardsContainerHeight: number;

	let node: HTMLDivElement;

	let windowHeight: number;

	let fadeOut: boolean;

	onMount(() => {
		if (fadeOut === undefined) {
			const rect = node.getBoundingClientRect();

			const bottom = rect.bottom;

			const quarterScreenPx = windowHeight / 4;

			fadeOut = bottom < quarterScreenPx || rect.bottom > windowHeight;
		}
	});
</script>

<svelte:document
	on:scroll={() => {
		const rect = node.getBoundingClientRect();

		const quarterScreenPx = windowHeight / 4;

		fadeOut = rect.bottom < quarterScreenPx || rect.bottom > windowHeight;
	}}
/>
<svelte:window bind:innerHeight={windowHeight} />

<div
	class={`mt-3xl overflow-x-hidden pt-3xl flex flex-col sm:gap-lg md:flex-row md:gap-xl h-full sm:pb-md border-t transition-colors ease-out duration-500 ${
		fadeOut ? 'border-gray-4' : 'border-gray-6'
	}`}
	bind:this={node}
>
	<div class="shrink-0" bind:clientHeight={sectionHeightInitial}>
		<h2
			class={`text-xl uppercase tracking-wider mb-lg transition-colors ease-out duration-500 ${
				fadeOut ? 'text-gray-7' : 'text-gray-12'
			}`}
		>
			Projects.
		</h2>

		<div class="relative">
			<Titles
				onClickTitle={(projectId) => handleShowProjectCard(projectId, 'main-card')}
				bind:fadeOut
			/>
		</div>
	</div>

	{#if sectionHeightInitial}
		<div
			class={`relative flex-grow transition-all ease-out duration-500`}
			style:height={projectCardsContainerHeight
				? `${projectCardsContainerHeight}px`
				: `${sectionHeightInitial}px`}
		>
			<div class="absolute inset-0">
				<Projects
					{shownProjectCards}
					onClickInfo={(projectId) => handleShowProjectCard(projectId, 'info')}
					bind:sectionHeight={projectCardsContainerHeight}
					bind:fadeOut
				/>
			</div>
		</div>
	{/if}
</div>
