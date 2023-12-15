<script context="module" lang="ts">
	import { onMount } from 'svelte';
	import { uid } from 'uid/single';

	import type { ProjectId } from '^types';

	import Cards from './cards.svelte';
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

	let containerNode: HTMLDivElement;
	let headingNode: HTMLDivElement;

	let windowHeight: number;

	let animateLineIn = false;
	$: console.log('animateLineIn:', animateLineIn);
	let animateHeadingIn = false;
	$: console.log('animateHeadingIn:', animateHeadingIn);
	let animateProjectTitlesIn = false;

	/* 	$: {
		if (animateLineIn) {
			setTimeout(() => {
				animateProjectTitlesIn = true;
			}, 700);
		} else {
			animateProjectTitlesIn = false;
		}
	} */

	onMount(() => {
		if (!animateLineIn) {
			const rect = headingNode.getBoundingClientRect();

			animateLineIn = rect.bottom < windowHeight;
			animateHeadingIn = rect.bottom < windowHeight;
		}
	});
</script>

<svelte:document
	on:scroll={() => {
		if (!animateLineIn) {
			const rect = headingNode.getBoundingClientRect();

			animateLineIn = rect.bottom < windowHeight;
			animateHeadingIn = rect.bottom < windowHeight;
		}
	}}
/>
<svelte:window bind:innerHeight={windowHeight} />

<div class={`relative pt-2xl`} bind:this={containerNode}>
	{#if containerNode}
		<div
			class="absolute top-0 left-0 transition-all ease-out duration-700 border-t border-gray-6"
			style:width={!animateLineIn ? '0px' : `${containerNode.getBoundingClientRect().width}px`}
			style:opacity={!animateLineIn ? 0 : 1}
		/>
	{/if}

	<div class={`overflow-x-hidden flex gap-xl`}>
		<div class="shrink-0" bind:clientHeight={sectionHeightInitial}>
			<h2
				class={`text-xl uppercase tracking-wider mb-lg transition-colors ease-out duration-700 ${
					!animateHeadingIn ? 'text-gray-7' : 'text-gray-12'
				}`}
				bind:this={headingNode}
			>
				Projects.
			</h2>

			<div class={`transition-opacity ease-out duration-500 ${!animateProjectTitlesIn ? '' : ''}`}>
				<Titles onClickTitle={(projectId) => handleShowProjectCard(projectId, 'main-card')} />
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
					<Cards
						{shownProjectCards}
						onClickInfo={(projectId) => handleShowProjectCard(projectId, 'info')}
						bind:sectionHeight={projectCardsContainerHeight}
					/>
				</div>
			</div>
		{/if}
	</div>
</div>
