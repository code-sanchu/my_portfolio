<script lang="ts" context="module">
	import { ArrowRight, ArrowUpRight } from 'phosphor-svelte';

	import { Picture } from '^components';
	import type { Picture as PictureType } from '^types';
</script>

<script lang="ts">
	export let data: {
		picture: PictureType;
		title: string;
		siteUrl: string;
		onClickInfo: () => void;
	};
</script>

<div class="pr-sm md:pr-md">
	<div class="relative aspect-[4/3] overflow-hidden p-sm bg-blue-2 rounded-sm">
		<Picture data={data.picture} imageClass="object-cover" />
		<div class="z-10 absolute bottom-0 w-full h-sm bg-blue-2 rounded-b-sm" />
	</div>

	<div class="mt-xs flex gap-xs items-center">
		<h4 class="text-blue-10 uppercase text-xxs sm:text-xs tracking-wider">{data.title}</h4>

		<div class="flex gap-xs items-end">
			<div class="flex items-center gap-xxs">
				<div class="flex items-center gap-xxs">
					<span class=" h-[10px] sm:h-[12px] w-[2px] border-l-2 border-gray-11 shrink-0" />

					<button
						class="flex items-center gap-xxs text-gray-12 hover:text-blue-10"
						on:click={data.onClickInfo}
						type="button"
					>
						<span class="text-xxs sm:text-xs tracking-wider">Info</span>

						<span class="text-xxs sm:text-sm">
							<ArrowRight weight="bold" />
						</span>
					</button>
				</div>
			</div>

			<div class="flex items-center gap-xxs">
				<span class="h-[10px] sm:h-[12px] w-[2px] border-l-2 border-gray-11 shrink-0" />

				<a
					class="flex items-center text-gray-12 gap-xxs hover:text-blue-10 transition-colors ease-in-out duration-150"
					href={data.siteUrl}
					target="_blank"
				>
					<span class="text-xxs sm:text-xs tracking-wider">Visit</span>

					<span class="text-xxs sm:text-sm">
						<ArrowUpRight weight="bold" />
					</span>
				</a>
			</div>
		</div>
	</div>
</div>
