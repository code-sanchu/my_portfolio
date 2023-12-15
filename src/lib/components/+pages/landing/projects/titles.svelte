<script context="module" lang="ts">
	import { projects } from '^data';
	import type { ProjectId } from '^types';
	import { onMount } from 'svelte';

	const projectsArr = Object.values(projects);
</script>

<script lang="ts">
	export let onClickTitle: (projectId: ProjectId) => void;

	let node: HTMLDivElement;
	let windowHeight: number;

	let animateIn: boolean;

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

			animateIn = rect.bottom < windowHeight;
		}
	});
</script>

<svelte:document
	on:scroll={() => {
		if (!animateIn) {
			const rect = node.getBoundingClientRect();

			animateIn = rect.bottom < windowHeight;
		}
	}}
/>
<svelte:window bind:innerHeight={windowHeight} />

<div
	class={`inline-flex flex-col gap-xxs transition-opacity ease-in duration-300 ${
		animateIn ? '' : 'opacity-0'
	}`}
	bind:this={node}
>
	{#each projectsArr as project, i}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<h4
			class={`relative cursor-pointer font-mono text-lg transition-all ease-out duration-500 ${
				textColorStrings[i]
			} hover:text-gray-12 ${animateIn ? '' : 'translate-y-sm'}`}
			on:click={() => onClickTitle(project.id)}
			style:transition-delay="{i * 50}ms"
		>
			<span>
				{project.title}
			</span>
		</h4>
	{/each}
</div>
