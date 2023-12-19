<script context="module" lang="ts">
	import { onMount } from 'svelte';
	import { uid } from 'uid/single';

	import type { ProjectId } from '^types';

	import Cards from './cards.svelte';
	import Titles from './titles.svelte';

	type ProjectCardType = 'info' | 'main-card';
</script>

<script lang="ts">
	let windowHeight: number;

	let shownProjectCards: { type: ProjectCardType; key: string; id: ProjectId }[] = [];

	const handleShowProjectCard = (projectId: ProjectId, type: ProjectCardType) => {
		shownProjectCards = [{ id: projectId, type, key: uid() }, ...shownProjectCards];
	};

	let sectionHeightInitial: number;
	let projectCardsContainerHeight: number;

	let containerNode: HTMLDivElement;
	let headingNode: HTMLDivElement;

	let animateIn = false;

	let topFadeOut = false;

	onMount(() => {
		if (!animateIn) {
			const headingRect = headingNode.getBoundingClientRect();

			animateIn = headingRect.bottom < windowHeight;
		}

		const containerRect = containerNode.getBoundingClientRect();

		const topPos = 300;

		topFadeOut = containerRect.bottom < topPos;
	});
</script>

<svelte:document
	on:scroll={() => {
		if (!animateIn) {
			const headingRect = headingNode.getBoundingClientRect();

			animateIn = headingRect.bottom < windowHeight;
		}

		const containerRect = containerNode.getBoundingClientRect();

		const topPos = 300;

		topFadeOut = containerRect.bottom < topPos;
	}}
/>
<svelte:window bind:innerHeight={windowHeight} />

<div class={`relative pt-2xl overflow-hidden`} bind:this={containerNode}>
	{#if containerNode}
		<div
			class={`absolute top-0 left-0 transition-all ease-out duration-700 border-t ${
				topFadeOut ? 'border-gray-3' : 'border-gray-6'
			}`}
			style:width={!animateIn ? '0px' : `${containerNode.getBoundingClientRect().width}px`}
		/>
	{/if}

	<div class={`overflow-hidden`}>
		<div class="shrink-0" bind:clientHeight={sectionHeightInitial}>
			<h2
				class={`text-xl uppercase tracking-[0.075em]  mb-xl transition-colors ease-out duration-700 font-light ${
					!animateIn || topFadeOut ? 'text-gray-6' : 'text-gray-12'
				}`}
				bind:this={headingNode}
			>
				Projects.
			</h2>
		</div>

		<div class="flex flex-col gap-lg overflow-hidden">
			<Titles
				bind:topFadeOut
				handleShowProjectCard={(projectId) => {
					handleShowProjectCard(projectId, 'main-card');
				}}
			/>

			{#if sectionHeightInitial}
				<div
					class={`relative flex-grow transition-all ease-linear duration-500`}
					style:height={projectCardsContainerHeight
						? `${projectCardsContainerHeight}px`
						: `${sectionHeightInitial}px`}
				>
					<div class="absolute inset-0">
						<Cards
							{shownProjectCards}
							onClickInfo={(projectId) => handleShowProjectCard(projectId, 'info')}
							bind:sectionHeight={projectCardsContainerHeight}
							bind:topFadeOut
						/>
					</div>
				</div>
			{/if}
		</div>
	</div>
</div>
