<script context="module" lang="ts">
	import { image } from '^assets/images';

	import { Header, Picture } from '^components';
	import { Heading, Projects } from '^components/+pages/landing';
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

	let headingNode: HTMLDivElement;

	let headingBottom: number;

	$: {
		if (headingNode) {
			const rect = headingNode.getBoundingClientRect();
			const bottom = rect.top + rect.height;

			headingBottom = bottom;
		}
	}

	// let headingNodeBottom
</script>

<svelte:window bind:innerHeight={windowHeight} />

<Header />

{#if headerHeight && windowHeight}
	<div
		class="relative pb-2xl"
		style:margin-top="{headerHeight}px"
		style:min-height="{windowHeight - headerHeight}px"
	>
		<div class="absolute top-sm h-[20vh] aspect-[7/5]">
			<Picture data={image.art[7]} imageClass="absolute inset-0 w-full h-full object-cover" />
		</div>

		<div
			class="absolute left-1/2 top-[26vh] z-20 flex justify-center -translate-x-1/2"
			bind:this={headingNode}
		>
			<Heading />
		</div>

		{#if headingBottom}
			<div style:height="{headingBottom - headerHeight}px" />

			<div class="mt-2xl flex flex-col items-end px-lg">
				<h2 class="uppercase font-light lg:text-lg tracking-widest text-gray-10">Projects</h2>
				<div class="mt-sm lg:mt-lg w-[64px] h-[5px] bg-gray-4" />
			</div>

			<div class="relative mt-lg lg:mt-2xl overflow-x-hidden pl-lg" id="projects-section">
				<Projects />
			</div>
		{/if}
	</div>
{/if}

<!-- <div class="relative min-h-screen flex justify-center">
	<div class="absolute z-10 left-0 top-[7%] w-[400px] origin-bottom-left rotate-90">
		<Picture data={image.art[7]} />
	</div>

	<div class="mt-[42vh] max-w-[768px] pb-3xl" id="home-section">
		<div class="flex justify-center">
			<Heading />
		</div>

		<div class="mt-[27vh] flex flex-col items-end" id="projects-section">
			<h2 class="mt-md uppercase text-lg tracking-widest">Projects</h2>
			<div class="mt-lg w-[64px] h-[5px] bg-[#DBDBD7]" />
		</div>

		<div class="relative mt-2xl overflow-x-hidden">
			<Projects />
		</div>

		<div class="mt-md">
			<p class="inline-flex gap-xs items-center border py-xxs px-xs rounded-lg border-gray-8">
				<span class="text-sm">
					<ArrowLineRight weight="thin" />
				</span>
				<span class="translate-y-[1px] text-xs uppercase tracking-wider text-gray-11 font-light"
					>Next</span
				>
			</p>
		</div>

		<div class="mt-[18vh] flex flex-col" id="services-section">
			<h2 class="mt-md uppercase text-lg tracking-widest">Services</h2>
			<div class="mt-lg w-[64px] h-[5px] bg-[#DBDBD7]" />
		</div>

		<div class="mt-[4.5rem] font-light">
			<p class="max-w-[620px] leading-relaxed">
				I'm a design-focused web engineer who provides personalised and high-quality tech services.
				I work with individuals and small companies, hobbyists and professionals and find the
				right-sized approach for each.
			</p>

			<p class="max-w-[620px] mt-sm leading-relaxed">
				Services include: website and cms creation, cms platform (e.g. Squarespace, Wordpress) work,
				other platform (such as Shopify) work.
			</p>

			<p class="max-w-[620px] mt-sm leading-relaxed">
				Feel free to get in touch for a discussion to see what your options are and whether we're a
				good match. I've comprehensive knowledge of the website ecosystem. Budget options and
				concessions are available based on income.
			</p>
		</div>

		<div class="mt-[18vh] flex flex-col items-end" id="contact-section">
			<h2 class="mt-md uppercase text-lg tracking-widest">Contact</h2>
			<div class="mt-lg w-[64px] h-[5px] bg-[#DBDBD7]" />
		</div>

		<Contact />
	</div>
</div> -->
