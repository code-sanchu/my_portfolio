<script context="module" lang="ts">
	import { ArrowLineRight } from 'phosphor-svelte';

	import { projects } from '^data';

	import MainCard from './main-card';
	import type { ProjectId } from '^types';
	import { uid } from 'uid/single';

	type ProjectCard = { key: string; id: ProjectId };

	const projectsArr: ProjectId[] = [
		'raie',
		'piros',
		'amy',
		'murat',
		'kindred_yoga',
		'birch',
		'alesh',
		'asatic',
		'blackheath_yoga'
	];
</script>

<script lang="ts">
	let projectCards: ProjectCard[] = [
		{ key: uid(), id: 'raie' },
		{ key: uid(), id: 'piros' }
	];

	const showNextProject = () => {
		const nextProjectIndex =
			projectCards.length -
			Math.floor(projectCards.length / projectsArr.length) * projectsArr.length;

		const nextProject = { key: uid(), id: projectsArr[nextProjectIndex] };

		projectCards = [nextProject, ...projectCards];
	};
</script>

<div class="flex overflow-hidden">
	{#each projectCards as project (project.key)}
		<MainCard data={projects[project.id]} />
	{/each}
</div>

<div class="mt-sm md:mt-md">
	<button
		class="relative inline-flex gap-xs items-center border py-xxs px-xs rounded-lg"
		on:click={() => showNextProject()}
		type="button"
	>
		<span class="text-xs lg:text-sm">
			<ArrowLineRight weight="thin" />
		</span>

		<span
			class="translate-y-[1px] text-xxs lg:text-xs uppercase tracking-wider text-gray-11 font-light"
			>Next</span
		>
	</button>
</div>
