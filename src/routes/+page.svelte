<script context="module" lang="ts">
	import { image } from '^assets/images';

	import { Header, Picture } from '^components';
	import { Contact, Heading, Projects, Section, Services } from '^pages/landing';
</script>

<script lang="ts">
	// try nova font
	// match colours to image
	// take new picture of kindred yoga without the line
	// optimise images
	// main header and in about project neot visible on mobile when address bar is down
	// change transition to use transform rather than left, top, etc.
	// heading sub-text is a bit too small on mobile?
	// text reveal animations: https://freefrontend.com/css-reveal-animations/
	// title animate in as with plastic.desgin
	// loading screen
	// don't use absolute for contact in nav
	// using dots, could actually do something akin to:https://www.pola.co.jp/special/o/wecaremore/mothersday/

	let windowHeight: number;

	let headerHeight: number = 76;
</script>

<svelte:window bind:innerHeight={windowHeight} />

<Header />

{#if headerHeight && windowHeight}
	<div style:height="{headerHeight}px" />

	<div class="mt-md pb-xl" style:min-height="{windowHeight - headerHeight}px">
		<div class="h-[20vh] aspect-[7/5] overflow-hidden">
			<div class="relative w-[240px] aspect-[7/5]">
				<Picture data={image.art[1]} imageClass="absolute inset-0 object-cover" />
			</div>
		</div>

		<div class="mt-lg flex justify-center" id="home-section">
			<Heading />
		</div>

		<div class="mt-2xl">
			<Section.Heading align="right" text="Projects" />
		</div>

		<div class="mt-lg lg:mt-2xl" id="projects-section">
			<Section.LeftSpacing>
				<Projects />
			</Section.LeftSpacing>
		</div>

		<div class="mt-2xl">
			<Section.Heading align="left" text="Services" />
		</div>

		<div class="mt-xl" id="services-section">
			<Section.HorizontalSpacing>
				<Services />
			</Section.HorizontalSpacing>
		</div>

		<div class="mt-2xl">
			<Section.Heading align="right" text="Contact" />
		</div>

		<div class="mt-xl" id="contact-section">
			<Section.HorizontalSpacing>
				<Contact />
			</Section.HorizontalSpacing>
		</div>
	</div>
{/if}
