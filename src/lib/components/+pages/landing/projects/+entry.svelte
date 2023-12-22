<script context="module" lang="ts">
	import { onMount } from 'svelte';
	import { uid } from 'uid/single';

	import type { ProjectId } from '^types';

	import Cards from './cards.svelte';
	import Titles from './titles';

	type ProjectCardType = 'info' | 'main-card';
</script>

<script lang="ts">
	let windowHeight: number;

	let shownProjectCards: { type: ProjectCardType; key: string; id: ProjectId }[] = [];

	const handleShowProjectCard = (projectId: ProjectId, type: ProjectCardType) => {
		shownProjectCards = [{ id: projectId, type, key: uid() }, ...shownProjectCards];
	};

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

<div class={`relative pt-2xl overflow-x-hidden scrollbar-none`} bind:this={containerNode}>
	{#if containerNode}
		<div
			class={`absolute top-0 left-0 transition-all ease-out duration-700 border-t ${
				topFadeOut ? 'border-gray-3' : 'border-gray-6'
			}`}
			style:width={!animateIn ? '0px' : `${containerNode.getBoundingClientRect().width}px`}
		/>
	{/if}

	<div class={`scrollbar-none overflow-x-hidden`}>
		<div class="shrink-0">
			<h2
				class={`text-xl uppercase tracking-[0.075em] transition-colors ease-out duration-700 font-light ${
					!animateIn || topFadeOut ? 'text-gray-6' : 'text-gray-12'
				}`}
				bind:this={headingNode}
			>
				Projects.
			</h2>
		</div>

		<div
			class="relative flex flex-col gap-lg overflow-x-hidden overflow-y-visible scrollbar-none min-h-[300px]"
		>
			<Titles
				bind:topFadeOut
				handleShowProjectCard={(projectId) => {
					handleShowProjectCard(projectId, 'main-card');
				}}
			/>

			<div
				class={`relative mt-xs transition-all ease-linear duration-500 scrollbar-none`}
				style:height={projectCardsContainerHeight ? `${projectCardsContainerHeight}px` : `${0}px`}
			>
				<Cards
					{shownProjectCards}
					onClickInfo={(projectId) => handleShowProjectCard(projectId, 'info')}
					bind:sectionHeight={projectCardsContainerHeight}
					bind:topFadeOut
				/>
			</div>
		</div>
	</div>
</div>
