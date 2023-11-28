<script context="module" lang="ts">
	import { uid } from 'uid/single';

	import type { ProjectId } from '^types';

	import Animate from './animate.svelte';
	import MainCard from './main-card.svelte';
	import Info from './info.svelte';
	import { projects } from '^data';
</script>

<script lang="ts">
	let shownProjects: (
		| { type: 'info'; key: string; id: ProjectId }
		| { type: 'main-card'; key: string; id: ProjectId }
	)[] = [];
</script>

<div class="flex">
	<Animate containerWidth={320}>
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
	</Animate>

	{#each shownProjects as shownProject, i (shownProject.key)}
		{@const projectData = projects[shownProject.id]}

		{#if shownProject.type === 'main-card'}
			<Animate containerWidth={600}>
				<MainCard
					data={{
						title: projectData.title,
						onClickInfo: () =>
							(shownProjects = [
								{ type: 'info', id: shownProject.id, key: uid() },
								...shownProjects
							]),
						picture: projectData.mainPicture,
						siteUrl: projectData.url
					}}
				/>
			</Animate>
		{:else}
			<Animate containerWidth={500}>
				<Info
					data={{ text: projectData.infoText, title: projectData.title, siteUrl: projectData.url }}
				/>
			</Animate>
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
