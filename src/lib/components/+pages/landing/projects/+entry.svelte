<script context="module" lang="ts">
	import { ArrowLineLeft, ArrowLineRight } from 'phosphor-svelte';

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

	let showPrev = 0;

	const showNextProject = () => {
		if (showPrev !== 0) {
			showPrev -= 1;

			return;
		}

		const nextProjectIndex =
			projectCards.length -
			Math.floor(projectCards.length / projectsArr.length) * projectsArr.length;

		const nextProject = { key: uid(), id: projectsArr[nextProjectIndex] };

		projectCards = [nextProject, ...projectCards];
	};

	const showPrevProject = () => {
		const atLastCard = showPrev === projectCards.length - 1;

		if (atLastCard) {
			return;
		}

		showPrev += 1;
	};
</script>

<div class="flex overflow-hidden">
	<div
		class="flex transition-transform duration-[750ms] ease-out"
		style:transform={`translateX(${showPrev * -240}px)`}
	>
		{#each projectCards as project (project.key)}
			<MainCard data={projects[project.id]} />
		{/each}
	</div>
</div>

<div class="mt-sm md:mt-md flex items-center gap-sm">
	<button
		class="relative inline-flex gap-xs items-center border py-xxs px-xs rounded-lg"
		on:click={() => showPrevProject()}
		type="button"
	>
		<span class="text-xs lg:text-sm">
			<ArrowLineLeft weight="thin" />
		</span>

		<span
			class="translate-y-[1px] text-xxs lg:text-xs uppercase tracking-wider text-gray-11 font-light"
			>Prev</span
		>
	</button>
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
