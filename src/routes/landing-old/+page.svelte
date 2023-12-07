<script context="module" lang="ts">
	import { fade, fly } from 'svelte/transition';

	import { About } from '^components/+pages-old/about';
	import { Projects } from '^components/+pages-old/projects';
	import { Tech } from '^components/+pages-old/tech';
	import { SectionLink } from '^sections/nav';

	type Section = 'initial' | 'projects' | 'about' | 'tech-info';
</script>

<script lang="ts">
	// projects page. space on mobile between title open + closed. year on info.
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

	let windowWidth: number;

	let contentInset: number;

	$: {
		if (windowWidth) {
			const left = windowWidth < 410 ? 8 : windowWidth < 640 ? 16 : 24;
			const width = windowWidth < 525 ? 38 : windowWidth < 768 ? 47 : 56;

			contentInset = left + width + left;
		}
	}
</script>

<svelte:window bind:innerWidth={windowWidth} />

<SectionLink
	position="top"
	bgColorClass="bg-red-9"
	onClick={() => handleClickSectionLink('tech-info')}
	text={['Tech', 'info']}
/>

<SectionLink
	position="left"
	bgColorClass="bg-blue-9"
	onClick={() => handleClickSectionLink('projects')}
	text={['Pro', 'jects']}
/>

<SectionLink
	position="right"
	bgColorClass="bg-green-9"
	onClick={() => handleClickSectionLink('about')}
	text={['Ab', 'out']}
/>

{#if currentSection !== 'initial'}
	<div class="fixed z-10 bottom-sm left-1/2 -translate-x-1/2" transition:fade>
		<button
			class="uppercase tracking-wide text-xxs xs/smtext-xs md:text-sm underline sm:font-medium"
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
			class="text-3xl leading-none xs/sm:text-[2.625rem] sm:text-6xl md:text-7xl xl:text-8xl tracking-[0.013em] text-gray-12"
		>
			Tech-poiesis
		</h1>
		<h3
			class="mt-xxxs text-xs xs/sm:text-base sm:mt-xs md:text-lg xl:text-xl tracking-wide text-gray-8"
		>
			Individually created sites.
		</h3>
	</div>
</div>

{#if contentInset}
	{#if currentSection === 'projects'}
		<div class="fixed" style:inset="{contentInset}px" out:fly={{ y: '-500px', duration: 500 }}>
			<Projects />
		</div>
	{/if}

	{#if currentSection === 'about'}
		<div class="fixed" style:inset="{contentInset}px" out:fly={{ y: '-500px', duration: 500 }}>
			<About />
		</div>
	{/if}

	{#if currentSection === 'tech-info'}
		<div class="fixed" style:inset="{contentInset}px" out:fly={{ y: '-500px', duration: 500 }}>
			<Tech />
		</div>
	{/if}
{/if}
