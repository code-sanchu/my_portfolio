<script context="module" lang="ts">
	import { uid } from 'uid/single';

	import { projects } from '^data';
	import type { ProjectId } from '^types';

	import { AnimateSectionIn } from '^components';
	import { Info } from '^components/+pages/projects/info';
	import MainCard from '^components/+pages/projects/main-card.svelte';
	import { ProjectTitles } from '^components/+pages/projects/project-titles';

	type ShownProjectCardType = 'info' | 'main-card';
</script>

<script lang="ts">
	let shownProjectCards: { type: ShownProjectCardType; key: string; id: ProjectId }[] = [];

	let projectTitlesWidth: number;

	let projectTitlesTransitionIsEnabled: boolean = true;
	let projectTitlesTransitionStatus: 'open' | 'closed' = 'open';

	const handleShowProject = (projectId: ProjectId, type: ShownProjectCardType) => {
		const delay =
			!projectTitlesTransitionIsEnabled || projectTitlesTransitionStatus === 'closed' ? 0 : 200;

		if (projectTitlesTransitionIsEnabled) {
			projectTitlesTransitionStatus = 'closed';
		}

		setTimeout(() => {
			shownProjectCards = [{ id: projectId, type, key: uid() }, ...shownProjectCards];
		}, delay);
	};
</script>

<div class="fixed inset-[75px]">
	<div class="flex flex-col gap-lg md:flex-row md:gap-0 h-full pb-md">
		<AnimateSectionIn containerWidth={projectTitlesWidth + 24} color="blue" skipWidthAnimation>
			<div>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<h2
					class="mb-xxs font-medium uppercase tracking-wider text-blue-10 text-sm xs:text-base sm:text-lg md:text-2xl cursor-pointer sm/md:cursor-auto"
					on:click={() => {
						if (!projectTitlesTransitionIsEnabled || !shownProjectCards.length) {
							return;
						}

						projectTitlesTransitionStatus =
							projectTitlesTransitionStatus === 'open' ? 'closed' : 'open';
					}}
				>
					Projects
				</h2>

				<ProjectTitles
					bind:containerWidth={projectTitlesWidth}
					bind:transitionIsEnabled={projectTitlesTransitionIsEnabled}
					bind:transitionStatus={projectTitlesTransitionStatus}
					onClickTitle={(projectId) => handleShowProject(projectId, 'main-card')}
				/>
			</div>
		</AnimateSectionIn>

		<div class="flex">
			{#each shownProjectCards as shownProject (shownProject.key)}
				{@const projectData = projects[shownProject.id]}

				{#if shownProject.type === 'main-card'}
					<AnimateSectionIn
						containerWidth={600}
						color="blue"
						skipWidthAnimation={shownProjectCards.length === 1}
					>
						<MainCard
							data={{
								title: projectData.title,
								onClickInfo: () => handleShowProject(shownProject.id, 'info'),
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
</div>
