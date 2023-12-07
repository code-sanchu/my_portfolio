<script lang="ts" context="module">
	import { cubicOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';

	import { randomIntFromInterval } from '^helpers';
	import type { MyPick, Project } from '^types';

	import { Tooltip } from '^components';
	import Features from './features.svelte';
</script>

<script lang="ts">
	// todo: change animation. line comes in with width. update long description for each project.

	import { ArrowLineUpRight, Globe, PersonSimpleRun } from 'phosphor-svelte';

	export let data: MyPick<
		Project,
		'title' | 'descriptionLong' | 'siteUrl' | 'performanceUrl' | 'features' | 'year'
	>;
	export let componentKey: string;

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

<div class="pr-md flex flex-col" transition:fade={{ duration: 400, easing: cubicOut }}>
	<h2 class="flex uppercase text-sm sm:text-base tracking-wider">
		{#each data.title.split('') as letter}
			<span class={`${chooseRandomColor()} ${letter !== ' ' ? '' : 'mr-xxs'}`}>{letter}</span>
		{/each}
	</h2>

	<div class="mt-sm flex font-mono text-sm">
		<p class="">Date&nbsp;—&nbsp;</p>
		<p class="">{data.year}.</p>
	</div>

	<div class="mt-xs flex font-mono text-sm">
		<p class="">Work&nbsp;—&nbsp;</p>
		<p class="">Design, build & maintenance.</p>
	</div>

	<div class="mt-md">
		<p>
			Raie is an up and coming singer/songwriter with years of experience in the music world. She's
			worked with industry heavyweights in the production of her 3 albums and recently launched a
			new one — Red Brick Angel.
		</p>
		<p class="mt-xs">
			Raie wanted a website to showcase her music and document her journey through images, film and
			text.
		</p>
	</div>

	{#if data.features?.length}
		<div class="mt-md">
			<Features features={data.features} {componentKey} />
		</div>
	{/if}

	<div class="flex items-center gap-sm mt-md">
		<h4 class="text-sm">
			<ArrowLineUpRight />
		</h4>

		<div class="flex items-center gap-sm">
			<a
				class="inline-flex items-center gap-xxs text-gray-8 hover:text-my-light-blue transition-colors ease-in-out duration-150 cursor-pointer"
				href={data.siteUrl}
				target="_blank"
			>
				<Globe />
				<span class="uppercase font-mono text-xs text-gray-10 tracking-wide">visit</span>
			</a>
		</div>

		{#if data.performanceUrl}
			<div class="flex items-center gap-xxs text-gray-10">
				<a
					class="inline-flex items-center gap-xxs text-gray-8 hover:text-my-light-blue transition-colors ease-in-out duration-150 cursor-pointer"
					href={data.performanceUrl}
					target="_blank"
					id={`${componentKey}-perf`}
				>
					<PersonSimpleRun />
					<span class="uppercase font-mono text-xs text-gray-10 tracking-wide">performance</span>
				</a>
				<Tooltip
					text="performance metrics on page speed, seo and others."
					triggeredBy={`${componentKey}-perf`}
				/>
			</div>
		{/if}
	</div>
</div>
