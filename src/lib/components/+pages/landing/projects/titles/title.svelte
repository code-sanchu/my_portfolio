<script context="module" lang="ts">
	import { projects } from '^data';
	import { getFirstLetters } from '^helpers';
	import type { ProjectId } from '^types';
	import { crossfade } from 'svelte/transition';

	import Letter from './letter.svelte';

	const projectsArr = Object.values(projects);

	const isUppercase = (string: string) => /^[A-Z]*$/.test(string);
</script>

<script lang="ts">
	export let handleShowProjectCard: (projectId: ProjectId) => void;
	export let topFadeOut = false;

	let titlesNodeUntransformed: HTMLDivElement;

	let windowWidth: number;
	let windowHeight: number;

	let collapseTitles1 = false;

	const [send, receive] = crossfade({ duration: 1000 });

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

	let title1UnchangedNodeText: HTMLSpanElement;
	$: title1UnchangedNodeTextRect = title1UnchangedNodeText?.getBoundingClientRect();

	let title1UnchangedNodePlus: HTMLSpanElement;
	$: title1UnchangedNodePlusRect = title1UnchangedNodePlus?.getBoundingClientRect();

	let title1ChangedNodeText: HTMLSpanElement;
	$: title1ChangedNodeTextRect = title1ChangedNodeText?.getBoundingClientRect();

	let title1ChangedNodePlus: HTMLSpanElement;
	$: title1ChangedNodePlusRect = title1ChangedNodePlus?.getBoundingClientRect();
</script>

<svelte:window bind:innerHeight={windowHeight} bind:innerWidth={windowWidth} />

<div
	class={`fixed top-1/2 flex items-start gap-x-md gap-y-xs flex-wrap`}
	bind:this={titlesNodeUntransformed}
>
	{#each projectsArr.slice(0, 1) as project, i}
		<h4 class={`opacity-0 relative font-light text-lg flex flex-col gap-xs shrink-0`}>
			<span class={`text-sm`} bind:this={title1ChangedNodePlus}>+.</span>
			<span class={`tracking-wider uppercase border-b text-sm`} bind:this={title1ChangedNodeText}
				>{getFirstLetters(project.title)}</span
			>
		</h4>
	{/each}
</div>

<div
	class={`fixed top-1/2 left-sm right-sm flex items-start flex-col gap-sm`}
	bind:this={titlesNodeUntransformed}
>
	{#each projectsArr.slice(0, 1) as project, i}
		<h4 class={`opacity-0 relative font-light text-lg flex flex-row gap-xs cursor-pointer`}>
			<span class={`text-sm `} bind:this={title1UnchangedNodePlus}>+.</span>
			<span class={`tracking-wider uppercase border-b text-sm`} bind:this={title1UnchangedNodeText}
				>{project.title}</span
			>
		</h4>
	{/each}
</div>

{#if title1UnchangedNodeTextRect && title1ChangedNodeTextRect && title1ChangedNodePlusRect && title1UnchangedNodePlusRect}
	{#if !collapseTitles1}
		<span
			class={`fixed text-sm transition-colors ease-out duration-700 ${
				topFadeOut ? 'text-gray-6' : textColorStrings[0]
			}`}
			style:top="{title1UnchangedNodePlusRect.top}px"
			style:left="{title1UnchangedNodePlusRect.left}px"
			in:receive={{ key: 'title-1-plus' }}
			out:send={{ key: 'title-1-plus' }}>+.</span
		>
	{:else}
		<span
			class={`fixed text-sm transition-colors ease-out duration-700 ${
				topFadeOut ? 'text-gray-6' : textColorStrings[0]
			}`}
			style:top="{title1ChangedNodePlusRect.top}px"
			style:left="{title1ChangedNodePlusRect.left}px"
			in:receive={{ key: 'title-1-plus' }}
			out:send={{ key: 'title-1-plus' }}>+.</span
		>
	{/if}

	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<span
		class={`fixed tracking-wider border-b text-sm flex shrink-0 transition-all ease-in-out duration-500`}
		style:top="{!collapseTitles1
			? title1UnchangedNodeTextRect.top
			: title1ChangedNodeTextRect.top}px"
		style:left="{!collapseTitles1
			? title1UnchangedNodeTextRect.left
			: title1ChangedNodeTextRect.left}px"
		on:click={() => (collapseTitles1 = !collapseTitles1)}
	>
		{#each projectsArr[0].title.split('') as letter}
			<Letter bind:letter bind:transitionStatus={collapseTitles1} />
		{/each}
	</span>
{/if}
