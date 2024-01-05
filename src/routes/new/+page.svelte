<script context="module" lang="ts">
	import { image } from '^assets/images';

	import { Picture } from '^components';
	import { Intro } from '^pages/landing-new';
</script>

<!-- <div class="fixed right-sm top-md">
	<Nav />
</div> -->

<div
	class="fixed top-[22%] -left-0 -translate-x-[250px] transition-transform ease-linear duration-150"
>
	<div class="w-[400px] overflow-hidden opacity-50">
		<Picture data={image.line_art[1]} />
	</div>
</div>

<div class="fixed left-sm top-md flex">
	<h1 class="font-3d2 text-[2.5rem] tracking-widest">TPS</h1>
</div>

<div class="relative min-h-screen flex justify-center">
	<div class="mt-[42vh] max-w-[768px] pb-3xl">
		<!-- <h2 class="uppercase tracking-wider font-light text-xl">Bespoke website creation</h2> -->
		<div class="flex justify-center">
			<div class="w-[560px] max-w-full pr-xl">
				<Intro />
			</div>
		</div>

		<div class="mt-[27vh] flex flex-col items-end">
			<h3 class="tracking-wider">01</h3>
			<h2 class="mt-md uppercase text-lg tracking-widest">Projects</h2>
			<div class="mt-lg w-[64px] h-[5px] bg-black" />
		</div>

		<div class="relative mt-2xl flex gap-md overflow-x-hidden">
			<div class="w-[300px] shrink-0">
				<div class="relative aspect-[3/4] overflow-hidden">
					<Picture
						data={image.project.raie.landing}
						imageClass="absolute inset-0 object-cover w-full h-full"
					/>
				</div>

				<div class="mt-xxs">
					<p class="text-sm">Raie Music</p>
				</div>
			</div>

			<div class="w-[300px] shrink-0">
				<div class="relative aspect-[3/4] overflow-hidden">
					<Picture
						data={image.project.amy.site}
						imageClass="absolute inset-0 object-cover w-full h-full"
					/>
				</div>

				<div class="mt-xxs">
					<p class="text-sm">Amy Rodriguez Jewellery</p>
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
	</div>
</div>
