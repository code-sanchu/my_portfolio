<script lang="ts" context="module">
	import { ArrowRight, ArrowUpRight } from 'phosphor-svelte';

	import type { MyPick, Project } from '^types';

	import { Picture } from '^components';
</script>

<script lang="ts">
	export let data: MyPick<
		Project,
		'mainPicture' | 'title' | 'siteUrl' | 'year' | 'descriptionShort'
	> & {
		onClickInfo: () => void;
	};
</script>

<div class="pr-sm md:pr-md">
	<div class="relative aspect-[4/3] overflow-hidden p-xs sm:p-sm bg-gray-2 rounded-sm">
		<Picture data={data.mainPicture} imageClass="object-cover" />

		<div class="z-10 absolute bottom-0 w-full h-sm bg-gray-2 rounded-b-sm" />
	</div>

	<div class="mt-xs flex items-center gap-xs flex-wrap">
		<div class="leading-tight">
			<span class="text-blue-11 uppercase text-xs sm:text-xs md:text-sm tracking-[0.065em]">
				{data.title}, {data.year}
			</span>
			<span class="text-xs sm:text-sm tracking-wide">{data.descriptionShort}</span>
		</div>

		<div class="flex gap-sm items-end">
			<button
				class="relative shrink-0 flex items-center gap-xxs mr-xxs px-xxs sm:px-xs group/button text-black hover:text-blue-10 hover:border-blue-10 transition-colors ease-in-out duration-200 border-gray-12"
				on:click={data.onClickInfo}
				type="button"
			>
				<span class="absolute left-0 top-[15%] h-[80%] border-l border-inherit" />
				<span class="absolute left-0 bottom-0 w-full border-b border-inherit" />
				<span class="absolute right-0 bottom-0 h-[50%] border-l border-inherit" />

				<span
					class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[80%] text-xxs sm:text-sm md:text-sm"
				>
					<ArrowRight weight="thin" />
				</span>

				<span class="text-xxs sm:text-xs tracking-[0.075em]">Info</span>
			</button>

			<a
				class="relative flex items-center gap-xxs mr-xxs px-xxs sm:px-xs group/button text-black hover:text-blue-10 hover:border-blue-10 transition-colors ease-in-out duration-200 border-gray-12"
				href={data.siteUrl}
				target="_blank"
			>
				<span class="absolute left-0 top-[15%] h-[80%] border-l border-inherit" />
				<span class="absolute left-0 bottom-0 w-full border-b border-inherit" />

				<span
					class="absolute right-0 -bottom-[1px] sm:bottom-[-2px] lg:bottom-[-3px] translate-x-[72%] text-xxs sm:text-sm md:text-sm"
				>
					<ArrowUpRight weight="thin" />
				</span>

				<span class="text-xxs sm:text-xs tracking-[0.075em]">Visit</span>
			</a>
		</div>
	</div>
</div>
