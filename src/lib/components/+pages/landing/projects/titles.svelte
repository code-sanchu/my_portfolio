<script context="module" lang="ts">
	import { projects } from '^data';
	import { getFirstLetters } from '^helpers';
	import { flip } from 'svelte/animate';
	import { crossfade } from 'svelte/transition';

	const projectsArr = Object.values(projects);
</script>

<script lang="ts">
	let topFadeOut = false;

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
</script>

<svelte:window bind:innerHeight={windowHeight} bind:innerWidth={windowWidth} />

<div
	class={`fixed top-1/2 flex items-start gap-x-md gap-y-xs flex-wrap`}
	bind:this={titlesNodeUntransformed}
>
	{#each projectsArr.filter((_) => collapseTitles1) as project, i}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<h4
			class={`relative font-light text-lg flex flex-col gap-xs shrink-0`}
			on:click={() => {
				collapseTitles1 = !collapseTitles1;
			}}
			in:receive={{ key: `${project.id}` }}
			out:send={{ key: `${project.id}` }}
		>
			<span
				class={`text-sm transition-colors ease-out duration-700 ${
					topFadeOut ? 'text-gray-6' : textColorStrings[i]
				}`}>+.</span
			>
			<span class={`tracking-wider uppercase border-b text-sm`}
				>{getFirstLetters(project.title)}</span
			>
		</h4>
	{/each}
</div>

<div
	class={`fixed top-1/2 left-sm right-sm flex items-start flex-col gap-sm`}
	bind:this={titlesNodeUntransformed}
>
	{#each projectsArr.filter((_) => !collapseTitles1) as project, i}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<h4
			class={`relative font-light text-lg flex flex-row gap-xs`}
			on:click={() => {
				collapseTitles1 = !collapseTitles1;
			}}
			in:receive={{ key: project.id }}
			out:send={{ key: project.id }}
		>
			<span
				class={`text-sm transition-colors ease-out duration-700 ${
					topFadeOut ? 'text-gray-6' : textColorStrings[i]
				}`}>+.</span
			>
			<span class={`tracking-wider uppercase border-b text-sm`}>{project.title}</span>
		</h4>
		<!-- 			<h4
				class={`absolute font-light text-lg flex flex-row gap-xs`}
				on:click={() => {
					collapseTitles = !collapseTitles;
				}}
				in:send={{ key: project.id }}
				out:receive={{ key: project.id }}
			>
				<span class={`text-sm`}>+.</span>
				<span class={`tracking-wider uppercase border-b text-sm`}>{project.title}</span>
			</h4> -->
	{/each}
</div>
