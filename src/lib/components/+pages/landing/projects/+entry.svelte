<script context="module" lang="ts">
	import { produce } from 'immer';
	import { ArrowLineLeft, ArrowLineRight } from 'phosphor-svelte';
	import {
		swipe as untypedSwipe,
		type ParametersSwitch,
		type SwipeParameters
	} from 'svelte-gestures';
	import type { Action } from 'svelte/action';
	import { uid } from 'uid/single';

	import { projects } from '^data';
	import type { ProjectId } from '^types';

	import { Section } from '^pages/landing';

	import MainCard from './main-card';

	type ProjectCard = { key: string; id: ProjectId; animateOut: boolean };

	const projectsArr: ProjectId[] = [
		'piros',
		'raie',
		'amy',
		'murat',
		'kindred_yoga',
		'birch',
		'alesh',
		'asatic',
		'blackheath_yoga'
	];

	const swipe: Action<
		HTMLElement,
		ParametersSwitch<SwipeParameters>,
		{
			'on:swipe': (
				e: CustomEvent<{
					[x: string]: string;
				}>
			) => void;
		}
	> = untypedSwipe as any;
</script>

<script lang="ts">
	let windowWidth: number;

	let projectCards: ProjectCard[];

	$: {
		if (windowWidth) {
			const arr: ProjectCard[] = [
				{ key: uid(), id: 'raie', animateOut: false },
				{ key: uid(), id: 'piros', animateOut: false }
			];

			let numCards = windowWidth > 510 ? 3 : 2;

			if (numCards === 3) {
				arr.unshift({ key: uid(), id: 'amy', animateOut: false });
			}

			projectCards = arr;
		}
	}

	const showNextProject = () => {
		let nextProjectIndex: number;

		nextProjectIndex =
			projectCards.length -
			Math.floor(projectCards.length / projectsArr.length) * projectsArr.length;

		const nextProject: ProjectCard = {
			key: uid(),
			id: projectsArr[nextProjectIndex],
			animateOut: false
		};

		projectCards = [nextProject, ...projectCards];

		setTimeout(() => {
			const atLastCard = projectCards.filter((card) => card.animateOut === false).length === 1;

			const isOverflow = containerNode.scrollWidth > containerNode.clientWidth;

			disableShowPrev = atLastCard || !isOverflow;
		}, 700);
	};

	let containerNode: HTMLDivElement;

	let disableShowPrev: boolean;

	$: {
		if (containerNode && projectCards) {
			const atLastCard = projectCards.filter((card) => card.animateOut === false).length === 1;

			const isOverflow = containerNode.scrollWidth > containerNode.clientWidth;

			disableShowPrev = atLastCard || !isOverflow;
		}
	}

	const showPrevProject = () => {
		if (disableShowPrev) {
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

	let disableSwipe = false;

	let mouseDown = false;
</script>

<svelte:window bind:innerWidth={windowWidth} />

{#if projectCards}
	<div class="flex justify-end">
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class={`inline-flex lg:max-w-[85vw] 3xl:max-w-[75vw] overflow-hidden ${
				mouseDown ? 'cursor-grabbing' : 'cursor-grab'
			}`}
			use:swipe={{ timeframe: 700, minSwipeDistance: 30, touchAction: 'pan-y' }}
			on:swipe={(e) => {
				if (disableSwipe) {
					return;
				}
				e.detail.direction === 'left' ? showPrevProject() : showNextProject();
			}}
			on:mousedown={() => (mouseDown = true)}
			on:mouseup={() => (mouseDown = false)}
			bind:this={containerNode}
		>
			{#each projectCards as project (project.key)}
				<MainCard
					data={projects[project.id]}
					bind:animateOut={project.animateOut}
					onPopupClose={() => (disableSwipe = false)}
					onPopupOpen={() => (disableSwipe = true)}
				/>
			{/each}
		</div>
	</div>

	<Section.HorizontalSpacing>
		<div
			class="mt-sm md:mt-md lg:mt-lg xl:mt-xl 2xl:mt-[4rem] flex items-center gap-sm justify-end"
		>
			<button
				class={`relative inline-flex gap-xs items-center border border-gray-6 py-xxs px-xs 2xl:py-xs 2xl:px-sm rounded-lg 2xl:rounded-xl transition-opacity ease-linear duration-200 ${
					disableShowPrev ? 'opacity-60' : ''
				}`}
				on:click={showPrevProject}
				type="button"
			>
				<span class="text-xs lg:text-sm 2xl:text-base">
					<ArrowLineLeft weight="thin" />
				</span>

				<span
					class="translate-y-[1px] text-xxs lg:text-xs xl:text-sm 2xl:text-base uppercase tracking-wider text-gray-11 font-light"
					>Prev</span
				>
			</button>

			<button
				class="relative inline-flex gap-xs items-center border border-gray-6 py-xxs px-xs 2xl:py-xs 2xl:px-sm rounded-lg 2xl:rounded-xl"
				on:click={showNextProject}
				type="button"
			>
				<span class="text-xs lg:text-sm 2xl:text-base">
					<ArrowLineRight weight="thin" />
				</span>

				<span
					class="translate-y-[1px] text-xxs lg:text-xs xl:text-sm 2xl:text-base uppercase tracking-wider text-gray-11 font-light"
					>Next</span
				>
			</button>
		</div>
	</Section.HorizontalSpacing>
{/if}
