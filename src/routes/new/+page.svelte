<script context="module" lang="ts">
	import { ArrowLineRight } from 'phosphor-svelte';
	import { image } from '^assets/images';

	import { Nav, Picture } from '^components';
	import { Heading, Contact } from '^pages/landing-new';
</script>

<script lang="ts">
	// 3d steps at top right with text for nav links
	// try nova font
	// nav bar links with coloured dots from image
	// match colours to image
	// using dots, could actually do something akin to:https://www.pola.co.jp/special/o/wecaremore/mothersday/
</script>

<div
	class="fixed top-[19%] -left-0 -translate-x-[250px] transition-transform ease-linear duration-150"
>
	<!-- <div class="w-[400px] overflow-hidden opacity-40">
		<Picture data={image.line_art[1]} />
	</div> -->
	<!-- <div class="w-[600px] overflow-hidden">
		<Picture data={image.line_art[2]} />
	</div> -->
	<!-- <div class="w-[600px] overflow-hidden rotate-90">
		<Picture data={image.line_art[3]} />
	</div> -->
	<!-- <div class="w-[600px] overflow-hidden rotate-90">
		<Picture data={image.line_art[4]} />
	</div> -->
</div>

<!-- <div
	class="fixed top-[25%] right-0 translate-x-[480px] transition-transform ease-linear duration-150"
>
	<div class="w-[600px] overflow-hidden opacity-50">
		<Picture data={image.line_art[2]} />
	</div>
</div> -->

<div class="fixed z-20 left-sm right-sm top-md flex justify-between items-center">
	<!-- <h1 class="absolute left-0 -translate-y-[70px] font-display2 text-[140px]">TPS</h1> -->
	<!-- <h1 class="font-display3 text-3xl tracking-widest">TPS</h1> -->
	<h1 class="font-3d2 text-[2.5rem] tracking-widest">TPS</h1>
	<!-- <h1 class="text-[2.5rem] tracking-widest">TPS</h1> -->
	<Nav />
</div>

<div class="relative min-h-screen flex justify-center">
	<div class="absolute z-10 left-0 top-[7%] w-[400px] origin-bottom-left rotate-90">
		<Picture data={image.art[7]} />
	</div>

	<div class="mt-[42vh] max-w-[768px] pb-3xl">
		<div class="flex justify-center">
			<Heading />
		</div>

		<div class="mt-[27vh] flex flex-col items-end" id="projects-section">
			<h2 class="mt-md uppercase text-lg tracking-widest">Projects</h2>
			<div class="mt-lg w-[64px] h-[5px] bg-[#DBDBD7]" />
		</div>

		<div class="relative mt-2xl flex gap-md overflow-x-hidden">
			<div class="w-[300px] shrink-0">
				<div class="relative aspect-[3/4] overflow-hidden">
					<Picture
						data={image.project.raie.landing}
						imageClass="absolute inset-0 object-cover w-full h-full"
					/>
				</div>

				<div class="mt-xxs flex items-baseline justify-between">
					<p class="text-sm mr-md">Raie Music</p>

					<div class="flex pr-xxs">
						<p class="mr-sm uppercase text-xxs tracking-wider text-gray-9">more info</p>
						<p class="uppercase text-xxs tracking-wider text-gray-9">visit</p>
					</div>
				</div>
			</div>

			<div class="w-[300px] shrink-0">
				<div class="relative aspect-[3/4] overflow-hidden">
					<Picture
						data={image.project.amy.site}
						imageClass="absolute inset-0 object-cover w-full h-full"
					/>
				</div>

				<div class="mt-xxs flex items-baseline justify-between">
					<p class="text-sm mr-md">Amy Rodriguez Jewellery</p>

					<div class="flex pr-xxs">
						<p class="mr-sm uppercase text-xxs tracking-wider text-gray-9">more info</p>
						<p class="uppercase text-xxs tracking-wider text-gray-9">visit</p>
					</div>
				</div>
			</div>

			<div class="w-[300px] shrink-0">
				<div class="relative aspect-[3/4] overflow-hidden">
					<Picture
						data={image.project.piros.piros}
						imageClass="absolute inset-0 object-cover w-full h-full"
					/>
				</div>

				<div class="mt-xxs">
					<p class="text-sm">Piros Photography</p>
				</div>
			</div>
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

		<div class="mt-[18vh] flex flex-col items-end">
			<h2 class="mt-md uppercase text-lg tracking-widest">Contact</h2>
			<div class="mt-lg w-[64px] h-[5px] bg-[#DBDBD7]" />
		</div>

		<Contact />
	</div>
</div>
