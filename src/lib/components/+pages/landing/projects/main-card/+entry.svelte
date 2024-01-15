<script lang="ts" context="module">
	import { updateScroll } from '^stores';

	import { Picture } from '^components';
	import PopUp from './pop-up.svelte';

	import type { Project } from '^types';

	// transition out - just transiton opacity - don't translate image.
	// second img that translates maybe has to load in seperately? Should/can use js to load img in ? May not be possible due to Picture
</script>

<script lang="ts">
	export let data: Project;

	let expand:
		| 'idle'
		| 'expanding-init'
		| 'expanding'
		| 'expanded-prep'
		| 'expanded'
		| 'contracting-init'
		| 'contracting' = 'idle';

	let pictureNodeIdle: HTMLDivElement;
	$: pictureNodeIdleRect = pictureNodeIdle?.getBoundingClientRect();
	let pictureNodeExpanded: HTMLDivElement;
	$: pictureNodeExpandedRect = pictureNodeExpanded?.getBoundingClientRect();

	const handleExpand = () => {
		pictureNodeIdleRect = pictureNodeIdle.getBoundingClientRect();
		pictureNodeExpandedRect = pictureNodeExpanded.getBoundingClientRect();

		updateScroll.disable(true);

		setTimeout(() => {
			expand = 'expanding-init';

			setTimeout(() => {
				expand = 'expanding';

				setTimeout(() => {
					expand = 'expanded-prep';

					setTimeout(() => {
						expand = 'expanded';
					}, 50);
				}, 500);
			}, 50);
		}, 50);
	};

	const handleContract = () => {
		pictureNodeIdleRect = pictureNodeIdle.getBoundingClientRect();
		pictureNodeExpandedRect = pictureNodeExpanded.getBoundingClientRect();

		updateScroll.disable(false);

		setTimeout(() => {
			expand = 'contracting-init';

			setTimeout(() => {
				expand = 'contracting';

				setTimeout(() => {
					expand = 'idle';
				}, 500);
			}, 50);
		}, 50);
	};
</script>

<!-- <AnimateCardIn containerWidth={240}> -->
<div class="w-[220px] lg:w-[300px] shrink-0 mr-[1.25rem]">
	<div class={`relative aspect-[3/4] overflow-hidden`} bind:this={pictureNodeIdle}>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class={`z-40 ${
				expand === 'expanding' || expand === 'contracting' ? 'container-transitions' : ''
			} ${expand === 'expanded' ? 'pointer-events-none invisible' : ''}`}
			style:position={expand === 'idle' ? 'absolute' : 'fixed'}
			style:left="{expand === 'idle'
				? 0
				: expand === 'expanding-init' || expand === 'contracting'
				? pictureNodeIdleRect.left
				: pictureNodeExpandedRect.left}px"
			style:top="{expand === 'idle'
				? 0
				: expand === 'expanding-init' || expand === 'contracting'
				? pictureNodeIdleRect.top
				: pictureNodeExpandedRect.top}px"
			style:width={expand === 'idle'
				? '100%'
				: expand === 'expanding-init' || expand === 'contracting'
				? `${pictureNodeIdleRect.width}px`
				: `${pictureNodeExpandedRect.width}px`}
			style:height={expand === 'idle'
				? '100%'
				: expand === 'expanding-init' || expand === 'contracting'
				? `${pictureNodeIdleRect.height}px`
				: `${pictureNodeExpandedRect.height}px`}
		>
			<Picture data={data.mainPicture} imageClass="absolute inset-0 object-cover w-full h-full" />
		</div>
	</div>

	<div class="mt-xxs flex items-baseline justify-between">
		<p class="text-xs tracking-wide lg:text-sm mr-md">{data.title}</p>

		<div
			class="flex pr-xxxs md:pr-xxs text-[0.5rem] md:text-xxs uppercase tracking-wider text-gray-9"
		>
			<button
				class="mr-sm text-[0.5rem] md:text-xxs uppercase tracking-wider text-gray-9"
				on:click={handleExpand}
				type="button">about</button
			>

			<a href={data.siteUrl} target="_blank">visit</a>
		</div>
	</div>
</div>

<!-- </AnimateCardIn> -->

<PopUp bind:expand onClose={handleContract} {data} bind:expandedImgNode={pictureNodeExpanded} />

<style>
	.container-transitions {
		transition: top 500ms ease-in, left 500ms ease-in, width 500ms ease-in, height 500ms ease-in;
	}
</style>
