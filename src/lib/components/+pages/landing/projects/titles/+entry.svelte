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

	let windowWidth: number;
	let windowHeight: number;

	let collapseTitles = false;

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

	let title1UnchangedNodeText: HTMLSpanElement;
	$: title1UnchangedNodeTextRect = title1UnchangedNodeText?.getBoundingClientRect();

	let title1UnchangedNodePlus: HTMLSpanElement;
	$: title1UnchangedNodePlusRect = title1UnchangedNodePlus?.getBoundingClientRect();

	let title1ChangedNodeText: HTMLSpanElement;
	$: title1ChangedNodeTextRect = title1ChangedNodeText?.getBoundingClientRect();

	let title1ChangedNodePlus: HTMLSpanElement;
	$: title1ChangedNodePlusRect = title1ChangedNodePlus?.getBoundingClientRect();

	let title2UnchangedNodeText: HTMLSpanElement;
	$: title2UnchangedNodeTextRect = title2UnchangedNodeText?.getBoundingClientRect();

	let title2UnchangedNodePlus: HTMLSpanElement;
	$: title2UnchangedNodePlusRect = title2UnchangedNodePlus?.getBoundingClientRect();

	let title2ChangedNodeText: HTMLSpanElement;
	$: title2ChangedNodeTextRect = title2ChangedNodeText?.getBoundingClientRect();

	let title2ChangedNodePlus: HTMLSpanElement;
	$: title2ChangedNodePlusRect = title2ChangedNodePlus?.getBoundingClientRect();
</script>

<svelte:window bind:innerHeight={windowHeight} bind:innerWidth={windowWidth} />

<div class={`fixed invisible top-1/2 flex items-start gap-x-md gap-y-xs flex-wrap`}>
	<h4 class={`opacity-0 relative font-light text-lg flex flex-col gap-xs shrink-0`}>
		<span class={`text-sm`} bind:this={title1ChangedNodePlus}>+.</span>
		<span class={`tracking-wider uppercase border-b text-sm`} bind:this={title1ChangedNodeText}
			>{getFirstLetters(projectsArr[0].title)}</span
		>
	</h4>

	<h4 class={`opacity-0 relative font-light text-lg flex flex-col gap-xs shrink-0`}>
		<span class={`text-sm`} bind:this={title2ChangedNodePlus}>+.</span>
		<span class={`tracking-wider uppercase border-b text-sm`} bind:this={title2ChangedNodeText}
			>{getFirstLetters(projectsArr[1].title)}</span
		>
	</h4>
</div>

<div class={`fixed top-1/2 left-sm right-sm flex items-start flex-col gap-sm`}>
	<h4 class={`opacity-0 relative font-light text-lg flex flex-row gap-xs cursor-pointer`}>
		<span class={`text-sm `} bind:this={title1UnchangedNodePlus}>+.</span>
		<span class={`tracking-wider uppercase border-b text-sm`} bind:this={title1UnchangedNodeText}
			>{projectsArr[0].title}</span
		>
	</h4>

	<h4 class={`opacity-0 relative font-light text-lg flex flex-row gap-xs cursor-pointer`}>
		<span class={`text-sm `} bind:this={title2UnchangedNodePlus}>+.</span>
		<span class={`tracking-wider uppercase border-b text-sm`} bind:this={title2UnchangedNodeText}
			>{projectsArr[1].title}</span
		>
	</h4>
</div>

{#if title1UnchangedNodeTextRect && title1ChangedNodeTextRect && title1ChangedNodePlusRect && title1UnchangedNodePlusRect}
	{#if !collapseTitles}
		<span
			class={`fixed text-sm transition-colors ease-out duration-700 ${
				topFadeOut ? 'text-gray-6' : textColorStrings[0]
			}`}
			style:top="{title1UnchangedNodePlusRect.top}px"
			style:left="{title1UnchangedNodePlusRect.left}px"
			in:receive={{ key: 'title-1-plus' }}
			out:send={{ key: 'title-1-plus' }}>+.</span
		>

		<span
			class={`fixed text-sm transition-colors ease-out duration-700 ${
				topFadeOut ? 'text-gray-6' : textColorStrings[1]
			}`}
			style:top="{title2UnchangedNodePlusRect.top}px"
			style:left="{title2UnchangedNodePlusRect.left}px"
			in:receive={{ key: 'title-2-plus' }}
			out:send={{ key: 'title-2-plus' }}>+.</span
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

		<span
			class={`fixed text-sm transition-colors ease-out duration-700 ${
				topFadeOut ? 'text-gray-6' : textColorStrings[1]
			}`}
			style:top="{title2ChangedNodePlusRect.top}px"
			style:left="{title2ChangedNodePlusRect.left}px"
			in:receive={{ key: 'title-2-plus' }}
			out:send={{ key: 'title-2-plus' }}>+.</span
		>
	{/if}

	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<span
		class={`fixed tracking-wider border-b text-sm flex shrink-0 transition-all ease-in-out duration-500`}
		style:top="{!collapseTitles
			? title1UnchangedNodeTextRect.top
			: title1ChangedNodeTextRect.top}px"
		style:left="{!collapseTitles
			? title1UnchangedNodeTextRect.left
			: title1ChangedNodeTextRect.left}px"
		on:click={() => (collapseTitles = !collapseTitles)}
	>
		{#each projectsArr[0].title.split('') as letter}
			<Letter bind:letter bind:collapse={collapseTitles} />
		{/each}
	</span>

	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<span
		class={`fixed tracking-wider border-b text-sm flex shrink-0 transition-all ease-in-out duration-500`}
		style:top="{!collapseTitles
			? title2UnchangedNodeTextRect.top
			: title2ChangedNodeTextRect.top}px"
		style:left="{!collapseTitles
			? title2UnchangedNodeTextRect.left
			: title2ChangedNodeTextRect.left}px"
		on:click={() => (collapseTitles = !collapseTitles)}
	>
		{#each projectsArr[1].title.split('') as letter}
			<Letter bind:letter bind:collapse={collapseTitles} />
		{/each}
	</span>
{/if}
