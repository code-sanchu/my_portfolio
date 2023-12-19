<script context="module" lang="ts">
	import { crossfade } from 'svelte/transition';
	import { uid } from 'uid/single';

	import { projects } from '^data';
	import { getFirstLetters } from '^helpers';

	const projectsArr = Object.values(projects);
</script>

<script lang="ts">
	let change = false;

	const [send, receive] = crossfade({ duration: 1000 });

	const title = 'birch collective';
	const titleArr = title.split('').map((letter) => ({ letter, key: uid() }));
</script>

<button class="fixed bottom-sm right-sm" on:click={() => (change = !change)}>Click</button>

{#if !change}
	<div class="fixed" in:send={{ key: 'title' }} out:receive={{ key: 'title' }}>Hello Okay</div>
{:else}
	<div
		class="fixed left-1/2 top-1/2 flex flex-col"
		in:send={{ key: 'title' }}
		out:receive={{ key: 'title' }}
	>
		<span>+.</span>
		<span>HO</span>
	</div>
{/if}

<!-- <div class="fixed">
	{#each projectsArr.filter((_) => change) as project}
		<h1 in:send={{ key: project.id }} out:receive={{ key: project.id }}>
			{getFirstLetters(project.title)}
		</h1>
	{/each}
</div>

<div class="fixed left-1/2 top-1/2" >
	{#each projectsArr.filter((_) => !change) as project}
		<h1 in:send={{ key: project.id }} out:receive={{ key: project.id }}>{project.title}</h1>
	{/each}
</div> -->

<!-- {#if !change}
	<div class="fixed" in:send={{ key: 'title' }} out:receive={{ key: 'title' }}>
		{#each titleArr as letter}
			<span>{letter.letter}</span>
		{/each}
	</div>
{:else}
	<div class="fixed left-1/2 top-1/2" in:send={{ key: 'title' }} out:receive={{ key: 'title' }}>
		{#each titleArr as letter}
			<span>{letter.letter}</span>
		{/each}
	</div>
{/if}
 -->
