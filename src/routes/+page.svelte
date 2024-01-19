<script context="module" lang="ts">
	import { fade } from 'svelte/transition';
	import { sineInOut } from 'svelte/easing';

	import { sectionReadyStore, type SectionReadyValues } from '^stores';

	import { image } from '^assets/images';

	import { Picture } from '^components';
	import { Contact, Heading, Projects, Section, Services } from '^pages/landing';
</script>

<script lang="ts">
	// refactor

	// optimise images. picture strign create multiple? picture sizes
	// corner of text visible on page-counter transition
	// change projects transition to use transform rather than left, top, etc.
	// cut out each dot and create own picture
	// using dots, could actually do something akin to:https://www.pola.co.jp/special/o/wecaremore/mothersday/
	// text reveal animations: https://freefrontend.com/css-reveal-animations/
	// title animate in as with plastic.desgin

	// DEPLOY CHECKLIST
	// check using new email in form.
	// update formsubmit from deployed site and with new email.

	let sectionReady: SectionReadyValues;

	sectionReadyStore.subscribe((state) => {
		sectionReady = state;
	});
</script>

<div class="pb-xl md:pb-2xl xl:pb-3xl 3xl:pb-[12rem]">
	<div
		class="mt-md md:mt-[4.5rem] xl:mt-[6rem] 2xl:mt-[8rem] w-[46vw] sm:w-[36vw] xl:w-[38vw] max-w-[800px] min-h-[120px] aspect-[7/5] 2xl:aspect-[7/4] overflow-hidden"
	>
		<div class="relative w-full min-w-[240px] xs:min-w-[300px] xs/sm:min-w-[320px]">
			<div
				class="absolute inset-0 opacity-0 transition-opacity duration-[300ms] ease-in-out"
				style:opacity={!sectionReady?.main ? 0 : 1}
			>
				<Picture data={image.art[1]} imageClass="absolute inset-0 object-cover" loading="eager" />
			</div>
		</div>
	</div>

	<div
		class="mt-lg md:mt-[4.5rem] xl:mt-[7rem] flex justify-center opacity-0 transition-opacity duration-[300ms] ease-in-out"
		style:opacity={!sectionReady?.main ? 0 : 1}
		id="home-section"
	>
		<Heading />
	</div>

	<div
		class="mt-2xl md:mt-[7.5rem] xl:mt-[12rem] 2xl:mt-[15rem] opacity-0 transition-opacity duration-[300ms] ease-in-out"
		style:opacity={!sectionReady?.main ? 0 : 1}
	>
		<Section.Heading align="right" text="Projects" />
	</div>

	<div
		class="mt-lg md:mt-xl lg:mt-[3.75rem] transition-opacity duration-[300ms] ease-in-out"
		style:opacity={!sectionReady?.main ? 0 : 1}
		id="projects-section"
	>
		<Section.LeftSpacing>
			<Projects />
		</Section.LeftSpacing>
	</div>

	{#if sectionReady?.main}
		<div transition:fade={{ duration: 300, easing: sineInOut }}>
			<div class="mt-2xl md:mt-3xl">
				<Section.Heading align="left" text="Services" />
			</div>

			<div class="mt-xl" id="services-section">
				<Section.HorizontalSpacing>
					<Services />
				</Section.HorizontalSpacing>
			</div>

			<div class="mt-2xl md:mt-3xl">
				<Section.Heading align="right" text="Contact" />
			</div>

			<div class="mt-xl" id="contact-section">
				<Section.HorizontalSpacing>
					<Contact />
				</Section.HorizontalSpacing>
			</div>
		</div>
	{/if}
</div>
