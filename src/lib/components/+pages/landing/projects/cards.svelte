<script context="module" lang="ts">
	import { projects } from '^data';
	import type { ProjectId } from '^types';

	import AnimateCardIn from './animate-card-in.svelte';
	import Info from './info-card';
	import MainCard from './main-card';

	type ProjectCardType = 'info' | 'main-card';
</script>

<script lang="ts">
	export let shownProjectCards: { type: ProjectCardType; key: string; id: ProjectId }[];
	export let onClickInfo: (projectId: ProjectId) => void;
	export let sectionHeight: number;

	export let topFadeOut: boolean;
</script>

<div class="flex" bind:clientHeight={sectionHeight}>
	{#each shownProjectCards as shownProject (shownProject.key)}
		{@const projectData = projects[shownProject.id]}

		{#if shownProject.type === 'main-card'}
			<AnimateCardIn containerWidth={700} skipWidthAnimation={shownProjectCards.length === 1}>
				<MainCard
					data={{
						title: projectData.title,
						mainPicture: projectData.mainPicture,
						siteUrl: projectData.siteUrl,
						workDescription: projectData.workDescription,
						year: projectData.year
					}}
					onClickInfo={() => onClickInfo(shownProject.id)}
					bind:topFadeOut
				/>
			</AnimateCardIn>
		{:else}
			<AnimateCardIn containerWidth={500}>
				<Info
					data={{
						descriptionLong: projectData.descriptionLong,
						title: projectData.title,
						siteUrl: projectData.siteUrl,
						performanceUrl: projectData.performanceUrl,
						features: projectData.features,
						year: projectData.year
					}}
					componentKey={shownProject.key}
					bind:topFadeOut
				/>
			</AnimateCardIn>
		{/if}
	{/each}
</div>
