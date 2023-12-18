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
	export let topFadeOut: boolean;

	const titleArr = strToTextColoursArr(data.title);
</script>

<div
	class={`pr-md flex flex-col transition-colors ease-out duration-700 ${
		topFadeOut ? 'text-gray-6 pointer-events-none' : 'text-gray-12'
	}`}
	transition:fade={{ duration: 400, easing: cubicOut }}
>
	<h2 class="flex items-end uppercase text-sm sm:text-base tracking-wider">
		{#each titleArr as letter (letter.key)}
			<span
				class={`transition-colors ease-out duration-700 ${
					topFadeOut ? 'text-gray-6' : letter.colour
				} ${letter.letter !== ' ' ? '' : 'mr-xxs'}`}>{letter.letter}</span
			>
		{/each}
		<span class="text-gray-6 text-xs ml-md">info</span>
	</h2>

	<div class="mt-sm flex font-mono text-sm">
		<p class="">Date&nbsp;—&nbsp;</p>
		<p class="">{@html data.year}.</p>
	</div>

	<div class="mt-xs flex font-mono text-sm">
		<p class="">Work&nbsp;—&nbsp;</p>
		<p class="">Design, build & maintenance.</p>
	</div>

	<div class="mt-md flex flex-col gap-xs text-sm">
		{#each data.descriptionLong as sentence}
			<p>{sentence}</p>
		{/each}
	</div>

	{#if data.features?.length}
		<div class="mt-md">
			<Features bind:topFadeOut features={data.features} {componentKey} />
		</div>
	{/if}

	<div class="flex items-center gap-sm mt-md">
		<h4 class="text-sm">
			<ArrowLineUpRight />
		</h4>

		<ExternalLink bind:topFadeOut text="visit" url={data.siteUrl}>
			<Globe slot="icon" />
		</ExternalLink>

		{#if data.performanceUrl}
			<ExternalLink
				bind:topFadeOut
				id={`${componentKey}-perf`}
				text="performance"
				url={data.performanceUrl}
			>
				<PersonSimpleRun slot="icon" />
			</ExternalLink>

			<Tooltip text="metrics on page speed, seo and others." triggeredBy={`${componentKey}-perf`} />
		{/if}
	</div>
</div>
