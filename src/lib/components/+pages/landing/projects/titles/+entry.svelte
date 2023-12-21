<script context="module" lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	import { projects } from '^data';
	import type { ProjectId } from '^types';

	import { getFirstLetters } from '^helpers';
	import { getTitlesPosition } from './_helpers';

	import Letter from './letter.svelte';

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

	const updateTitlesPosition = () => {
		positions = getTitlesPosition(containerId)!;
		transitionedPositions = getTitlesPosition(containerTransitionedId)!;
	};

	const onClickTitle = (projectId: ProjectId) => {
		if (!transitionEnabled) {
			handleShowProjectCard(projectId);

			return;
		}

		updateTitlesPosition();

		if (transitionStatus === 'idle') {
			transitionStatus = 'idle-clicked';

			setTimeout(() => {
				transitionStatus = 'transitioning-out';

				setTimeout(() => {
					transitionStatus = 'transitioned';

					setTimeout(() => {
						handleShowProjectCard(projectId);
					}, 450);
				}, transitionDuration);
			}, 50);

			return;
		}

		handleShowProjectCard(projectId);
	};

	const handleCollapse = () => {
		updateTitlesPosition();

		if (transitionStatus === 'transitioned') {
			transitionStatus = 'transitioned-clicked';

			setTimeout(() => {
				transitionStatus = 'transitioning-in';

				setTimeout(() => {
					transitionStatus = 'idle';
				}, transitionDuration);
			}, 50);
		}
	};

	let fullHeight: number;
	let collapsedHeight: number;

	let containerNode: HTMLDivElement;

	let animateIn = false;

	const handleAnimateIn = () => {
		if (!containerNode || animateIn) {
			return;
		}

		const rect = containerNode.getBoundingClientRect();

		animateIn = rect.top + 150 < windowHeight;
	};

	onMount(() => {
		handleAnimateIn();
	});
</script>

<svelte:window bind:innerHeight={windowHeight} bind:innerWidth={windowWidth} />
<svelte:document
	on:scroll={() => {
		handleAnimateIn();
	}}
/>

<div
	class={`container relative mt-sm`}
	style:height={!transitionEnabled ||
	transitionStatus === 'idle' ||
	transitionStatus === 'idle-clicked' ||
	transitionStatus === 'transitioning-in'
		? `${fullHeight + 24}px`
		: `${collapsedHeight + 24}px`}
	bind:this={containerNode}
>
	{#if transitionStatus === 'transitioned'}
		<button
			on:click={handleCollapse}
			class="absolute right-0 top-0 uppercase text-[0.6rem] text-gray-6 tracking-wide flex items-center gap-xxs"
			transition:fade={{ delay: 200 }}
			type="button"
		>
			<span>+</span>
			<span>Expand</span>
		</button>
	{/if}

	<div class="relative mt-[2rem]">
		<div
			class={`flex items-start flex-col gap-sm ${
				transitionStatus !== 'idle' ? 'opacity-0 pointer-events-none' : ''
			}`}
			bind:clientHeight={fullHeight}
			id={containerId}
		>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
			{#each projectsArr as project, i (project.id)}
				<h4
					class={`font-light flex flex-row gap-xs items-center cursor-pointer transition-opacity duration-700 ease-in-out ${
						transitionStatus !== 'idle' ? 'pointer-events-none invisible' : ''
					} ${!animateIn ? 'opacity-0 ' : ''}`}
					style:transition-delay="{i * 70}ms"
					on:click={() => onClickTitle(project.id)}
				>
					<span
						class={`text-sm transition-colors ease-in-out duration-700 ${
							topFadeOut ? 'text-gray-6' : textColorStrings[i]
						}`}>+.</span
					>
					<span
						class={`tracking-wider border-b text-sm flex gap-[0.05em] transition-colors ease-in-out duration-700 ${
							topFadeOut ? 'text-gray-6' : 'text-gray-11'
						}`}
					>
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
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<h4
					class="font-light flex flex-col items-center gap-xs shrink-0 cursor-pointer"
					on:click={() => onClickTitle(project.id)}
				>
					<span
						class={`text-sm transition-colors ease-in-out duration-700  ${
							topFadeOut ? 'text-gray-6' : textColorStrings[i]
						}`}>+.</span
					>
					<span
						class={`tracking-wider border-b text-sm border-b-transparent transition-colors ease-in-out duration-700 ${
							topFadeOut ? 'text-gray-6' : 'text-gray-11'
						}`}>{getFirstLetters(project.title)}</span
					>
				</h4>
			{/each}
		</div>

		{#if positions && transitionedPositions && transitionStatus !== 'idle' && transitionStatus !== 'transitioned'}
			{#each projectsArr as project, i (project.id)}
				{@const transitionOut =
					transitionStatus === 'transitioning-out' || transitionStatus === 'transitioned-clicked'}
				<span
					class={`text-sm absolute font-light ${textColorStrings[i]} transition-all ease-in-out duration-1000`}
					style:top="{!transitionOut ? positions[i].plus.top : transitionedPositions[i].plus.top}px"
					style:left="{!transitionOut
						? positions[i].plus.left
						: transitionedPositions[i].plus.left}px"
				>
					+.
				</span>

				<span
					class={`absolute font-light border-b text-sm flex tracking-wider transition-all ease-in-out duration-1000 text-gray-11`}
					style:top="{!transitionOut ? positions[i].text.top : transitionedPositions[i].text.top}px"
					style:left="{!transitionOut
						? positions[i].text.left
						: transitionedPositions[i].text.left}px"
				>
					{#each project.title.split('') as letter}
						<Letter bind:letter bind:transitionStatus />
					{/each}
				</span>
			{/each}
		{/if}
	</div>
</div>

<style>
	.container {
		transition: opacity 700ms ease-in-out, height 1850ms ease-in-out;
	}
</style>
