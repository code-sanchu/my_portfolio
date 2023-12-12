<script lang="ts" context="module">
	import { ArrowLineUpRight, Globe, PersonSimpleRun } from 'phosphor-svelte';
	import { cubicOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';

	import type { MyPick, Project } from '^types';

	import { Tooltip } from '^components';
	import { strToTextColoursArr } from '../_helpers';
	import ExternalLink from './external-link.svelte';
	import Features from './features.svelte';
</script>

<script lang="ts">
	export let data: MyPick<
		Project,
		'title' | 'descriptionLong' | 'siteUrl' | 'performanceUrl' | 'features' | 'year'
	>;
	export let componentKey: string;

	const titleArr = strToTextColoursArr(data.title);
</script>

<div class="pr-md flex flex-col" transition:fade={{ duration: 400, easing: cubicOut }}>
	<h2 class="flex uppercase text-sm sm:text-base tracking-wider">
		{#each titleArr as letter (letter.key)}
			<span class={`${letter.colour} ${letter.letter !== ' ' ? '' : 'mr-xxs'}`}
				>{letter.letter}</span
			>
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

		<ExternalLink text="visit" url={data.siteUrl}>
			<Globe slot="icon" />
		</ExternalLink>

		{#if data.performanceUrl}
			<ExternalLink id={`${componentKey}-perf`} text="performance" url={data.performanceUrl}>
				<PersonSimpleRun slot="icon" />
			</ExternalLink>

			<Tooltip text="metrics on page speed, seo and others." triggeredBy={`${componentKey}-perf`} />
		{/if}
	</div>
</div>
