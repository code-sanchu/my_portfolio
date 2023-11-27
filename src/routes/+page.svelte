<script context="module" lang="ts">
	import { Projects } from '^components/+sections';
	import { Link, LinkText } from '^pages/landing';
	import type { ProjectId } from '^types';
</script>

<script lang="ts">
	type Section = 'landing' | 'projects' | 'about' | 'tech-info';
	let previousSection: null | Section = null;
	let currentSection: Section = 'landing';

	let lineIn = false;
	let textIn = false;

	let shownProjects: (
		| { type: 'info'; key: string; id: ProjectId }
		| { type: 'main-card'; key: string; id: ProjectId }
	)[] = [];

	$: console.log('shownProjects:', shownProjects);
</script>

<Link position="top" bgColorClass="bg-[#E5484D]" onClick={() => (currentSection = 'tech-info')}>
	<LinkText>Tech</LinkText>
	<LinkText>info</LinkText>
</Link>

<Link
	position="left"
	bgColorClass="bg-blue-9"
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

{#if currentSection === 'projects'}
	<Projects />
{/if}

<!-- 		{#each shownProjects as shownProject, i (shownProject.key)}
			{@const projectData = projects[shownProject.id]}
			{#if shownProject.type === 'main-card'}
				<MainCard
					data={{
						title: projectData.title,
						onClickInfo: () =>
							(shownProjects = [
								{ type: 'info', id: shownProject.id, key: uid() },
								...shownProjects
							]),
						picture: projectData.mainPicture,
						siteUrl: projectData.url
					}}
				/>
			{:else}
				<Info data={{ text: projectData.infoText, title: projectData.title }} />
			{/if}
		{/each} -->

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
