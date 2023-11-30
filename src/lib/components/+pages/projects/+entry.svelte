<script context="module" lang="ts">
	import { uid } from 'uid/single';

	import type { ProjectId } from '^types';

	import { AnimateSectionIn } from '^components';
	import MainCard from './main-card.svelte';
	import { Info } from './info';
	import { projects } from '^data';
	import { getFirstWord } from '^helpers';
</script>

<script lang="ts">
	let windowWidth: number;

	let shownProjects: (
		| { type: 'info'; key: string; id: ProjectId }
		| { type: 'main-card'; key: string; id: ProjectId }
	)[] = [];
</script>

<svelte:window bind:innerWidth={windowWidth} />

{#if windowWidth}
	<div class="flex flex-col gap-md md:flex-row md:gap-0 max-h-full pb-md">
		<AnimateSectionIn containerWidth={320} color="blue" skipWidthAnimation>
			<div>
				<h2 class="title text-blue-10 text-sm xs:text-base sm:text-lg md:text-2xl">Projects</h2>

				<div class="mt-xxs flex flex-wrap gap-x-sm gap-y-xxxs xs:flex-col xs:gap-xxxs sm:gap-xxs">
					{#each Object.values(projects) as project}
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
						<h4
							class="title project-title text-sm xs:text-base sm:text-lg md:text-2xl"
							on:click={() =>
								(shownProjects = [
									{ id: project.id, type: 'main-card', key: uid() },
									...shownProjects
								])}
						>
							{project.title}
							<!-- {windowWidth > 410 ? project.title : getFirstWord(project.title)} -->
						</h4>
					{/each}
				</div>
			</div>
		</AnimateSectionIn>

		<div class="flex scrollbar-none">
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
	</div>
{/if}

<style>
	.title {
		@apply font-medium uppercase tracking-wider;
	}
	.project-title {
		@apply transition-colors ease-in-out duration-100 text-gray-12  cursor-pointer;
	}
	.project-title:hover {
		@apply text-blue-11;
	}
</style>
