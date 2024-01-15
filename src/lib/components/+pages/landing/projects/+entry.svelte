<script context="module" lang="ts">
	import { produce } from 'immer';
	import { ArrowLineLeft, ArrowLineRight } from 'phosphor-svelte';

	import { projects } from '^data';

	import MainCard from './main-card';
	import type { ProjectId } from '^types';
	import { uid } from 'uid/single';

	type ProjectCard = { key: string; id: ProjectId; animateOut: boolean };

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
		{ key: uid(), id: 'raie', animateOut: false },
		{ key: uid(), id: 'piros', animateOut: false }
	];

	const showNextProject = () => {
		let nextProjectIndex: number;

		if (projectCards.length === 1) {
			nextProjectIndex = 0;
		} else {
			nextProjectIndex =
				projectCards.length -
				Math.floor(projectCards.length / projectsArr.length) * projectsArr.length;
		}

		const nextProject: ProjectCard = {
			key: uid(),
			id: projectsArr[nextProjectIndex],
			animateOut: false
		};

		projectCards = [nextProject, ...projectCards];
	};

	const showPrevProject = () => {
		const atLastCard = projectCards.length === 1;

		if (atLastCard) {
			return;
		}

		const updated = produce(projectCards, (draft) => {
			draft[0].animateOut = true;
		});

		projectCards = updated;

		setTimeout(() => {
			const updated2 = produce(projectCards, (draft) => {
				draft.splice(0, 1);
			});

			projectCards = updated2;
		}, 700);
	};
</script>

<div class="flex overflow-hidden">
	{#each projectCards as project (project.key)}
		<MainCard data={projects[project.id]} bind:animateOut={project.animateOut} />
	{/each}
</div>

<div class="mt-sm md:mt-md flex items-center gap-sm">
	<button
		class={`relative inline-flex gap-xs items-center border py-xxs px-xs rounded-lg transition-opacity ease-linear duration-200 ${
			projectCards.length === 1 ? 'opacity-70' : ''
		}`}
		on:click={() => showPrevProject()}
		type="button"
	>
		<span class="text-xs lg:text-sm">
			<ArrowLineLeft weight="thin" />
		</span>

		<span
			class={`translate-y-[1px] text-xxs lg:text-xs uppercase tracking-wider text-gray-11 font-light`}
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
