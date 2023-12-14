<script context="module" lang="ts">
	import { projects } from '^data';
	import type { ProjectId } from '^types';

	const projectsArr = Object.values(projects);
</script>

<script lang="ts">
	export let onClickTitle: (projectId: ProjectId) => void;

	const textColorStrings = [
		'text-my-olive',
		'text-my-light-blue',
		'text-my-dark-red',
		'text-my-sea-green',
		'text-my-dark-olive',
		'text-my-orange',
		'text-my-dark-slate-gray',
		'text-my-plum',
		'text-my-steel-blue'
	];
</script>

<div class="inline-flex flex-col gap-xxs font-mono">
	{#each projectsArr as project, i}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<h4
			class={`relative cursor-pointer text-lg transition-all ease-out duration-500 ${textColorStrings[i]} hover:text-gray-12 hover:translate-x-[2px]`}
			on:click={() => onClickTitle(project.id)}
		>
			{project.title}
		</h4>
	{/each}
</div>
