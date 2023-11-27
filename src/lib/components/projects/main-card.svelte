<script lang="ts" context="module">
	import { Picture } from '^components';
	import type { Picture as PictureType } from '^types';
	import { ArrowRight, ArrowUpRight } from 'phosphor-svelte';
</script>

<script lang="ts">
	export let data: {
		picture: PictureType;
		title: string;
		siteUrl: string;
		onClickInfo: () => void;
	};
</script>

<div class="shrink-0 w-[600px]">
	<div class="relative aspect-[4/3] overflow-hidden p-sm bg-blue-2 rounded-sm">
		<Picture data={data.picture} imageClass="object-cover" />
		<div class="z-10 absolute bottom-0 w-full h-sm bg-blue-2 rounded-b-sm" />
	</div>

	<div class="mt-xs flex gap-xs items-center">
		<h4 class="text-blue-11 uppercase text-xs tracking-wider">{data.title}</h4>

		<div class="flex gap-xs items-end">
			<div class="flex items-center gap-xxs">
				<div class="flex items-center gap-xxs">
					<span class="h-[12px] w-[2px] bg-gray-11 shrink-0" />
					<button
						class="text-xs text-gray-12 tracking-wider"
						on:click={data.onClickInfo}
						type="button"
					>
						Info
					</button>
				</div>

				<span class="text-gray-12 text-sm"><ArrowRight weight="bold" /></span>
			</div>

			<div class="flex items-center gap-xxs">
				<div class="flex items-center gap-xxs">
					<span class="h-[12px] w-[2px] bg-gray-11" />
					<a class="text-xs text-gray-12 tracking-wider" href={data.siteUrl} target="_blank"
						>Visit</a
					>
				</div>

				<a class="text-gray-12 text-sm" href={data.siteUrl} target="_blank">
					<ArrowUpRight weight="bold" />
				</a>
			</div>
		</div>
	</div>
</div>
