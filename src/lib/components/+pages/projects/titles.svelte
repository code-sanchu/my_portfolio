<script context="module" lang="ts">
	import type { ProjectId } from '^types';
	import { projects } from '^data';
	import { fade } from 'svelte/transition';

	const projectsArr = Object.values(projects);
</script>

<script lang="ts">
	export let onClickTitle: (projectId: ProjectId) => void;

	export let transitionIsEnabled: boolean;
	export let transitionStatus: 'open' | 'closed';

	let projectTitlesHeight: number;

	let windowHeight: number;

	$: {
		if (windowHeight) {
			transitionIsEnabled = windowHeight <= 640;
		}
	}

	const hoverStrings = [
		'hover:text-my-olive',
		'hover:text-my-light-blue',
		'hover:text-my-dark-red',
		'hover:text-my-sea-green',
		'hover:text-my-dark-olive',
		'hover:text-my-orange',
		'hover:text-my-dark-slate-gray',
		'hover:text-my-plum',
		'hover:text-my-steel-blue'
	];
</script>

<svelte:window bind:innerHeight={windowHeight} />

<div
	class="invisible fixed flex flex-col gap-xxs border border-blue-8"
	bind:clientHeight={projectTitlesHeight}
>
	{#each projectsArr as project}
		<h4 class="tracking-wider text-sm xs:text-base sm:text-lg md:text-xl">
			{project.title}
		</h4>
	{/each}
</div>

{#if projectTitlesHeight}
	<div
		class="mt-sm inline-flex flex-col gap-xxxs transition-all overflow-hidden ease-[cubic-bezier(.79,.18,.36,.92)] duration-300"
		style:opacity={!transitionIsEnabled ? 1 : transitionStatus === 'open' ? 1 : 0}
		style:height={!transitionIsEnabled
			? `${projectTitlesHeight}px`
			: transitionStatus === 'open'
			? `${projectTitlesHeight}px`
			: '0px'}
		transition:fade
	>
		{#each projectsArr as project, i}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
			<h4
				class={`font-mono tracking-wider text-gray-12 transition-colors ease-in-out duration-300 cursor-pointer text-sm xs:text-base sm:text-lg md:text-xl ${hoverStrings[i]}`}
				on:click={() => onClickTitle(project.id)}
			>
				{project.title}
			</h4>
		{/each}
	</div>
{/if}
