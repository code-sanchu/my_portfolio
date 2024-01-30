<script lang="ts" context="module">
	import { onMount } from 'svelte';
	import { ArrowLineUpRight, X } from 'phosphor-svelte';

	import type { Project } from '^types';

	import { Picture } from '^components';

	const speed = 120;
	const smooth = 15;
</script>

<script lang="ts">
	export let expand:
		| 'idle'
		| 'expanding-init'
		| 'expanding'
		| 'expanded-prep'
		| 'expanded'
		| 'contracting-init'
		| 'contracting';

	export let onClose: () => void;
	export let data: Project;
	export let expandedImgNode: HTMLDivElement;

	let scrollNode: HTMLDivElement;

	let moving = false;
	let scrollToPos = 0;

	// let touchStartData: Touch;
	let prevTouchData: Touch;

	onMount(() => {
		if (scrollNode) {
			// @ts-ignore
			scrollToPos = scrollNode.scrollTop;

			scrollNode.addEventListener('wheel', scrolled, { passive: false });
			scrollNode.addEventListener('DOMMouseScroll', scrolled, { passive: false });

			scrollNode.addEventListener('touchstart', (e) => {
				const touchData = e.targetTouches[0];

				// touchStartData = touchData;
				prevTouchData = touchData;
			});

			scrollNode.addEventListener(
				'touchmove',
				(e) => {
					e.preventDefault();

					const touchMoveData = e.changedTouches[0];

					const touchDistance = touchMoveData.clientY - prevTouchData.clientY;

					const scrollDirection = touchDistance < 0 ? 'down' : 'up';

					if (scrollToPos === 0 && scrollDirection === 'up') {
						return;
					}

					const maxScrollToPos = scrollNode.scrollHeight - scrollNode.clientHeight;

					if (scrollToPos === maxScrollToPos && scrollDirection === 'down') {
						return;
					}

					scrollToPos += -touchDistance * 4;

					scrollToPos = Math.max(
						0,
						// @ts-ignore
						Math.min(scrollToPos, scrollNode.scrollHeight - scrollNode.clientHeight)
					);

					prevTouchData = touchMoveData;

					if (!moving) update();
				},
				{ passive: false }
			);

			scrollNode.addEventListener('scrollend', () => {
				// @ts-ignore

				if (moving) {
					return;
				}

				// @ts-ignore
				scrollToPos = scrollNode.scrollTop;
			});

			// @ts-ignore
			function scrolled(e) {
				e.preventDefault();

				let delta = normalizeWheelDelta(e);

				scrollToPos += -delta * speed;
				// @ts-ignore
				scrollToPos = Math.max(
					0,
					Math.min(scrollToPos, scrollNode.scrollHeight - scrollNode.clientHeight)
				); // limit scrolling

				if (!moving) update();
			}

			// @ts-ignore
			function normalizeWheelDelta(e) {
				if (e.detail) {
					if (e.wheelDelta)
						return (e.wheelDelta / e.detail / 40) * (e.detail > 0 ? 1 : -1); // Opera
					else return -e.detail / 3; // Firefox
				} else return e.wheelDelta / 120; // IE,Safari,Chrome
			}

			function update() {
				moving = true;

				// @ts-ignore
				let delta = (scrollToPos - scrollNode.scrollTop) / smooth;

				// @ts-ignore
				scrollNode.scrollTop += delta;

				if (Math.abs(delta) > 1) requestFrame(update);
				else moving = false;
			}

			let requestFrame = (function () {
				// requestAnimationFrame cross browser
				return (
					window.requestAnimationFrame ||
					// @ts-ignore
					window.webkitRequestAnimationFrame ||
					// @ts-ignore
					window.mozRequestAnimationFrame ||
					// @ts-ignore
					window.oRequestAnimationFrame ||
					// @ts-ignore
					window.msRequestAnimationFrame ||
					function (func) {
						window.setTimeout(func, 1000 / 50);
					}
				);
			})();
		}
	});
</script>

<div
	class={`fixed left-0 top-0 w-screen overflow-y-auto h-screen pb-2xl bg-white z-30 transition-opacity ease-linear duration-[500ms] cursor-auto ${
		expand === 'idle'
			? 'invisible pointer-events-none'
			: expand === 'contracting'
			? 'opacity-0'
			: 'opacity-100'
	}`}
	bind:this={scrollNode}
>
	<div class="flex justify-end p-sm md:p-md">
		<button class="text-lg md:text-xl xl:text-2xl" on:click={onClose} type="button">
			<X />
		</button>
	</div>

	<div class="px-lg pt-lg flex justify-center">
		<div class="w-[90vw] max-w-[800px]">
			<div class="w-full flex justify-center">
				<div
					class={`relative aspect-[3/4] w-full overflow-hidden ${
						expand === 'expanded-prep'
							? 'opacity-0 transition-opacity duration-[500ms]'
							: expand === 'expanded' || expand === 'contracting-init' || expand === 'contracting'
							? ''
							: 'pointer-events-none invisible'
					}`}
					bind:this={expandedImgNode}
				>
					<Picture
						data={data.mainPicture}
						imageClass="absolute inset-0 object-cover w-full h-full"
					/>
				</div>
			</div>

			<div
				class="mt-sm md:mt-md transition-opacity duration-300 ease-linear"
				style:opacity={expand === 'expanded' ? 1 : 0}
			>
				<div class="flex justify-between items-baseline">
					<div>
						<h1 class="uppercase text-sm md:text-base 3xl:text-lg tracking-widest">{data.title}</h1>
					</div>

					<div>
						<a
							class="text-[0.6rem] md:text-[0.75rem] 3xl:text-[0.9rem] font-serif uppercase tracking-widest flex items-baseline gap-xxs"
							href={data.siteUrl}
							target="_blank"
						>
							<span>visit</span>
							<span class="translate-y-[1px] md:translate-y-[2px]">
								<ArrowLineUpRight weight="thin" />
							</span>
						</a>
					</div>
				</div>

				<div class="mt-md">
					<p class="tracking-wide text-sm md:text-base 3xl:text-lg">{@html data.year}</p>
				</div>

				<div
					class="mt-md font-serif flex flex-col gap-sm 3xl:gap-md text-[15px] md:text-[17px] 3xl:text-[19px]"
				>
					<p>{@html data.workDescription}</p>

					{#each data.descriptionLong as paragraph}
						<p>{paragraph}</p>
					{/each}
				</div>

				<div class="mt-md md:mt-xl 3xl:mt-xl flex justify-end">
					<button
						class="uppercase text-xxs md:text-xs 3xl:text-sm tracking-widest text-gray-10"
						on:click={onClose}
						type="button">close</button
					>
				</div>
			</div>
		</div>
	</div>
</div>
