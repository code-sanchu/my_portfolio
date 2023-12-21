<script context="module" lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	import { projects } from '^data';
	import { getFirstLetters } from '^helpers';
	import type { ProjectId } from '^types';

	import Letter from './letter.svelte';

	const projectsArr = Object.values(projects);

	const titlesContainerId = 'titles-container';
	const titlesContainerChangedId = 'titles-container-changed';

	const collapseDuration = 1000;
</script>

<script lang="ts">
	export let handleShowProjectCard: (projectId: ProjectId) => void;
	export let topFadeOut: boolean;

	let windowWidth: number;
	let windowHeight: number;

	$: collapseEnabled = windowWidth && windowWidth <= 768;

	let collapseTitlesStatus: 'idle' | 'transitioning-out' | 'transitioned' | 'transitioning-in' =
		'idle';

	const handleClickTitle = (projectId: ProjectId) => {
		if (!collapseEnabled) {
			handleShowProjectCard(projectId);

			return;
		}

		if (collapseTitlesStatus === 'idle') {
			collapseTitlesStatus = 'transitioning-out';

			setTimeout(() => {
				collapseTitlesStatus = 'transitioned';

				setTimeout(() => {
					handleShowProjectCard(projectId);
				}, 450);
			}, collapseDuration);

			return;
		}

		handleShowProjectCard(projectId);
	};

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

	let titlesPosition: {
		plus: { top: number; left: number };
		text: { top: number; left: number };
	}[];

	let titlesChangedPosition: {
		plus: { top: number; left: number };
		text: { top: number; left: number };
	}[];

	const updateTitlesPosition = () => {
		const titlesContainer = document.getElementById(titlesContainerId);
		const titlesChangedContainer = document.getElementById(titlesContainerChangedId);

		if (!titlesContainer || !titlesChangedContainer) {
			return;
		}

		titlesPosition = Array.from(titlesContainer.children)
			.filter((node) => node.tagName === 'H4')
			.map((titleNode) => {
				const plusNode = titleNode.children[0];
				const textNode = titleNode.children[1];

				const plusNodeRect = plusNode.getBoundingClientRect();
				const textNodeRect = textNode.getBoundingClientRect();

				return {
					plus: {
						top: plusNodeRect.top,
						left: plusNodeRect.left
					},
					text: {
						top: textNodeRect.top,
						left: textNodeRect.left
					}
				};
			});

		titlesChangedPosition = Array.from(titlesChangedContainer.children)
			.filter((node) => node.tagName === 'H4')
			.map((titleNode) => {
				const plusNode = titleNode.children[0];
				const textNode = titleNode.children[1];

				const plusNodeRect = plusNode.getBoundingClientRect();
				const textNodeRect = textNode.getBoundingClientRect();

				return {
					plus: {
						top: plusNodeRect.top,
						left: plusNodeRect.left
					},
					text: {
						top: textNodeRect.top,
						left: textNodeRect.left
					}
				};
			});
	};

	let containerNode: HTMLDivElement;

	let useAnimateInTransition = true;
	let animateIn: boolean;

	$: {
		if (animateIn) {
			setTimeout(() => {
				useAnimateInTransition = false;
			}, 500);
		}
	}

	onMount(() => {
		if (!animateIn) {
			if (!containerNode) {
				return;
			}

			const rect = containerNode.getBoundingClientRect();

			animateIn = rect.bottom - rect.height / 2 < windowHeight;
		}

		updateTitlesPosition();

		window.addEventListener('scroll', updateTitlesPosition, { passive: true });
	});

	onDestroy(() => {
		window.removeEventListener('scroll', updateTitlesPosition);
	});

	let fullHeight: number;
	let collapsedHeight: number;

	// todo: maintain height of projects section on collapse;

	// todo: different transition time for opacity on animate-in?
	// todo: top fade out.
</script>

<svelte:window bind:innerHeight={windowHeight} bind:innerWidth={windowWidth} />
<svelte:document
	on:scroll={() => {
		if (!animateIn) {
			if (!containerNode) {
				return;
			}

			const rect = containerNode.getBoundingClientRect();

			animateIn = rect.bottom - rect.height / 2 < windowHeight;
		}
	}}
/>

