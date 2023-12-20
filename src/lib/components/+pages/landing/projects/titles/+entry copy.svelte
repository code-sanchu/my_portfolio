<script context="module" lang="ts">
	import { projects } from '^data';
	import { getFirstLetters } from '^helpers';
	import type { ProjectId } from '^types';
	import { crossfade } from 'svelte/transition';

	import Letter from './letter.svelte';
	import { onDestroy, onMount } from 'svelte';

	const projectsArr = Object.values(projects);

	const isUppercase = (string: string) => /^[A-Z]*$/.test(string);
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

	let title1UnchangedNodeText: HTMLSpanElement;
	$: top1Text = title1UnchangedNodeText?.getBoundingClientRect().top;
	$: left1Text = title1UnchangedNodeText?.getBoundingClientRect().left;

	let title1UnchangedNodePlus: HTMLSpanElement;
	$: top1Plus = title1UnchangedNodePlus?.getBoundingClientRect().top;
	$: left1Plus = title1UnchangedNodePlus?.getBoundingClientRect().left;

	let title1ChangedNodeText: HTMLSpanElement;
	$: top1TextChanged = title1ChangedNodeText?.getBoundingClientRect().top;
	$: left1TextChanged = title1ChangedNodeText?.getBoundingClientRect().left;

	let title1ChangedNodePlus: HTMLSpanElement;
	$: top1PlusChanged = title1ChangedNodePlus?.getBoundingClientRect().top;
	$: left1PlusChanged = title1ChangedNodePlus?.getBoundingClientRect().left;

	const handleScroll = () => {
		if (!title1UnchangedNodeText || !title1UnchangedNodePlus) {
			return;
		}

		top1Text = title1UnchangedNodeText.getBoundingClientRect().top;
		left1Text = title1UnchangedNodeText.getBoundingClientRect().left;

		top1Plus = title1UnchangedNodePlus.getBoundingClientRect().top;
		left1Plus = title1UnchangedNodePlus.getBoundingClientRect().left;

		top1TextChanged = title1ChangedNodeText.getBoundingClientRect().top;
		left1TextChanged = title1ChangedNodeText.getBoundingClientRect().left;

		top1PlusChanged = title1ChangedNodePlus.getBoundingClientRect().top;
		left1PlusChanged = title1ChangedNodePlus.getBoundingClientRect().left;
	};

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
	});

	onDestroy(() => {
		window.removeEventListener('scroll', handleScroll);
	});
</script>

<svelte:window bind:innerHeight={windowHeight} bind:innerWidth={windowWidth} />

<div class="relative opacity-0">
	<div class={`flex items-start flex-col gap-sm opacity-0`}>
		<h4 class={` relative font-light text-lg flex flex-row gap-xs cursor-pointer`}>
			<span class={`text-sm`} bind:this={title1UnchangedNodePlus}>+.</span>
			<span class={`tracking-wider uppercase border-b text-sm`} bind:this={title1UnchangedNodeText}
				>{projectsArr[0].title}</span
			>
		</h4>
	</div>

	<div class={`absolute left-0 top-0 w-full flex items-start gap-x-md gap-y-xs flex-wrap`}>
		<h4 class={`red-8 relative font-light text-lg flex flex-col gap-xs shrink-0`}>
			<span class={`text-sm`} bind:this={title1ChangedNodePlus}>+.</span>
			<span class={`tracking-wider uppercase border-b text-sm`} bind:this={title1ChangedNodeText}
				>{getFirstLetters(projectsArr[0].title)}</span
			>
		</h4>
	</div>
</div>

{#if collapseTitlesStatus === 'idle' || collapseTitlesStatus === 'transitioning-in'}
	<span
		class={`fixed text-sm transition-colors ease-out duration-700 left-sm ${
			topFadeOut ? 'text-gray-6' : textColorStrings[0]
		}`}
		style:top="{top1Plus}px"
		style:left="{left1Plus}px"
		in:receive={{ key: 'title-1-plus' }}
		out:send={{ key: 'title-1-plus' }}>+.</span
	>
{:else}
	<span
		class={`fixed text-sm transition-colors ease-out duration-700 ${
			topFadeOut ? 'text-gray-6' : textColorStrings[0]
		}`}
		style:top="{top1PlusChanged}px"
		style:left="{left1PlusChanged}px"
		in:receive={{ key: 'title-1-plus' }}
		out:send={{ key: 'title-1-plus' }}>+.</span
	>
{/if}

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<span
	class={`fixed font-light tracking-wider border-b text-sm flex shrink-0 ${
		collapseTitlesStatus === 'transitioning-out' || collapseTitlesStatus === 'transitioning-in'
			? 'transition-all ease-in-out duration-500'
			: ''
	}`}
	style:top="{collapseTitlesStatus === 'idle' || collapseTitlesStatus === 'transitioning-in'
		? top1Text
		: top1TextChanged}px"
	style:left="{collapseTitlesStatus === 'idle' || collapseTitlesStatus === 'transitioning-in'
		? left1Text
		: left1TextChanged}px"
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
	{#each projectsArr[0].title.split('') as letter}
		<Letter bind:letter bind:collapseStatus={collapseTitlesStatus} />
	{/each}
</span>
