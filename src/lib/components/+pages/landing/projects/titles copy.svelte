<script context="module" lang="ts">
	import { projects } from '^data';
	import { getFirstLetters } from '^helpers';
	import type { ProjectId } from '^types';
	import { onMount } from 'svelte';
	import { crossfade } from 'svelte/transition';

	const projectsArr = Object.values(projects);
</script>

<script lang="ts">
	export let handleShowProjectCard: (projectId: ProjectId) => void;

	export let topFadeOut: boolean;

	let node: HTMLDivElement;
	let windowWidth: number;
	let windowHeight: number;

	let animateIn: boolean;

	let collapseTitles: 'idle' | 'collapsing' | 'collapsed' = 'idle';

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

	onMount(() => {
		if (!animateIn) {
			const rect = node.getBoundingClientRect();

			animateIn = rect.bottom - rect.height / 2 < windowHeight;
		}
	});

	const [send, receive] = crossfade({ duration: 1000 });
</script>

<svelte:document
	on:scroll={() => {
		if (!animateIn) {
			const rect = node.getBoundingClientRect();

			animateIn = rect.bottom - rect.height / 2 < windowHeight;
		}
	}}
/>
<svelte:window bind:innerHeight={windowHeight} bind:innerWidth={windowWidth} />

{#if collapseTitles === 'idle'}
	<div
		class={`flex items-start flex-col gap-sm transition-all ease-in duration-300 ${
			!animateIn ? 'opacity-0' : ''
		}`}
		bind:this={node}
	>
		{#each projectsArr as project, i (project.id)}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
			<h4
				class={`relative cursor-pointer font-light text-lg flex flex-row gap-xs transition-all ease-out duration-700 ${
					topFadeOut ? 'text-gray-6' : 'text-gray-9'
				} hover:text-gray-12 ${animateIn ? '' : 'translate-y-xs'} `}
				on:click={() => {
					collapseTitles = 'collapsed';
					/* 					if (windowWidth <= 640 && collapseTitles === 'idle') {
						collapseTitles = 'collapsed';

						setTimeout(() => {
							handleShowProjectCard(project.id);
						}, 200);
					} else {
						handleShowProjectCard(project.id);
					} */
				}}
				style:transition-delay="{i * 50}ms"
				in:send={{ key: project.id }}
				out:receive={{ key: project.id }}
			>
				<span
					class={`text-sm transition-colors ease-out duration-700 ${
						topFadeOut ? 'text-gray-6' : textColorStrings[i]
					}`}>+.</span
				>
				<span
					class={`tracking-wider uppercase border-b text-sm hover:text-gray-12 hover:border-gray-9 transition-all ease-linear duration-200 ${
						topFadeOut ? 'text-gray-6 border-gray-6' : 'text-gray-10 border-gray-5'
					}`}>{project.title}</span
				>
			</h4>
		{/each}
	</div>
{:else}
	<div
		class={`flex transition-all ease-in duration-300 ${
			!animateIn ? 'opacity-0' : ''
		} flex-row flex-wrap gap-x-md`}
		bind:this={node}
	>
		{#each projectsArr as project, i (project.id)}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
			<h4
				class={`relative cursor-pointer font-light text-lg transition-all ease-out duration-700 ${
					topFadeOut ? 'text-gray-6' : 'text-gray-9'
				} hover:text-gray-12 ${animateIn ? '' : 'translate-y-xs'} flex flex-col`}
				on:click={() => {
					collapseTitles = 'idle';
					/* 					if (windowWidth <= 640 && collapseTitles === 'idle') {
						collapseTitles = 'collapsed';

						setTimeout(() => {
							handleShowProjectCard(project.id);
						}, 200);
					} else {
						handleShowProjectCard(project.id);
					} */
				}}
				style:transition-delay="{i * 50}ms"
				in:send={{ key: project.id }}
				out:receive={{ key: project.id }}
			>
				<span
					class={`text-sm transition-colors ease-out duration-700 ${
						topFadeOut ? 'text-gray-6' : textColorStrings[i]
					}`}>+.</span
				>
				<span
					class={`tracking-wider uppercase border-b text-sm hover:text-gray-12 hover:border-gray-9 transition-all ease-linear duration-200 ${
						topFadeOut ? 'text-gray-6 border-gray-6' : 'text-gray-10 border-gray-5'
					}`}>{getFirstLetters(project.title)}</span
				>
			</h4>
		{/each}
	</div>
{/if}