<div
	class={`relative transition-all duration-[1850ms] delay-0 ease-in-out pointer-events-none`}
	style:height={!fullHeight || !collapsedHeight
		? 'auto'
		: !collapseEnabled ||
		  collapseTitlesStatus === 'idle' ||
		  collapseTitlesStatus === 'transitioning-in'
		? `${fullHeight}px`
		: `${collapsedHeight}px`}
	bind:this={containerNode}
>
	<div
		class="flex items-start flex-col gap-sm pointer-events-none opacity-0"
		bind:clientHeight={fullHeight}
		id={titlesContainerId}
	>
		{#each projectsArr as project (project.id)}
			<h4 class="font-light flex flex-row gap-xs items-center">
				<span class="text-sm">+.</span>
				<span class="tracking-wider border-b text-sm">{project.title}</span>
			</h4>
		{/each}
	</div>

	<div
		class="absolute left-0 top-0 w-full flex items-start gap-x-md gap-y-xs flex-wrap opacity-0 pointer-events-none"
		bind:clientHeight={collapsedHeight}
		id={titlesContainerChangedId}
	>
		{#each projectsArr as project (project.id)}
			<h4 class="font-light text-lg flex flex-col items-center gap-xs shrink-0">
				<span class="text-sm">+.</span>
				<span class="tracking-wider uppercase border-b text-sm"
					>{getFirstLetters(project.title)}</span
				>
			</h4>
		{/each}
	</div>
</div>

{#if titlesPosition && titlesChangedPosition}
	{#if collapseTitlesStatus === 'transitioned'}
		<button
			on:click={() => {
				collapseTitlesStatus = 'transitioning-in';

				setTimeout(() => {
					collapseTitlesStatus = 'idle';
				}, collapseDuration);
			}}
			class="fixed z-10 uppercase text-[0.6rem] text-gray-6 tracking-wide right-sm -translate-y-full flex items-center gap-xxs"
			style:top="{titlesChangedPosition[0].plus.top - 13}px"
			type="button"
			transition:fade={{ delay: 300 }}
		>
			<span>+</span>
			<span>Expand</span></button
		>
	{/if}

	{#each projectsArr as project, i (project.id)}
		<span
			class={`fixed font-light ${
				collapseTitlesStatus === 'transitioning-out' || collapseTitlesStatus === 'transitioning-in'
					? 'transition-all ease-in-out duration-[1000ms]'
					: ''
			} ${topFadeOut ? 'text-gray-6' : textColorStrings[i]}`}
			style:top="{collapseTitlesStatus === 'idle' || collapseTitlesStatus === 'transitioning-in'
				? titlesPosition[i].plus.top - 2
				: titlesChangedPosition[i].plus.top}px"
			style:left="{collapseTitlesStatus === 'idle' || collapseTitlesStatus === 'transitioning-in'
				? titlesPosition[i].plus.left
				: titlesChangedPosition[i].plus.left}px"
			style:transition-delay="{collapseTitlesStatus === 'transitioning-out' ||
			collapseTitlesStatus === 'transitioning-in'
				? i * 50
				: 0}ms"
		>
			+.
		</span>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<span
			class={`fixed border-b font-light tracking-wider text-sm flex shrink-0 cursor-pointer ${
				collapseTitlesStatus === 'transitioning-out' || collapseTitlesStatus === 'transitioning-in'
					? 'transition-all ease-in-out duration-[1000ms]'
					: ''
			} ${collapseTitlesStatus === 'idle' ? '' : 'border-transparent'} `}
			style:top="{collapseTitlesStatus === 'idle' || collapseTitlesStatus === 'transitioning-in'
				? titlesPosition[i].text.top
				: titlesChangedPosition[i].text.top}px"
			style:left="{collapseTitlesStatus === 'idle' || collapseTitlesStatus === 'transitioning-in'
				? titlesPosition[i].text.left
				: titlesChangedPosition[i].text.left}px"
			style:transition-delay="{collapseTitlesStatus === 'transitioning-out' ||
			collapseTitlesStatus === 'transitioning-in'
				? i * 50
				: 0}ms"
			on:click={() => {
				handleClickTitle(project.id);
			}}
		>
			{#each project.title.split('') as letter}
				<Letter bind:letter bind:transitionStatus={collapseTitlesStatus} />
			{/each}
		</span>
	{/each}
{/if}
