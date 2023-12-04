<script context="module" lang="ts">
	import type { ProjectId } from '^types';
	import { projects } from '^data';

	const projectsArr = Object.values(projects);
</script>

<script lang="ts">
	export let containerWidth: number;
	export let onClickTitle: (projectId: ProjectId) => void;

	export let transitionIsEnabled: boolean;
	export let transitionStatus: 'open' | 'closed';

	let projectTitlesHeight: number;
	$: console.log('projectTitlesHeight:', projectTitlesHeight);

	let windowHeight: number;

	$: {
		if (windowHeight) {
			transitionIsEnabled = windowHeight <= 640;
		}
	}
</script>

<svelte:window bind:innerHeight={windowHeight} />

<div
	class="invisible fixed flex flex-col gap-xxs border border-blue-8"
	bind:clientWidth={containerWidth}
	bind:clientHeight={projectTitlesHeight}
>
	{#each projectsArr as project}
		<h4 class="uppercase tracking-wider text-sm xs:text-base sm:text-lg md:text-2xl">
			{project.title}
		</h4>
	{/each}
</div>

{#if projectTitlesHeight}
	<div
		class="inline-flex flex-col gap-xxs transition-all overflow-hidden ease-[cubic-bezier(.79,.18,.36,.92)] duration-300"
		style:opacity={!transitionIsEnabled ? 1 : transitionStatus === 'open' ? 1 : 0}
		style:height={!transitionIsEnabled
			? `${projectTitlesHeight}px`
			: transitionStatus === 'open'
			? `${projectTitlesHeight}px`
			: '0px'}
	>
		{#each projectsArr as project}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
			<h4
				class="uppercase tracking-wider hover:text-blue-10 transition-colors ease-in-out duration-100 text-gray-12 cursor-pointer text-sm xs:text-base sm:text-lg md:text-2xl"
				on:click={() => onClickTitle(project.id)}
			>
				{project.title}
			</h4>
		{/each}
	</div>
{/if}
