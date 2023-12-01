<script lang="ts" context="module">
	import { onMount } from 'svelte';
	import { AnimateSectionIn } from '^components';
	import { ArrowLineRight } from 'phosphor-svelte';
</script>

<script lang="ts">
	let showScrollbar = false;

	onMount(() => {
		const animationTime = 1600;

		setTimeout(() => {
			showScrollbar = true;
		}, animationTime);
	});
</script>

<div
	class={`absolute right-0 max-w-full h-full overflow-x-hidden pb-sm ${
		showScrollbar ? 'overflow-y-auto' : 'overflow-y-hidden'
	}`}
>
	<AnimateSectionIn containerWidth={768} color="green" skipWidthAnimation>
		<div class="max-h-full">
			<h2
				class="mb-xxs font-medium uppercase tracking-wider text-green-10 text-sm xs:text-base sm:text-lg md:text-2xl cursor-pointer sm/md:cursor-auto"
			>
				Tech-Poiesis
			</h2>

			<span class="text-sm xs:text-base md:text-lg xl:text-xl font-medium">
				I'm a developer who creates unique sites made to your specifications. The prototyping and
				design stages are 2 way processes between us; followed by a build stage in which I use the
				most performant tools for your site. Optional features include: shop, custom content
				management system, domain management with email and much more. I also work with content
				management systems such as Squarespace. Get in touch to find out what's possible.
			</span>
			<p class="mt-sm flex items-center gap-xs">
				<span class="text-xs md:text-base">
					<ArrowLineRight weight="bold" />
				</span>
				<span
					class="text-xs sm:text-sm md:text-base uppercase tracking-wider whitespace-nowrap underline sm:decoration-2 font-medium"
				>
					hello@tech-poiesis.net
				</span>
			</p>

			<p class="mt-sm flex items-center gap-xs">
				<span class="text-xs md:text-base">
					<ArrowLineRight weight="bold" />
				</span>
				<span
					class="text-xs sm:text-sm md:text-base uppercase tracking-wider whitespace-nowrap underline sm:decoration-2 font-medium"
					>London, UK.</span
				>
			</p>
		</div>
	</AnimateSectionIn>
</div>
