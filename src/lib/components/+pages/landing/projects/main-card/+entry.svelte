<script lang="ts" context="module">
	import { X } from 'phosphor-svelte';

	import { Picture } from '^components';

	import type { Project } from '^types';

	import AnimateCardIn from '../animate-card-in.svelte';

	// second img that translates maybe has to load in seperately? Should/can use js to load img in ? May not be possible due to Picture
</script>

<script lang="ts">
	export let data: Project;

	let expand:
		| 'idle'
		| 'expanding-init'
		| 'expanding'
		| 'expanded'
		| 'contracting-init'
		| 'contracting' = 'idle';

	let pictureNodeInit: HTMLDivElement;
	let pictureNodeInitRect: DOMRect;
	// let pictureNodeExpanded: HTMLDivElement;
	// let pictureNodeExpandedRect: DOMRect;

	$: {
		if (expand === 'expanding-init' || expand === 'contracting-init') {
		}
	}

	/* 	$: {
		if (expand === 'expanding-init') {
			document.body.style.overflow = 'hidden';
		}
	} */

	const handleExpand = () => {
		pictureNodeInitRect = pictureNodeInit.getBoundingClientRect();
		// pictureNodeExpandedRect = pictureNodeExpanded.getBoundingClientRect();

		expand = 'expanding-init';

		setTimeout(() => {
			expand = 'expanding';
		}, 50);

		setTimeout(() => {
			expand = 'expanded';
		}, 500);
	};

	const handleContract = () => {
		pictureNodeInitRect = pictureNodeInit.getBoundingClientRect();
		// pictureNodeExpandedRect = pictureNodeExpanded.getBoundingClientRect();

		expand = 'contracting-init';

		setTimeout(() => {
			expand = 'contracting';
		}, 50);

		setTimeout(() => {
			expand = 'idle';
		}, 500);
	};
</script>

<!-- <div
	class={`fixed left-0 top-0 w-screen min-h-screen bg-white z-40 transition-opacity ease-in duration-[500ms] overflow-hidden ${
		expand === 'idle' ? 'invisible pointer-events-none opacity-0' : ''
	}`}
>
	<div class="flex justify-end p-sm">
		<button class="text-lg" on:click={handleContract} type="button">
			<X />
		</button>
	</div>

	 <div class="flex justify-center">
		<div class="px-lg pt-lg w-full flex justify-center">
			<div
				class={`relative h-[60vh] max-w-[800px] aspect-[3/4] overflow-hidden ${
					expand === 'expanded' ? '' : 'pointer-events-none invisible'
				}`}
				bind:this={pictureNodeExpanded}
			>
				<Picture data={data.mainPicture} imageClass="absolute inset-0 object-cover w-full h-full" />
			</div>
		</div>
	</div> 
</div> -->

{#if pictureNodeInitRect}
	<div
		class={`fixed z-50 transforming-container ${
			expand === 'idle' || expand === 'expanded' ? 'pointer-events-none invisible' : ''
		}`}
		style:left="{pictureNodeInitRect.left}px"
		style:top="{pictureNodeInitRect.top}px"
		style:width="{pictureNodeInitRect.width}px"
		style:height="{pictureNodeInitRect.height}px"
	>
		<Picture data={data.mainPicture} imageClass="absolute inset-0 object-cover w-full h-full" />
	</div>
	<!-- <div
		class={`fixed z-50 transforming-container ${
			expand === 'idle' || expand === 'expanded' ? 'pointer-events-none invisible opacity-0' : ''
		}`}
		style:left="{expand === 'idle' ||
		expand === 'expanding-init' ||
		expand === 'contracting-init' ||
		expand === 'contracting'
			? pictureNodeInitRect.left
			: pictureNodeExpandedRect.left}px"
		style:top="{expand === 'idle' ||
		expand === 'expanding-init' ||
		expand === 'contracting-init' ||
		expand === 'contracting'
			? pictureNodeInitRect.top
			: pictureNodeExpandedRect.top}px"
		style:width="{expand === 'idle' ||
		expand === 'expanding-init' ||
		expand === 'contracting-init' ||
		expand === 'contracting'
			? pictureNodeInitRect.width
			: pictureNodeExpandedRect.width}px"
		style:height="{expand === 'idle' ||
		expand === 'expanding-init' ||
		expand === 'contracting-init' ||
		expand === 'contracting'
			? pictureNodeInitRect.height
			: pictureNodeExpandedRect.height}px"
	>
		<Picture data={data.mainPicture} imageClass="absolute inset-0 object-cover w-full h-full" />
	</div> -->
{/if}

<AnimateCardIn containerWidth={240}>
	<div class="w-[220px] lg:w-[300px] shrink-0 mr-[1.25rem]">
		<div
			class={`relative aspect-[3/4] overflow-hidden ${
				expand === 'idle' || expand === 'expanding-init' ? '' : 'invisible pointer-events-none'
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
				<button
					class="mr-sm text-[0.5rem] md:text-xxs uppercase tracking-wider text-gray-9"
					on:click={expand === 'idle' ? handleExpand : handleContract}
					type="button">more info</button
				>

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
