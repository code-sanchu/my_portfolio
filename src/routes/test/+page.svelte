<script context="module" lang="ts">
	import { uid } from 'uid/single';

	import { projects } from '^data';
	import type { ProjectId } from '^types';

	import { AnimateSectionIn } from '^components';
	import { Info } from '^components/+pages/projects/info';
	import MainCard from '^components/+pages/projects/main-card.svelte';
	import { ProjectTitles } from '^components/+pages/projects/project-titles';
</script>

<script lang="ts">
	// collapse titles; overflow-x-hidden

	let shownProjects: (
		| { type: 'info'; key: string; id: ProjectId }
		| { type: 'main-card'; key: string; id: ProjectId }
	)[] = [];

	let projectTitlesWidth: number;

	let enableProjectTitlesCollapse: boolean;
	let showProjectTitles = true;
</script>

<!-- <div
	class={`invisible inline-flex items-start flex-col gap-xxxs sm:gap-xxs`}
	bind:clientWidth={projectTitlesWidth}
	bind:clientHeight={projectTitlesHeight}
>
	{#each Object.values(projects) as project}
		<h4 class="title project-title text-sm xs:text-base sm:text-lg md:text-2xl">
			{project.title}
		</h4>
	{/each}
</div> -->

<div class="fixed inset-[80px]">
	<div class="flex flex-col gap-md md:flex-row md:gap-0 max-h-full pb-md">
		<AnimateSectionIn containerWidth={projectTitlesWidth + 24} color="blue" skipWidthAnimation>
			<div>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<h2
					class="mb-xxs title text-blue-10 text-sm xs:text-base sm:text-lg md:text-2xl cursor-pointer sm/md:cursor-auto"
					on:click={() => {
						if (!enableProjectTitlesCollapse || !shownProjects.length) {
							return;
						}

						showProjectTitles = !showProjectTitles;
					}}
				>
					Projects
				</h2>

				<ProjectTitles
					bind:projectTitlesWidth
					bind:enableProjectTitlesCollapse
					bind:showProjectTitles
					showProject={(projectId) => {
						if (enableProjectTitlesCollapse) {
							showProjectTitles = false;
						}

						setTimeout(
							() => {
								shownProjects = [
									{ id: projectId, type: 'main-card', key: uid() },
									...shownProjects
								];
							},
							enableProjectTitlesCollapse ? 300 : 0
						);
					}}
				/>

				<!-- <div
						class={`mt-xxs flex flex-col gap-xxs sm:gap-xxs transition-all overflow-hidden ease-[cubic-bezier(.79,.18,.36,.92)] duration-300`}
						style:opacity={showProjectTitles ? 1 : 0}
						style:height={showProjectTitles ? `${projectTitlesHeight}px` : '0px'}
					>
						{#each Object.values(projects) as project}
							<h4
								class="title project-title text-sm xs:text-base sm:text-lg md:text-2xl"
								on:click={() => {
									if (enableProjectTitlesCollapse) {
										showProjectTitles = false;
									}

									setTimeout(
										() => {
											shownProjects = [
												{ id: project.id, type: 'main-card', key: uid() },
												...shownProjects
											];
										},
										enableProjectTitlesCollapse ? 300 : 0
									);
								}}
							>
								{project.title}
							</h4>
						{/each}
					</div> -->
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
								onClickInfo: () => {
									if (enableProjectTitlesCollapse) {
										showProjectTitles = false;
									}

									setTimeout(
										() => {
											shownProjects = [
												{ type: 'info', id: shownProject.id, key: uid() },
												...shownProjects
											];
										},
										enableProjectTitlesCollapse ? 300 : 0
									);
								},
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

<style>
	.title {
		@apply font-medium uppercase tracking-wider;
	}
</style>
