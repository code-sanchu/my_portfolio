<script context="module" lang="ts">
	import { projects } from '^data';
	import { getFirstLetters } from '^helpers';
	import type { ProjectId } from '^types';
	import { crossfade } from 'svelte/transition';

	import Letter from './letter.svelte';
	import { onDestroy, onMount } from 'svelte';

	const projectsArr = Object.values(projects);
</script>

<script lang="ts">
	export let handleShowProjectCard: (projectId: ProjectId) => void;
	export let topFadeOut = false;

	let windowWidth: number;
	let windowHeight: number;

	let collapseTitlesStatus: 'idle' | 'transitioning-out' | 'transitioned' | 'transitioning-in' =
		'idle';

	const [send, receive] = crossfade({ duration: 700 });

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
		const titlesContainer = document.getElementById('titles-container');
		const titlesChangedContainer = document.getElementById('titles-container-changed');

		if (!titlesContainer || !titlesChangedContainer) {
			return;
		}

		titlesPosition = Array.from(titlesContainer.children).map((titleNode) => {
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

		titlesChangedPosition = Array.from(titlesChangedContainer.children).map((titleNode) => {
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

	onMount(() => {
		updateTitlesPosition();

		window.addEventListener('scroll', updateTitlesPosition, { passive: true });
	});

	onDestroy(() => {
		window.removeEventListener('scroll', updateTitlesPosition);
	});
</script>

<svelte:window bind:innerHeight={windowHeight} bind:innerWidth={windowWidth} />

<div class="relative opacity-0">
	<div class={`flex items-start flex-col gap-sm opacity-0`} id="titles-container">
		{#each projectsArr as project, i (project.id)}
			<h4
				class={` relative font-light text-lg flex flex-row gap-xs cursor-pointer`}
				id={`title-${i}`}
			>
				<span class={`text-sm`}>+.</span>
				<span class={`tracking-wider uppercase border-b text-sm`}>{project.title}</span>
			</h4>
		{/each}
	</div>

	<div
		class={`absolute left-0 top-0 w-full flex items-start gap-x-md gap-y-xs flex-wrap`}
		id="titles-container-changed"
	>
		{#each projectsArr as project, i (project.id)}
			<h4
				class={`red-8 relative font-light text-lg flex flex-col gap-xs shrink-0`}
				id={`title-${i}-changed`}
			>
				<span class={`text-sm`}>+.</span>
				<span class={`tracking-wider uppercase border-b text-sm`}
					>{getFirstLetters(project.title)}</span
				>
			</h4>
		{/each}
	</div>
</div>

{#if titlesPosition && titlesChangedPosition}
	{#each projectsArr as project, i (project.id)}
		<span
			class={`fixed font-light ${
				collapseTitlesStatus === 'transitioning-out' || collapseTitlesStatus === 'transitioning-in'
					? 'transition-all ease-in-out duration-[1000ms]'
					: ''
			} ${topFadeOut ? 'text-gray-6' : textColorStrings[i]}`}
			style:top="{collapseTitlesStatus === 'idle' || collapseTitlesStatus === 'transitioning-in'
				? titlesPosition[i].plus.top
				: titlesChangedPosition[i].plus.top}px"
			style:left="{collapseTitlesStatus === 'idle' || collapseTitlesStatus === 'transitioning-in'
				? titlesPosition[i].plus.left
				: titlesChangedPosition[i].plus.left}px"
			style:transition-delay="{i * 50}ms"
		>
			+.
		</span>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<span
			class={`fixed font-light tracking-wider border-b text-sm flex shrink-0 ${
				collapseTitlesStatus === 'transitioning-out' || collapseTitlesStatus === 'transitioning-in'
					? 'transition-all ease-in-out duration-[1000ms]'
					: ''
			}`}
			style:top="{collapseTitlesStatus === 'idle' || collapseTitlesStatus === 'transitioning-in'
				? titlesPosition[i].text.top
				: titlesChangedPosition[i].text.top}px"
			style:left="{collapseTitlesStatus === 'idle' || collapseTitlesStatus === 'transitioning-in'
				? titlesPosition[i].text.left
				: titlesChangedPosition[i].text.left}px"
			style:transition-delay="{i * 50}ms"
			on:click={() => {
				if (collapseTitlesStatus === 'idle') {
					collapseTitlesStatus = 'transitioning-out';

					setTimeout(() => {
						collapseTitlesStatus = 'transitioned';
					}, 700);
				}
				if (collapseTitlesStatus === 'transitioned') {
					collapseTitlesStatus = 'transitioning-in';

					setTimeout(() => {
						collapseTitlesStatus = 'idle';
					}, 700);
				}
			}}
		>
			{#each project.title.split('') as letter}
				<Letter bind:letter bind:collapseStatus={collapseTitlesStatus} />
			{/each}
		</span>
	{/each}
{/if}
