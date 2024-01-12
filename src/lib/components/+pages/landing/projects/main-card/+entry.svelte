<script lang="ts" context="module">
	import { X } from 'phosphor-svelte';

	import { Picture } from '^components';

	import type { Project } from '^types';

	import AnimateCardIn from '../animate-card-in.svelte';

	// second img that translates maybe has to load in seperately? Should/can use js to load img in ? May not be possible due to Picture
</script>

<script lang="ts">
	import { ArrowLineUpRight } from 'phosphor-svelte';

	export let data: Project;

	let expand:
		| 'idle'
		| 'expanding-init'
		| 'expanding-1'
		| 'expanding-2'
		| 'expanded'
		| 'contracting-init'
		| 'contracting-1'
		| 'contracting-2' = 'idle';

	let pictureNodeInit: HTMLDivElement;
	$: pictureNodeInitRect = pictureNodeInit?.getBoundingClientRect();
	let pictureNodeExpanded: HTMLDivElement;
	$: pictureNodeExpandedRect = pictureNodeExpanded?.getBoundingClientRect();

	/* 	$: {
		if (expand === 'expanded') {
			document.body.style.maxHeight = '100vh';
			document.body.style.overflow = 'hidden';
		}
	}

	$: {
		if (expand === 'idle') {
			document.body.style.maxHeight = '';
			document.body.style.overflow = 'auto';
		}
	}

	onDestroy(() => {
		document.body.style.maxHeight = '';
		document.body.style.overflow = 'auto';
	}); */

	const handleExpand = () => {
		expand = 'expanding-init';

		pictureNodeInitRect = pictureNodeInit.getBoundingClientRect();
		pictureNodeExpandedRect = pictureNodeExpanded.getBoundingClientRect();

		setTimeout(() => {
			expand = 'expanding-1';
		}, 50);

		setTimeout(() => {
			expand = 'expanding-2';
		}, 250);

		setTimeout(() => {
			expand = 'expanded';
		}, 500);
	};

	const handleContract = () => {
		pictureNodeInitRect = pictureNodeInit.getBoundingClientRect();
		pictureNodeExpandedRect = pictureNodeExpanded.getBoundingClientRect();

		expand = 'contracting-init';

		setTimeout(() => {
			expand = 'contracting-1';
		}, 50);

		setTimeout(() => {
			expand = 'contracting-2';
		}, 250);

		setTimeout(() => {
			expand = 'idle';
		}, 500);
	};
</script>

{#if pictureNodeInitRect}
	{@const useInitRect =
		expand === 'idle' ||
		expand === 'expanding-init' ||
		expand === 'contracting-1' ||
		expand === 'contracting-2'}
	<div
		class={`fixed z-50 transforming-container ${
			expand === 'idle' || expand === 'expanded' ? 'pointer-events-none -z-10 opacity-0' : ''
		}`}
		style:left="{useInitRect ? pictureNodeInitRect.left : pictureNodeExpandedRect.left}px"
		style:top="{useInitRect ? pictureNodeInitRect.top : pictureNodeExpandedRect.top}px"
		style:width="{useInitRect ? pictureNodeInitRect.width : pictureNodeExpandedRect.width}px"
		style:height="{useInitRect ? pictureNodeInitRect.height : pictureNodeExpandedRect.height}px"
	>
		<Picture data={data.mainPicture} imageClass="absolute inset-0 object-cover w-full h-full" />
	</div>
{/if}

<div
	class={`fixed left-0 top-0 w-screen h-screen overflow-auto pb-xl bg-white z-40 transition-opacity ease-in duration-[450ms] ${
		expand === 'idle'
			? '-z-10 pointer-events-none opacity-0'
			: expand === 'contracting-1' || expand === 'contracting-2'
			? 'opacity-0'
			: 'opacity-100'
	}`}
>
	<div class="flex justify-end p-sm">
		<button class="text-lg" on:click={handleContract} type="button">
			<X />
		</button>
	</div>

	<div class="px-lg pt-lg flex justify-center">
		<div class="w-[80vw] max-w-[800px]">
			<div class="w-full flex justify-center">
				<div
					class={`relative aspect-[3/4] w-full overflow-hidden ${
						expand === 'expanded' ? '' : 'pointer-events-none invisible'
					}`}
					bind:this={pictureNodeExpanded}
				>
					<Picture
						data={data.mainPicture}
						imageClass="absolute inset-0 object-cover w-full h-full"
					/>
				</div>
			</div>

			<div class="mt-sm flex justify-between items-baseline">
				<div><h1 class="uppercase text-sm tracking-widest">{data.title}</h1></div>
				<div>
					<a
						class="text-[0.6rem] text-gray-9 uppercase tracking-widest flex items-baseline gap-xxs"
						href={data.siteUrl}
						target="_blank"
					>
						<span>visit</span>
						<span class="translate-y-[1px]">
							<ArrowLineUpRight weight="thin" />
						</span>
					</a>
				</div>
			</div>

			<div class="mt-md">
				<p class="tracking-wide text-sm">{@html data.year}</p>
			</div>

			<p class="mt-md font-serif">{@html data.workDescription}</p>

			<div class="mt-md font-serif">
				{#each data.descriptionLong as paragraph}
					<p>{paragraph}</p>
				{/each}
			</div>

			<div class="mt-md flex justify-end">
				<button
					class="uppercase text-xxs tracking-widest text-gray-10"
					on:click={handleContract}
					type="button">close</button
				>
			</div>
		</div>
	</div>
</div>

<AnimateCardIn containerWidth={240}>
	<div class="w-[220px] lg:w-[300px] shrink-0 mr-[1.25rem]">
		<div
			class={`relative aspect-[3/4] overflow-hidden ${
				expand === 'idle' || expand === 'expanding-init' ? '' : '-z-10 pointer-events-none'
			}`}
			bind:this={pictureNodeInit}
		>
			<Picture data={data.mainPicture} imageClass="absolute inset-0 object-cover w-full h-full" />
		</div>

		<div class="mt-xxs flex items-baseline justify-between">
			<p class="text-xs tracking-wide lg:text-sm mr-md">{data.title}</p>

			<div
				class="flex pr-xxxs md:pr-xxs text-[0.5rem] md:text-xxs uppercase tracking-wider text-gray-9"
			>
				<!-- 				<button
					class="mr-sm text-[0.5rem] md:text-xxs uppercase tracking-wider text-gray-9"
					on:click={handleExpand}
					type="button">about</button
				> -->

				<a href={data.siteUrl} target="_blank">visit</a>
			</div>
		</div>
	</div>
</AnimateCardIn>

<style>
	.transforming-container {
		transition: top 450ms ease-in, left 450ms ease-in, width 450ms ease-in, height 450ms ease-in;
	}
</style>
