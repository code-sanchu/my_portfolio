<script context="module" lang="ts">
	import { Projects } from '^components/+pages/projects';
	import { SectionLink, SectionLinkText } from '^sections/nav';
	import { cubicIn } from 'svelte/easing';

	type Section = 'initial' | 'projects' | 'about' | 'tech-info';
</script>

<script lang="ts">
	let currentSection: Section = 'initial';
	let leaveSectionStatus: 'idle' | 'leaving' | 'complete' = 'idle';

	const handleShowSection = (show: Section) => {
		leaveSectionStatus = 'leaving';

		setTimeout(() => {
			leaveSectionStatus = 'complete';
		}, 1000);

		if (currentSection === 'initial') {
			setTimeout(() => {
				currentSection = show;
			}, 500);
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

<div
	class={`fixed inset-0 grid place-items-center transition-transform ease-[cubic-bezier(.64,.26,.13,.2)] duration-300 delay-[500ms] ${
		currentSection === 'initial' && leaveSectionStatus === 'idle' ? '' : 'translate-x-full'
	}`}
>
	<div>
		<h1 class="text-7xl tracking-[0.013em] text-gray-12">Tech-poiesis</h1>
		<h3 class="mt-xs text-lg tracking-wide text-gray-8">Individually created sites.</h3>
	</div>
</div>

{#if currentSection === 'projects'}
	<Projects />
{/if}
