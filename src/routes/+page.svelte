<script context="module" lang="ts">
	import { fade, fly } from 'svelte/transition';

	import { SectionLink, SectionLinkText } from '^sections/nav';
	import { Projects } from '^components/+pages/projects';
	import { About } from '^components/+pages/about';
	import { Tech } from '^components/+pages/tech';

	type Section = 'initial' | 'projects' | 'about' | 'tech-info';
</script>

<script lang="ts">
	let currentSection: Section = 'initial';

	let titleStatus: 'initial' | 'transition-out' | 'place-before-transition-in' = 'initial';

	const handleClickSectionLink = (clickedSection: Section) => {
		if (currentSection === clickedSection) {
			return;
		}

		if (currentSection === 'initial') {
			setTimeout(() => {
				titleStatus = 'transition-out';

				setTimeout(() => {
					titleStatus = 'place-before-transition-in';
				}, 800);
			}, 350);

			currentSection = clickedSection;
		} else {
			currentSection = clickedSection;

			if (clickedSection === 'initial') {
				setTimeout(() => {
					titleStatus = 'initial';
				}, 300);
			}
		}
	};
</script>

<SectionLink
	position="top"
	bgColorClass="bg-red-9"
	onClick={() => handleClickSectionLink('tech-info')}
>
	<SectionLinkText>Tech</SectionLinkText>
	<SectionLinkText>info</SectionLinkText>
</SectionLink>

<SectionLink
	position="left"
	bgColorClass="bg-blue-9"
	onClick={() => handleClickSectionLink('projects')}
>
	<SectionLinkText>Pro</SectionLinkText>
	<SectionLinkText>jects</SectionLinkText>
</SectionLink>

<SectionLink
	position="right"
	bgColorClass="bg-green-9"
	onClick={() => handleClickSectionLink('about')}
>
	<SectionLinkText>Ab</SectionLinkText>
	<SectionLinkText>out</SectionLinkText>
</SectionLink>

{#if currentSection !== 'initial'}
	<div class="fixed z-10 bottom-sm left-1/2 -translate-x-1/2" transition:fade>
		<button
			class="uppercase tracking-wide text-xs underline"
			on:click={() => handleClickSectionLink('initial')}
			type="button">Tech-poiesis</button
		>
	</div>
{/if}

<div
	class={`fixed inset-0 grid place-items-center transition-all ease-[cubic-bezier(.64,.26,.13,.2)] duration-[400ms] ${
		titleStatus === 'transition-out'
			? 'translate-x-full opacity-0 pointer-events-none'
			: titleStatus === 'place-before-transition-in'
			? 'opacity-0 translate-y-lg pointer-events-none'
			: 'ease-in-out duration-500'
	}`}
>
	<div>
		<h1
			class="text-4xl xs/sm:text-[2.625rem] sm:text-6xl md:text-7xl xl:text-8xl tracking-[0.013em] text-gray-12"
			title="hello"
		>
			Tech-poiesis
		</h1>
		<h3
			class="mt-xxs text-sm xs/sm:text-base sm:mt-xs md:text-lg xl:text-xl tracking-wide text-gray-8"
		>
			Individually created sites.
		</h3>
	</div>
</div>

{#if currentSection === 'projects'}
	<div
		class="fixed inset-[75px] xs/sm:inset-[80px] md:inset-[100px] md/lg:inset-[120px]"
		out:fly={{ y: '-500px', duration: 500 }}
	>
		<Projects />
	</div>
{/if}

{#if currentSection === 'about'}
	<div
		class="fixed inset-[75px] xs/sm:inset-[80px] md:inset-[100px] md/lg:inset-[120px]"
		out:fly={{ y: '-500px', duration: 500 }}
	>
		<About />
	</div>
{/if}

{#if currentSection === 'tech-info'}
	<div
		class="fixed inset-[75px] xs/sm:inset-[80px] md:inset-[100px] md/lg:inset-[120px]"
		out:fly={{ y: '-500px', duration: 500 }}
	>
		<Tech />
	</div>
{/if}
