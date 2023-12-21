<script lang="ts" context="module">
	import { ArrowLineRight, ArrowLineUpRight } from 'phosphor-svelte';

	import type { MyPick, Project } from '^types';

	import { Picture } from '^components';
	import { onMount } from 'svelte';
	import { strToTextColoursArr } from '../_helpers';
</script>

<script lang="ts">
	export let data: MyPick<
		Project,
		'mainPicture' | 'title' | 'siteUrl' | 'year' | 'descriptionShort'
	>;
	export let onClickInfo: () => void;
	export let topFadeOut: boolean;

	const titleArr = strToTextColoursArr(data.title);

	let animateIn1 = false;

	let animateIn2 = false;

	onMount(() => {
		setTimeout(() => {
			animateIn1 = true;
		}, 50);

		setTimeout(() => {
			animateIn2 = true;
		}, 300);
	});
</script>

<div
	class={`pr-sm md:pr-md transition-colors ease-out duration-700 ${
		topFadeOut ? 'text-gray-6 pointer-events-none' : 'text-gray-12'
	}`}
>
	<div
		class={`relative aspect-[4/3] overflow-hidden p-xs sm:p-sm bg-white shadow-lg border border-gray-3 rounded-sm transition-all ease-out duration-700 ${
			!animateIn1 ? 'opacity-0' : topFadeOut ? 'grayscale opacity-20' : ''
		}`}
	>
		<Picture data={data.mainPicture} imageClass="object-cover" />

		<div class="z-10 absolute left-0 right-0 bottom-0 w-full h-sm bg-white rounded-b-sm" />
	</div>

	<div
		class={`relative mt-md inline-flex flex-wrap leading-6 font-light items-baseline transition-all duration-[300ms] ease-linear  ${
			animateIn2 ? '' : 'opacity-0 translate-y-xs'
		}`}
	>
		<span class="inline-flex uppercase text-sm tracking-[0.06em]">
			{#each titleArr as letter (letter.key)}
				<span
					class={`transition-colors ease-out duration-700 ${
						topFadeOut ? 'text-gray-6' : letter.colour
					} ${letter.letter !== ' ' ? '' : 'mr-xxs'}`}>{letter.letter}</span
				>
			{/each}
		</span>

		<span class="flex flex-wrap">
			<span class="text-sm tracking-[0.06em]">, {@html data.year}</span>

			<span class="text-sm float-left">&nbsp;·&nbsp;{@html data.descriptionShort}</span>
		</span>

		<span class="text-sm flex items-baseline"
			>&nbsp;·&nbsp;
			<button class="flex items-baseline group/link" on:click={onClickInfo} type="button">
				<span
					class={`self-center -translate-y-[1px] ${
						topFadeOut ? 'text-gray-6' : 'text-my-light-blue'
					}`}><ArrowLineRight /></span
				>
				<span
					class="text-xxs ml-[3px] uppercase tracking-[0.06em] group-hover/link:text-my-light-blue transition-all ease-linear duration-200"
					>info</span
				>
			</button>
		</span>

		<span class="flex items-baseline text-sm">
			&nbsp;
			<a class="flex items-baseline group/link" href={data.siteUrl} target="_blank">
				<span
					class={`self-center -translate-y-[1px] ${
						topFadeOut ? 'text-gray-6' : 'text-my-light-blue'
					}`}><ArrowLineUpRight /></span
				>
				<span
					class="text-xxs ml-[3px] tracking-[0.06em] uppercase group-hover/link:text-my-light-blue transition-all ease-linear duration-200"
					>visit
				</span>
			</a>
		</span>
	</div>
</div>
