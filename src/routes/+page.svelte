<script context="module" lang="ts">
	import { Link, LinkText } from '^pages/landing';
	import type { ProjectId } from '^types';
	import { MainCard, Info } from '$lib/components/projects';
	import { projects } from '^data';
</script>

<script lang="ts">
	type Section = 'landing' | 'projects' | 'about' | 'tech-info';
	let previousSection: null | Section = null;
	let currentSection: Section = 'landing';

	let lineIn = false;
	let textIn = false;

	let shownProjects: ({ type: 'info'; id: ProjectId } | { type: 'main-card'; id: ProjectId })[] =
		[];

	$: console.log('shownProjects:', shownProjects);
</script>

<Link position="top" bgColorClass="bg-[#E5484D]" onClick={() => (currentSection = 'tech-info')}>
	<LinkText>Tech</LinkText>
	<LinkText>info</LinkText>
</Link>

<Link
	position="left"
	bgColorClass="bg-[#0090FF]"
	onClick={() => {
		currentSection = 'projects';

		setTimeout(() => {
			lineIn = true;
		}, 1000);

		setTimeout(() => {
			textIn = true;
		}, 1200);
	}}
>
	<LinkText>Pro</LinkText>
	<LinkText>jects</LinkText>
</Link>

<Link position="right" bgColorClass="bg-green-9" onClick={() => (currentSection = 'about')}>
	<LinkText>Ab</LinkText>
	<LinkText>out</LinkText>
</Link>

<div class={`fixed inset-0 grid place-items-center ${currentSection !== 'landing' ? 'leave' : ''}`}>
	<div>
		<h1 class="text-7xl tracking-[0.013em] text-gray-12">Tech-poiesis</h1>
		<h3 class="mt-xs text-lg tracking-wide text-gray-8">Individually created sites.</h3>
	</div>
</div>

<div class="fixed left-[160px] top-[160px]">
	<div class={`absolute bg-blue-9 h-[4px] ${lineIn ? 'line-in' : 'w-0 opacity-0'}`} />

	<div class={`flex ${textIn ? 'text-in' : 'h-0 w-0 opacity-0 '}`}>
		<div class="mr-xl">
			<h2 class="text-blue-11 font-medium uppercase tracking-wider text-2xl whitespace-nowrap">
				Projects
			</h2>
			<div class="mt-xxs flex flex-col gap-xxs whitespace-nowrap">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<h4
					class="font-medium uppercase tracking-wider text-2xl text-gray-800 underline decoration-2 underline-offset-4 cursor-pointer"
					on:click={() => (shownProjects = [...shownProjects, { id: 'raie', type: 'main-card' }])}
				>
					Raie Music
				</h4>
				<h4
					class="font-medium uppercase tracking-wider text-2xl text-gray-800 underline decoration-2 underline-offset-4"
				>
					Birch Collective
				</h4>
				<h4
					class="font-medium uppercase tracking-wider text-2xl text-gray-800 underline decoration-2 underline-offset-4"
				>
					Piros Photography
				</h4>
				<h4
					class="font-medium uppercase tracking-wider text-2xl text-gray-800 underline decoration-2 underline-offset-4"
				>
					Alesh Compton
				</h4>
			</div>
		</div>

		{#each shownProjects as shownProject}
			{@const projectData = projects[shownProject.id]}
			{#if shownProject.type === 'main-card'}
				<MainCard
					data={{
						title: projectData.title,
						onClickInfo: () =>
							(shownProjects = [...shownProjects, { type: 'info', id: shownProject.id }]),
						picture: projectData.mainPicture,
						siteUrl: projectData.url
					}}
				/>
			{:else}
				<Info data={{ text: projectData.infoText, title: projectData.title }} />
			{/if}
		{/each}
	</div>
</div>

<style>
	@keyframes leave {
		0% {
			transform: translateX(0);
		}

		100% {
			transform: translateX(200%);
		}
	}

	.leave {
		animation: leave 1s ease-in forwards;
		animation-delay: 1000ms;
	}

	@keyframes line-in {
		0% {
			width: 0px;
			opacity: 0;
		}

		100% {
			width: 300px;
			opacity: 1;
		}
	}

	.line-in {
		animation: line-in 0.6s ease-in;
	}

	@keyframes text-in {
		0% {
			width: 0px;
			height: 0px;
			opacity: 0;
		}

		100% {
			width: 100%;
			height: 100%;
			opacity: 1;
		}
	}

	.text-in {
		animation: text-in 1s ease-in forwards;
		/* animation-delay: 1000ms; */
	}
</style>
