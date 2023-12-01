<script context="module" lang="ts">
	import type { ProjectId } from '^types';
	import { projects } from '^data';

	const projectsArr = Object.values(projects);
</script>

<script lang="ts">
	export let projectTitlesWidth: number;
	export let showProject: (projectId: ProjectId) => void;
	export let showProjectTitles: boolean;
	export let enableProjectTitlesCollapse: boolean;

	let projectTitlesHeight: number;

	let windowHeight: number;

	$: {
		if (windowHeight) {
			enableProjectTitlesCollapse = windowHeight <= 640;
		}
	}
</script>

<svelte:window bind:innerHeight={windowHeight} />

<div
	class={`invisible fixed inline-flex items-start flex-col gap-xxxs sm:gap-xxs`}
	bind:clientWidth={projectTitlesWidth}
	bind:clientHeight={projectTitlesHeight}
>
	{#each projectsArr as project}
		<h4 class="font-medium uppercase tracking-wider text-sm xs:text-base sm:text-lg md:text-2xl">
			{project.title}
		</h4>
	{/each}
</div>

<div
	class="flex flex-col gap-xxs sm:gap-xxs transition-all overflow-hidden ease-[cubic-bezier(.79,.18,.36,.92)] duration-300"
	style:opacity={showProjectTitles ? 1 : 0}
	style:height={showProjectTitles ? `${projectTitlesHeight}px` : '0px'}
>
	{#each projectsArr as project}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<h4
			class="font-medium uppercase tracking-wider hover:text-blue-11 transition-colors ease-in-out duration-100 text-gray-12 cursor-pointer text-sm xs:text-base sm:text-lg md:text-2xl"
			on:click={() => {
				if (enableProjectTitlesCollapse) {
					showProjectTitles = false;
				}

				setTimeout(() => showProject(project.id), enableProjectTitlesCollapse ? 300 : 0);
			}}
		>
			{project.title}
		</h4>
	{/each}
</div>
