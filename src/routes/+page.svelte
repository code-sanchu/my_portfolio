<script context="module" lang="ts">
	import { image } from '^assets/images';

	import { Picture } from '^components';
	import { Contact, Heading, Projects, Section, Services } from '^pages/landing';
</script>

<script lang="ts">
	// mobile navbar doesn't go away when scrolling is not on document/body
	// loading screen
	// optimise images
	// if image hasn't loaded by time loading screen gone, fade in.

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

<div class="mt-md pb-xl">
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
