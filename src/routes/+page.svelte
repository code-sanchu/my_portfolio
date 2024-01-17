<script context="module" lang="ts">
	import { image } from '^assets/images';

	import { Picture } from '^components';
	import { Contact, Heading, Projects, Section, Services } from '^pages/landing';
</script>

<script lang="ts">
	// mobile navbar doesn't go away when scrolling is not on document/body
	// loading screen; box/square unfolding and folding.
	// optimise images
	// if image hasn't loaded by time loading screen gone, fade in.
	// cards follow swipe gesture up to a point and then trigger next/prev

	// change transition to use transform rather than left, top, etc.
	// cut out each dot and create own picture
	// heading sub-text is a bit too small on mobile?
	// text reveal animations: https://freefrontend.com/css-reveal-animations/
	// title animate in as with plastic.desgin
	// using dots, could actually do something akin to:https://www.pola.co.jp/special/o/wecaremore/mothersday/
	// scrolling seems to get stuck at bottom of page; also at top of pop-up.

	// DEPLOY CHECKLIST
	// check using new email in form.
	// update formsubmit from deployed site and with new email.
</script>

<div class="pb-xl md:pb-2xl xl:pb-3xl 3xl:pb-[12rem]">
	<div
		class="mt-md md:mt-[4.5rem] xl:mt-[6rem] 2xl:mt-[8rem] w-[46vw] sm:w-[36vw] xl:w-[38vw] max-w-[800px] min-h-[120px] aspect-[7/5] 2xl:aspect-[7/4] overflow-hidden"
	>
		<div class="relative w-full min-w-[240px] xs:min-w-[300px] xs/sm:min-w-[320px]">
			<Picture data={image.art[1]} imageClass="absolute inset-0 object-cover" />
		</div>
	</div>

	<div class="mt-lg md:mt-[4.5rem] xl:mt-[7rem] flex justify-center" id="home-section">
		<Heading />
	</div>

	<div class="mt-2xl md:mt-[7.5rem] xl:mt-[12rem] 2xl:mt-[15rem]">
		<Section.Heading align="right" text="Projects" />
	</div>

	<div class="mt-lg md:mt-xl lg:mt-[3.75rem]" id="projects-section">
		<Section.LeftSpacing>
			<Projects />
		</Section.LeftSpacing>
	</div>

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
