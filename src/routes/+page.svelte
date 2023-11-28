<script context="module" lang="ts">
	import { Projects } from '^components/+pages/projects';
	import { SectionLink, SectionLinkText } from '^sections/nav';
	import { fade, fly, slide } from 'svelte/transition';

	type Section = 'initial' | 'projects' | 'about' | 'tech-info';
</script>

<script lang="ts">
	let currentSection: Section = 'initial';

	let titleStatus: 'initial' | 'transition-out' | 'place-before-transition-in' = 'initial';

	const handleShowSection = (show: Section) => {
		if (currentSection === show) {
			return;
		}

		if (show !== 'initial') {
			setTimeout(() => {
				currentSection = show;
			}, 500);
		}

		if (currentSection === 'initial') {
			setTimeout(() => {
				titleStatus = 'transition-out';

				setTimeout(() => {
					titleStatus = 'place-before-transition-in';
				}, 800);
			}, 500);
		}

		if (currentSection !== 'initial' && show === 'initial') {
			currentSection = show;

			setTimeout(() => {
				titleStatus = 'initial';
			}, 300);
		}
	};
</script>

<SectionLink position="top" bgColorClass="bg-red-9" onClick={() => handleShowSection('tech-info')}>
	<SectionLinkText>Tech</SectionLinkText>
	<SectionLinkText>info</SectionLinkText>
</SectionLink>

<SectionLink position="left" bgColorClass="bg-blue-9" onClick={() => handleShowSection('projects')}>
	<SectionLinkText>Pro</SectionLinkText>
	<SectionLinkText>jects</SectionLinkText>
</SectionLink>

<SectionLink position="right" bgColorClass="bg-green-9" onClick={() => handleShowSection('about')}>
	<SectionLinkText>Ab</SectionLinkText>
	<SectionLinkText>out</SectionLinkText>
</SectionLink>

{#if currentSection !== 'initial'}
	<div class="fixed z-10 bottom-sm left-1/2 -translate-x-1/2" transition:fade>
		<button
			class="uppercase tracking-wide text-xs underline"
			on:click={() => handleShowSection('initial')}
			type="button">Tech-poiesis</button
		>
	</div>
{/if}

<div
	class={`fixed inset-0 grid place-items-center transition-all ease-[cubic-bezier(.64,.26,.13,.2)] duration-300 ${
		titleStatus === 'transition-out'
			? 'translate-x-full opacity-0 pointer-events-none'
			: titleStatus === 'place-before-transition-in'
			? 'opacity-0 translate-y-lg pointer-events-none'
			: 'ease-in-out duration-500'
	}`}
>
	<div>
		<h1 class="text-7xl tracking-[0.013em] text-gray-12">Tech-poiesis</h1>
		<h3 class="mt-xs text-lg tracking-wide text-gray-8">Individually created sites.</h3>
	</div>
</div>

{#if currentSection === 'projects'}
	<div class="fixed left-[160px] top-[160px]" out:fly={{ y: '-500px', duration: 500 }}>
		<Projects />
	</div>
{/if}
