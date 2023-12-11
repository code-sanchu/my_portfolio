<script context="module" lang="ts">
	import { projects } from '^data';
	import type { ProjectId } from '^types';

	import AnimateSectionIn from '^components/animate-section-in.svelte';
	import Info from './info';
	import MainCard from './main-card';

	type ProjectCardType = 'info' | 'main-card';
</script>

<script lang="ts">
	export let shownProjectCards: { type: ProjectCardType; key: string; id: ProjectId }[];
	export let onClickInfo: (projectId: ProjectId) => void;
</script>

<div class="flex">
	{#each shownProjectCards as shownProject (shownProject.key)}
		{@const projectData = projects[shownProject.id]}

		{#if shownProject.type === 'main-card'}
			<AnimateSectionIn
				containerWidth={700}
				bgColor={'bg-gray-6'}
				skipWidthAnimation={shownProjectCards.length === 1}
			>
				<MainCard
					data={{
						title: projectData.title,
						mainPicture: projectData.mainPicture,
						siteUrl: projectData.siteUrl,
						descriptionShort: projectData.descriptionShort,
						year: projectData.year
					}}
					onClickInfo={() => onClickInfo(shownProject.id)}
				/>
			</AnimateSectionIn>
		{:else}
			<AnimateSectionIn containerWidth={500} bgColor="bg-gray-6">
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
				/>
			</AnimateSectionIn>
		{/if}
	{/each}
</div>
