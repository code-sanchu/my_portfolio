<script lang="ts" context="module">
	import type { Project } from '^types';

	import { updateScroll } from '^stores';
	import { sectionReadyStore, type SectionReadyValues } from '^stores';

	import { Picture } from '^components';
	import PopUp from './pop-up.svelte';
	import AnimateInOut from './animate-in-out.svelte';
</script>

<script lang="ts">
	export let data: Project;
	export let animateOut: boolean;
	export let onPopupOpen: () => void;
	export let onPopupClose: () => void;

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
		updateScroll.disable(true);

		pictureNodeIdleRect = pictureNodeIdle.getBoundingClientRect();
		pictureNodeExpandedRect = pictureNodeExpanded.getBoundingClientRect();

		onPopupOpen();

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

					onPopupClose();
				}, 500);
			}, 50);
		}, 50);
	};

	let windowWidth: number;

	let containerWidth: number;

	let gap: number;

	$: {
		if (windowWidth) {
			containerWidth =
				windowWidth < 640
					? 240
					: windowWidth < 960
					? 300
					: windowWidth < 1200
					? 340
					: windowWidth < 1800
					? 400
					: windowWidth < 2400
					? 500
					: 600;

			gap = windowWidth < 1800 ? 20 : 40;
		}
	}

	let sectionReady: SectionReadyValues;

	sectionReadyStore.subscribe((state) => {
		sectionReady = state;
	});
</script>

<svelte:window bind:innerWidth={windowWidth} />

{#if containerWidth && gap}
	<AnimateInOut bind:containerWidth bind:animateOut>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div class="shrink-0" style:width="{containerWidth - gap}px" style:margin-right="{gap}px">
			<div class={`relative aspect-[3/4] overflow-hidden`} bind:this={pictureNodeIdle}>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div
					class={`bg-gray-2 ${
						expand === 'expanding' || expand === 'contracting' ? 'container-transitions' : ''
					} ${expand === 'contracting-init' ? 'pointer-events-none invisible' : ''}`}
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
					{#if sectionReady?.artImage}
						<Picture
							data={data.mainPicture}
							imageClass="absolute inset-0 object-cover w-full h-full"
						/>
					{/if}
				</div>
			</div>

			<div class="mt-xxs md:mt-xs 2xl:mt-sm flex items-baseline justify-between cursor-auto">
				<p class="text-xs tracking-wide lg:text-sm xl:text-base 2xl:text-[18px] mr-md">
					{data.title}
				</p>

				<div
					class="flex pr-xxxs md:pr-xxs text-[0.5rem] md:text-xxs xl:text-[0.68rem] 2xl:text-[0.8rem] uppercase tracking-wider text-gray-9"
				>
					<button class="mr-sm uppercase tracking-wider" on:click={handleExpand} type="button"
						>about</button
					>

					<a href={data.siteUrl} target="_blank">visit</a>
				</div>
			</div>
		</div>
	</AnimateInOut>

	<PopUp bind:expand onClose={handleContract} {data} bind:expandedImgNode={pictureNodeExpanded} />
{/if}

<style>
	.container-transitions {
		transition: top 500ms ease-in-out, left 500ms ease-in-out, width 500ms ease-in-out,
			height 500ms ease-in-out;
	}
</style>
