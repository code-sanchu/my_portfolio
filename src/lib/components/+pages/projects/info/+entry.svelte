<script lang="ts" context="module">
	import { ArrowUpRight } from 'phosphor-svelte';

	import Features from './features.svelte';
	import type { Project, MyPick } from '^types';
</script>

<script lang="ts">
	export let data: MyPick<
		Project,
		'title' | 'infoText' | 'siteUrl' | 'performanceUrl' | 'features'
	>;
	export let componentKey: string;
</script>

<div class="pr-md flex flex-col gap-sm">
	<div>
		<span class="text-blue-11 uppercase text-sm tracking-wider">{data.title}</span>

		<span>{data.infoText}</span>
	</div>

	{#if data.features}
		<Features features={data.features} {componentKey} />
	{/if}

	<div class="flex gap-xs">
		<div class="flex items-center gap-xxs">
			<span class=" h-[10px] border-l-2 border-gray-9 shrink-0" />

			<a
				class="inline-flex items-center gap-xxs hover:text-blue-10 transition-colors ease-in-out duration-150 cursor-pointer"
				href={data.siteUrl}
				target="_blank"
			>
				<span class="tracking-wider uppercase text-[0.6rem]">Visit</span>
				<span class="text-xxs">
					<ArrowUpRight weight="bold" />
				</span>
			</a>
		</div>

		{#if data.performanceUrl}
			<div class="flex items-center gap-xxs">
				<span class=" h-[10px] border-l-2 border-gray-9 shrink-0" />

				<a
					class="inline-flex items-center gap-xxs hover:text-blue-10 transition-colors ease-in-out duration-150 cursor-pointer"
					href={data.performanceUrl}
					target="_blank"
				>
					<span class="tracking-wider uppercase text-[0.6rem]">Perf</span>
					<span class="text-xxs">
						<ArrowUpRight weight="bold" />
					</span>
				</a>
			</div>
		{/if}
	</div>
</div>
