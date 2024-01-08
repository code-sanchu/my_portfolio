<script context="module" lang="ts">
	import { image } from '^assets/images';

	import { Nav, Picture } from '^components';
	import { Heading } from '^pages/landing-new';
</script>

<script lang="ts">
	// 3d steps at top right with text for nav links
	// try nova font

	import Circles from '^components/+pages/landing/circles.svelte';
	import { ArrowLineRight } from 'phosphor-svelte';
</script>

<div
	class="fixed top-[19%] -left-0 -translate-x-[410px] transition-transform ease-linear duration-150"
>
	<div class="w-[600px] overflow-hidden opacity-50">
		<Picture data={image.line_art[2]} />
	</div>
</div>
<div
	class="fixed top-[25%] right-0 translate-x-[480px] transition-transform ease-linear duration-150"
>
	<div class="w-[600px] overflow-hidden opacity-50">
		<Picture data={image.line_art[2]} />
	</div>
</div>

<div class="fixed left-sm right-sm top-md flex justify-between">
	<h1 class="font-3d2 text-[2.5rem] tracking-widest">TPS</h1>
	<Nav />
</div>

<div class="relative min-h-screen flex justify-center">
	<div class="mt-[42vh] max-w-[768px] pb-3xl">
		<div class="flex justify-center">
			<Heading />
		</div>

		<div class="mt-[27vh] flex flex-col items-end">
			<!-- <span class="tracking-wider w-[12px] aspect-square rounded-full border-2 border-[#DBDBD7]" /> -->
			<!-- <p class="tracking-wider">01</p> -->
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
	</div>
</div>
