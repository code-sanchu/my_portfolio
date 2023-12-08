<script context="module" lang="ts">
	import { uid } from 'uid/single';
	import { quintOut } from 'svelte/easing';
	import { crossfade, fade } from 'svelte/transition';

	import type { ProjectId } from '^types';
	import { projects } from '^data';

	import Titles from './titles.svelte';
	import AnimateSectionIn from '^components/animate-section-in.svelte';
	import MainCard from './main-card';
	import Info from './info';

	type VisibilityStatus = 'closed' | 'opening' | 'open' | 'closing';

	type ProjectCardType = 'info' | 'main-card';
</script>

<script lang="ts">
	export let sectionStatus: VisibilityStatus;

	let shownProjectCards: { type: ProjectCardType; key: string; id: ProjectId }[] = [];

	const [send, receive] = crossfade({
		duration: 1200,
		easing: quintOut,
		delay: 0
	});

	let showTitles = false;

	$: {
		if (sectionStatus === 'opening') {
			setTimeout(() => {
				showTitles = true;
			}, 750);
		}
	}

	let titlesTransitionIsEnabled: boolean = true;
	let titlesTransitionStatus: 'open' | 'closed' = 'open';
	let projectTitlesWidth: number;

	const handleShowProject = (projectId: ProjectId, type: ProjectCardType) => {
		const delay = !titlesTransitionIsEnabled || titlesTransitionStatus === 'closed' ? 0 : 300;

		if (titlesTransitionIsEnabled) {
			titlesTransitionStatus = 'closed';
		}

		setTimeout(() => {
			shownProjectCards = [{ id: projectId, type, key: uid() }, ...shownProjectCards];
		}, delay);
	};
</script>

{#if sectionStatus === 'closed' || sectionStatus === 'closing'}
	<div class="group/button fixed left-sm top-1/2 -translate-y-1/2">
		<button
			class="flex flex-col items-start uppercase text-xs tracking-wider text-my-light-blue"
			on:click={() => {
				sectionStatus = 'opening';
				setTimeout(() => {
					sectionStatus = 'open';
				}, 1200);
			}}
			in:receive={{ key: 'projects-title' }}
			out:send={{ key: 'projects-title' }}
			type="button"
		>
			<span class="pl-xxs pr-sm flex">
				<span>P</span>
				<span>r</span>
				<span>o</span>
				<span>j</span>
			</span>

			<span class="w-full h-[1px] bg-gradient-to-r from-my-light-blue to-white" />

			<span class="mt-xxxs pl-xxs pr-sm flex">
				<span>e</span>
				<span>c</span>
				<span>t</span>
				<span>s</span>
			</span>

			<span class="w-full h-[1px] bg-gradient-to-r from-my-light-blue to-white" />
		</button>

		<span
			class="absolute left-0 top-0 h-[160%] w-[1px] bg-gradient-to-b from-my-light-blue to-white"
			transition:fade
		/>
	</div>
{:else}
	<div class={`fixed top-2xl left-2xl`}>
		<div class="flex flex-col sm:gap-lg md:flex-row md:gap-lg h-full sm:pb-md">
			<div class="shrink-0">
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<h2
					class="text-2xl tracking-wider flex"
					on:click={() => {
						sectionStatus = 'closing';
						setTimeout(() => {
							sectionStatus = 'closed';
						}, 1200);
					}}
					in:receive={{ key: 'projects-title' }}
					out:send={{ key: 'projects-title' }}
				>
					<span class="text-my-dark-olive">P</span>
					<span class="text-my-orange">r</span>
					<span class="text-my-rosy-brown">o</span>
					<span class="text-my-dark-slate-gray">j</span>
					<span class="text-my-plum">e</span>
					<span class="text-my-dark-olive">c</span>
					<span class="text-my-dark-olive">t</span>
					<span class="text-my-steel-blue">s</span>
				</h2>

				{#if showTitles}
					<Titles
						transitionIsEnabled={titlesTransitionIsEnabled}
						transitionStatus={titlesTransitionStatus}
						onClickTitle={(projectId) => handleShowProject(projectId, 'main-card')}
					/>
				{/if}
			</div>

			<div class="flex">
				{#each shownProjectCards as shownProject (shownProject.key)}
					{@const projectData = projects[shownProject.id]}

					{#if shownProject.type === 'main-card'}
						<AnimateSectionIn
							containerWidth={700}
							bgColor={'bg-gray-3'}
							skipWidthAnimation={shownProjectCards.length === 1}
						>
							<MainCard
								data={{
									title: projectData.title,
									mainPicture: projectData.mainPicture,
									siteUrl: projectData.siteUrl,
									descriptionShort: projectData.descriptionShort,
									year: projectData.year
								}}
								onClickInfo={() => handleShowProject(shownProject.id, 'info')}
							/>
						</AnimateSectionIn>
					{:else}
						<AnimateSectionIn containerWidth={500} bgColor="bg-gray-3">
							<Info
								data={{
									descriptionLong: projectData.descriptionLong,
									title: projectData.title,
									siteUrl: projectData.siteUrl,
									performanceUrl: projectData.performanceUrl,
									features: projectData.features,
									year: projectData.year
								}}
								componentKey={shownProject.key}
							/>
						</AnimateSectionIn>
					{/if}
				{/each}
			</div>
		</div>
	</div>
{/if}
