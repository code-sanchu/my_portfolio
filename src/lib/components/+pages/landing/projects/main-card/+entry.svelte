<script lang="ts" context="module">
	import { ArrowLineUpRight, X } from 'phosphor-svelte';

	import { updateScroll } from '^stores';

	import { Picture } from '^components';

	import type { Project } from '^types';

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

<div
	class={`fixed left-0 top-0 w-screen h-screen overflow-scroll pb-xl bg-white z-30 transition-opacity ease-in duration-[450ms] ${
		expand === 'idle'
			? '-z-10 pointer-events-none opacity-0'
			: expand === 'contracting'
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

<style>
	.container-transitions {
		transition: top 500ms ease-in, left 500ms ease-in, width 500ms ease-in, height 500ms ease-in;
	}
</style>
