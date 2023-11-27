<script lang="ts" context="module">
	import { image } from '^assets/images';
	import { Picture } from '^components';
	import { ArrowRight, ArrowUpRight } from 'phosphor-svelte';
</script>

<div class="flex">
	<p class=" w-[500px] px-xs shrink-0">
		<span class="text-blue-11 uppercase text-sm tracking-wider">Raie Music — Website, 2023.</span>
		<span
			>Designed and built in 2023 for Raie Music. Designed asthetically to suit the musicality of
			Raie and functionally to have an easy to use in-site music player...
		</span>
	</p>

	<div class="shrink-0 w-[600px]">
		<div class="relative aspect-[4/3] overflow-hidden p-sm bg-blue-2 rounded-sm">
			<Picture data={image.project.raie.landing} imageClass="object-cover" />
			<div class="z-10 absolute bottom-0 w-full h-sm bg-blue-2 rounded-b-sm" />
		</div>

		<div class="mt-xs flex gap-xs items-center">
			<h4 class="text-blue-11 uppercase text-xs tracking-wider">Raie Music — Website, 2023.</h4>

			<div class="flex gap-xs items-end">
				<div class="flex items-center gap-xxs">
					<div class="flex items-center gap-xxs">
						<span class="h-[12px] w-[2px] bg-gray-11 shrink-0" />
						<span class="text-xs text-gray-12 tracking-wider">Info</span>
					</div>

					<span class="text-gray-12 text-sm"><ArrowRight weight="bold" /></span>
				</div>

				<div class="flex items-center gap-xxs">
					<div class="flex items-center gap-xxs">
						<span class="h-[12px] w-[2px] bg-gray-11" />
						<span class="text-xs text-gray-12 tracking-wider">Visit</span>
					</div>

					<span class="text-gray-12 text-sm"><ArrowUpRight weight="bold" /></span>
				</div>
			</div>
		</div>
	</div>
</div>
