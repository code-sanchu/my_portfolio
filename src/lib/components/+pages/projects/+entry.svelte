<script context="module" lang="ts">
	import { uid } from 'uid/single';

	import type { ProjectId } from '^types';

	import { AnimateSectionIn } from '^components';
	import MainCard from './main-card.svelte';
	import { Info } from './info';
	import { projects } from '^data';
</script>

<script lang="ts">
	let shownProjects: (
		| { type: 'info'; key: string; id: ProjectId }
		| { type: 'main-card'; key: string; id: ProjectId }
	)[] = [];
</script>

<div class="flex">
	<AnimateSectionIn containerWidth={320} color="blue" skipWidthAnimation>
		<div>
			<h2 class="text-blue-10 font-medium uppercase tracking-wider text-2xl whitespace-nowrap">
				Projects
			</h2>

			<div class="mt-xxs flex flex-col gap-xxs whitespace-nowrap">
				{#each Object.values(projects) as project}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
					<h4
						class="project-title"
						on:click={() =>
							(shownProjects = [
								{ id: project.id, type: 'main-card', key: uid() },
								...shownProjects
							])}
					>
						{project.title}
					</h4>
				{/each}
			</div>
		</div>
	</AnimateSectionIn>

	{#each shownProjects as shownProject, i (shownProject.key)}
		{@const projectData = projects[shownProject.id]}

		{#if shownProject.type === 'main-card'}
			<AnimateSectionIn
				containerWidth={600}
				color="blue"
				skipWidthAnimation={shownProjects.length === 1}
			>
				<MainCard
					data={{
						title: projectData.title,
						onClickInfo: () =>
							(shownProjects = [
								{ type: 'info', id: shownProject.id, key: uid() },
								...shownProjects
							]),
						picture: projectData.mainPicture,
						siteUrl: projectData.siteUrl
					}}
				/>
			</AnimateSectionIn>
		{:else}
			<AnimateSectionIn containerWidth={500} color="blue">
				<Info
					data={{
						infoText: projectData.infoText,
						title: projectData.title,
						siteUrl: projectData.siteUrl,
						performanceUrl: projectData.performanceUrl,
						features: projectData.features
					}}
					componentKey={shownProject.key}
				/>
			</AnimateSectionIn>
		{/if}
	{/each}
</div>

<style>
	.project-title {
		@apply font-medium uppercase transition-colors ease-in-out duration-100 tracking-wider text-2xl text-gray-12 underline decoration-2 underline-offset-4 cursor-pointer;
	}
	.project-title:hover {
		@apply text-blue-11;
	}
</style>
