<script lang="ts" context="module">
	import { ArrowDown, ArrowUp, ArrowUpRight } from 'phosphor-svelte';
	import { slide } from 'svelte/transition';
</script>

<script lang="ts">
	export let data: {
		title: string;
		text: string;
		siteUrl: string;
		performanceUrl?: string;
		// tech?: string[];
	};

	let showTech = false;
</script>

<div class="pr-md">
	<span class="text-blue-11 uppercase text-sm tracking-wider">{data.title}</span>

	<span>{data.text}</span>

	<div class="mt-xs flex gap-xs items-center">
		<div class="flex items-center gap-xxs">
			<span class=" h-[10px] border-l-2 border-gray-8 shrink-0" />

			<a
				class="inline-flex items-center text-gray-10 gap-xxs hover:text-blue-10 transition-colors ease-in-out duration-150 cursor-pointer"
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
				<span class=" h-[10px] border-l-2 border-gray-8 shrink-0" />

				<a
					class="inline-flex items-center text-gray-10 gap-xxs hover:text-blue-10 transition-colors ease-in-out duration-150 cursor-pointer"
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

		<!-- <div class="flex items-center gap-xxs">
			<span class=" h-[11px] border-l-2 border-gray-8 shrink-0" />

			<button
				class="inline-flex items-center text-gray-10 gap-xxs hover:text-blue-10 transition-colors ease-in-out duration-150 cursor-pointer"
				on:click={() => (showTech = !showTech)}
				type="button"
			>
				<span class="tracking-wider uppercase text-[0.6rem]">Tech</span>
				<span class="text-xxs">
					{#if !showTech}
						<ArrowDown weight="bold" />
					{:else}
						<ArrowUp weight="bold" />
					{/if}
				</span>
			</button>
		</div> -->
	</div>

	<!-- 	{#if data.tech?.length && showTech}
		<div class="mt-xs" transition:slide>
			<p>
				{#each data.tech as line}
					<span>{line}</span><br />
				{/each}
			</p>
		</div>
	{/if} -->
</div>
