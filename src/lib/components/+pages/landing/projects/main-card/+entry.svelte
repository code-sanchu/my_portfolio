<script lang="ts" context="module">
	import { ArrowLineRight, ArrowLineUpRight } from 'phosphor-svelte';
	import { cubicOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';

	import type { MyPick, Project } from '^types';

	import { Picture } from '^components';
	import { strToTextColoursArr } from '../_helpers';
</script>

<script lang="ts">
	export let data: MyPick<
		Project,
		'mainPicture' | 'title' | 'siteUrl' | 'year' | 'descriptionShort'
	>;
	export let onClickInfo: () => void;

	const titleArr = strToTextColoursArr(data.title);
</script>

<div class="pr-sm md:pr-md" transition:fade={{ duration: 400, easing: cubicOut }}>
	<div
		class={`relative aspect-[4/3] overflow-hidden p-xs sm:p-sm bg-white shadow-lg border border-gray-3 rounded-sm`}
	>
		<Picture data={data.mainPicture} imageClass="object-cover" />

		<div class="z-10 absolute left-0 right-0 bottom-0 w-full h-sm bg-white rounded-b-sm" />
	</div>

	<div class={`relative mt-xs flex flex-wrap gap-y-xxs items-baseline`}>
		<span class="flex uppercase text-sm tracking-wider">
			{#each titleArr as letter (letter.key)}
				<span class={`${letter.colour} ${letter.letter !== ' ' ? '' : 'mr-xxs'}`}
					>{letter.letter}</span
				>
			{/each}
		</span>
		<span class="text-sm text-gray-12">, {@html data.year}</span>
		<span class="text-gray-12 text-sm">&nbsp;·&nbsp;{@html data.descriptionShort}</span>
		<span class="text-sm flex items-baseline"
			>&nbsp;·&nbsp;
			<button class="flex items-baseline group/link" on:click={onClickInfo} type="button">
				<span class="text-my-light-blue self-center -translate-y-[1px]"><ArrowLineRight /></span>
				<span
					class="text-gray-12 text-xxs ml-[3px] uppercase underline decoration-transparent group-hover/link:text-my-light-blue transition-all ease-linear duration-200"
					>info</span
				>
			</button>
		</span>
		<span class="flex items-baseline text-sm">
			&nbsp;
			<a class="flex items-baseline group/link" href={data.siteUrl}>
				<span class="text-my-light-blue self-center -translate-y-[1px]"><ArrowLineUpRight /></span>
				<span
					class="text-gray-12 text-xxs ml-[3px] uppercase underline decoration-transparent group-hover/link:text-my-light-blue transition-all ease-linear duration-200"
					>visit
				</span>
			</a>
		</span>
	</div>
</div>
