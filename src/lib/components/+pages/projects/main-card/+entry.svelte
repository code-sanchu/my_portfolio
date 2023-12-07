<script lang="ts" context="module">
	import { fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { ArrowLineRight, ArrowLineUpRight } from 'phosphor-svelte';

	import type { MyPick, Project } from '^types';
	import { randomIntFromInterval } from '^helpers';

	import { Picture } from '^components';
</script>

<script lang="ts">
	export let data: MyPick<
		Project,
		'mainPicture' | 'title' | 'siteUrl' | 'year' | 'descriptionShort'
	>;
	export let onClickInfo: () => void;

	const textStrings = [
		'text-my-olive',
		'text-my-light-blue',
		'text-my-dark-red',
		'text-my-sea-green',
		'text-my-dark-olive',
		'text-my-orange',
		'text-my-dark-slate-gray',
		'text-my-plum',
		'text-my-steel-blue',
		'text-my-royal-blue',
		'text-my-golden-rod',
		'text-my-navy-blue',
		'text-my-red-fire',
		'text-my-forest-green',
		'text-my-tomato',
		'text-my-rosy-brown'
	];

	const chooseRandomColor = () => {
		const num = randomIntFromInterval(0, textStrings.length - 1);

		return textStrings[num];
	};
</script>

<div class="pr-sm md:pr-md" transition:fade={{ duration: 400, easing: cubicOut }}>
	<div class="relative aspect-[4/3] overflow-hidden p-xs sm:p-sm bg-gray-2 rounded-sm">
		<Picture data={data.mainPicture} imageClass="object-cover" />

		<div class="z-10 absolute bottom-0 w-full h-sm bg-gray-2 rounded-b-sm" />
	</div>

	<div class="relative mt-xs flex flex-wrap items-baseline">
		<span class="flex uppercase text-sm tracking-wider">
			{#each data.title.split('') as letter}
				<span class={`${chooseRandomColor()} ${letter !== ' ' ? '' : 'mr-xxs'}`}>{letter}</span>
			{/each}
		</span>
		<span class="text-sm text-gray-12">, {data.year}</span>
		<span class="text-gray-12 text-sm">&nbsp;·&nbsp;{data.descriptionShort}</span>
		<span class="text-sm flex items-baseline"
			>&nbsp;·&nbsp;
			<button class="flex items-baseline" on:click={onClickInfo} type="button">
				<span class="text-my-light-blue self-center -translate-y-[1px]"><ArrowLineRight /></span>
				<span class="text-gray-12 text-xxs ml-[3px] uppercase">info</span>
			</button>
		</span>
		<span class="flex items-baseline text-sm">
			&nbsp;
			<a class="flex items-baseline" href={data.siteUrl}>
				<span class="text-my-light-blue self-center -translate-y-[1px]"><ArrowLineUpRight /></span>
				<span class="text-gray-12 text-xxs ml-[3px] uppercase">visit </span>
			</a>
		</span>
	</div>
</div>
