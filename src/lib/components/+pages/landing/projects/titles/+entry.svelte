<script context="module" lang="ts">
	import { projects } from '^data';
	import type { ProjectId } from '^types';

	import { getTitlesPosition } from './_helpers';
	import { getFirstLetters } from '^helpers';
	import Letter from './letter.svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	const projectsArr = Object.values(projects);

	const containerId = 'container';
	const containerTransitionedId = 'container-transitioned';

	const transitionDuration = 1000;

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

<script lang="ts">
	export let handleShowProjectCard: (projectId: ProjectId) => void;
	export let topFadeOut: boolean;

	let windowWidth: number;
	let windowHeight: number;

	$: transitionEnabled = windowWidth && windowWidth <= 768;

	let positions: {
		plus: { top: number; left: number };
		text: { top: number; left: number };
	}[];

	let transitionedPositions: {
		plus: { top: number; left: number };
		text: { top: number; left: number };
	}[];

	let transitionStatus:
		| 'idle'
		| 'idle-clicked'
		| 'transitioning-out'
		| 'transitioned'
		| 'transitioned-clicked'
		| 'transitioning-in' = 'idle';

	const onClickTitle = () => {
		positions = getTitlesPosition(containerId)!;
		transitionedPositions = getTitlesPosition(containerTransitionedId)!;

		if (transitionStatus === 'idle') {
			transitionStatus = 'idle-clicked';

			setTimeout(() => {
				transitionStatus = 'transitioning-out';

				setTimeout(() => {
					transitionStatus = 'transitioned';
				}, transitionDuration);
			}, 50);
		}
	};

	const handleCollapse = () => {
		positions = getTitlesPosition(containerId)!;
		transitionedPositions = getTitlesPosition(containerTransitionedId)!;

		transitionStatus = 'transitioned-clicked';

		setTimeout(() => {
			transitionStatus = 'transitioning-in';

			setTimeout(() => {
				transitionStatus = 'idle';
			}, transitionDuration);
		}, 50);
	};

	let containerNode: HTMLDivElement;

	let fullHeight: number;
	let collapsedHeight: number;
</script>

<svelte:window bind:innerHeight={windowHeight} bind:innerWidth={windowWidth} />

<div class={` `} bind:this={containerNode}>
	<div
		class={`flex items-start flex-col gap-sm ${
			transitionStatus !== 'idle' ? 'opacity-0 pointer-events-none' : ''
		}`}
		id={containerId}
	>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		{#each projectsArr as project, i (project.id)}
			<h4
				class={` font-light flex flex-row gap-xs items-center cursor-pointer ${
					transitionStatus !== 'idle' ? 'opacity-0 pointer-events-none' : ''
				}`}
				on:click={() => onClickTitle()}
			>
				<span class={`text-sm ${textColorStrings[i]}`}>+.</span>
				<span class="tracking-wider border-b text-sm flex gap-[0.05em]">
					{#each project.title.split('') as letter}
						{@html letter === ' ' ? '&nbsp;' : letter}
					{/each}
				</span>
			</h4>
		{/each}
	</div>

	<div
		class={`absolute left-0 top-0 w-full flex items-start gap-x-md gap-y-xs flex-wrap ${
			transitionStatus !== 'transitioned' ? 'opacity-0 pointer-events-none' : ''
		}`}
		bind:clientHeight={collapsedHeight}
		id={containerTransitionedId}
	>
		{#each projectsArr as project, i (project.id)}
			<h4 class="font-light flex flex-col items-center gap-xs shrink-0">
				<span class={`text-sm ${textColorStrings[i]}`}>+.</span>
				<span class="tracking-wider border-b text-sm border-b-transparent"
					>{getFirstLetters(project.title)}</span
				>
			</h4>
		{/each}
	</div>
</div>

{#if transitionStatus === 'transitioned' && transitionedPositions}
	<button
		on:click={handleCollapse}
		class="fixed z-10 uppercase text-[0.6rem] text-gray-6 tracking-wide right-sm -translate-y-full flex items-center gap-xxs"
		style:top="{transitionedPositions[0].plus.top - 13}px"
		type="button"
		transition:fade={{ delay: 200 }}
	>
		<span>+</span>
		<span>Expand</span></button
	>
{/if}

{#if positions && transitionedPositions && transitionStatus !== 'idle' && transitionStatus !== 'transitioned'}
	{#each projectsArr as project, i (project.id)}
		{@const transitionOut =
			transitionStatus === 'transitioning-out' || transitionStatus === 'transitioned-clicked'}
		<span
			class={`text-sm fixed font-light ${textColorStrings[i]} transition-all ease-in-out duration-1000`}
			style:top="{!transitionOut ? positions[i].plus.top : transitionedPositions[i].plus.top}px"
			style:left="{!transitionOut ? positions[i].plus.left : transitionedPositions[i].plus.left}px"
		>
			+.
		</span>

		<span
			class={`fixed font-light border-b text-sm flex tracking-wider transition-all ease-in-out duration-1000`}
			style:top="{!transitionOut ? positions[i].text.top : transitionedPositions[i].text.top}px"
			style:left="{!transitionOut ? positions[i].text.left : transitionedPositions[i].text.left}px"
		>
			{#each project.title.split('') as letter}
				<Letter bind:letter bind:transitionStatus />
			{/each}
		</span>
	{/each}
{/if}
