<script context="module" lang="ts">
	import { image } from '^assets/images';

	import { Header, Picture } from '^components';
	import { Contact, Heading, Projects, Section, Services } from '^pages/landing';
</script>

<script lang="ts">
	// 3d steps at top right with text for nav links
	// try nova font
	// nav bar links with coloured dots from image
	// match colours to image
	// animate to more info
	// don't use absolute for contact in nav
	// title animate in as with plastic.desgin
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
