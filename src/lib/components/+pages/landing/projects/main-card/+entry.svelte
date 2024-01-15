<script lang="ts" context="module">
	import { updateScroll } from '^stores';

	import { Picture } from '^components';
	import PopUp from './pop-up.svelte';

	import type { Project } from '^types';
	import AnimateCardIn from '../animate-card-in.svelte';

	// transition out - just transiton opacity - don't translate image.
	// second img that translates maybe has to load in seperately? Should/can use js to load img in ? May not be possible due to Picture
	// reset scroll position on close
</script>

<script lang="ts">
	export let data: Project;
	export let animateOut: boolean;

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

<AnimateCardIn containerWidth={240} bind:animateOut>
	<div class="w-[220px] lg:w-[300px] shrink-0 mr-[1.25rem]">
		<div class={`relative aspect-[3/4] overflow-hidden`} bind:this={pictureNodeIdle}>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div
				class={`${
					expand === 'expanding' || expand === 'contracting' ? 'container-transitions' : ''
				} ${expand === 'expanded' ? 'pointer-events-none invisible' : ''}`}
				style:z-index={expand === 'expanding-init' || expand === 'expanding' ? 40 : 0}
				style:position={expand === 'idle' ||
				expand === 'expanded' ||
				expand === 'contracting' ||
				expand === 'contracting-init'
					? 'absolute'
					: 'fixed'}
				style:left="{expand === 'idle' ||
				expand === 'expanded' ||
				expand === 'contracting' ||
				expand === 'contracting-init'
					? 0
					: expand === 'expanding-init'
					? pictureNodeIdleRect.left
					: pictureNodeExpandedRect.left}px"
				style:top="{expand === 'idle' ||
				expand === 'expanded' ||
				expand === 'contracting' ||
				expand === 'contracting-init'
					? 0
					: expand === 'expanding-init'
					? pictureNodeIdleRect.top
					: pictureNodeExpandedRect.top}px"
				style:width={expand === 'idle' ||
				expand === 'expanded' ||
				expand === 'contracting' ||
				expand === 'contracting-init'
					? '100%'
					: expand === 'expanding-init'
					? `${pictureNodeIdleRect.width}px`
					: `${pictureNodeExpandedRect.width}px`}
				style:height={expand === 'idle' ||
				expand === 'expanded' ||
				expand === 'contracting' ||
				expand === 'contracting-init'
					? '100%'
					: expand === 'expanding-init'
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
</AnimateCardIn>

<PopUp bind:expand onClose={handleContract} {data} bind:expandedImgNode={pictureNodeExpanded} />

<style>
	.container-transitions {
		transition: top 500ms ease-in-out, left 500ms ease-in-out, width 500ms ease-in-out,
			height 500ms ease-in-out;
	}
</style>
