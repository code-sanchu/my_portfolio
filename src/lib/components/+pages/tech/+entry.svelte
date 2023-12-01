<script lang="ts" context="module">
	import { onMount } from 'svelte';
	import { ArrowUpRight, GithubLogo } from 'phosphor-svelte';

	import { my_links_and_contacts } from '^data';

	import { AnimateSectionIn } from '^components';
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
	class={`absolute inset-0 flex justify-center ${
		showScrollbar ? 'overflow-y-auto' : 'overflow-hidden'
	}`}
>
	<AnimateSectionIn containerWidth={1000} color="red" skipWidthAnimation>
		<div>
			<h2
				class="font-medium uppercase tracking-wider text-red-10 text-sm xs:text-base sm:text-lg md:text-2xl cursor-pointer sm/md:cursor-auto"
			>
				Tech Stuff
			</h2>

			<div class="mt-md flex flex-wrap items-center text-xs xs:text-sm sm:text-base">
				<a
					class="flex gap-xxs xs:gap-xs items-center hover:text-red-11 transition-colors ease-in-out duration-100"
					href={my_links_and_contacts.git}
					target="_blank"
				>
					<span class=""><GithubLogo /></span>
					<span class="uppercase">my code</span>
					<span class=""><ArrowUpRight /></span>
				</a>,
				<p class="ml-xs">2019 - present.</p>
			</div>

			<div class="mt-lg overflow-auto pb-md pr-md">
				<div class="inline-grid border grid-cols-6 border-gray-4 text-base w-[900.3px]">
					<div
						class="box uppercase text-xs sm:text-sm underline decoration-dashed tracking-wide underline-offset-4 text-gray-12"
					>
						markup
					</div>
					<div class="box text-sm sm:text-base border-l border-gray-11">html</div>
					<div class="box border-l border-gray-4" />
					<div class="box" />
					<div class="box" />
					<div class="box" />

					<div
						class="box uppercase text-xs sm:text-sm tracking-wide underline decoration-dashed border-y text-gray-12"
					>
						styling
					</div>
					<div class="box text-sm sm:text-base border-y border-l border-gray-11">css</div>
					<div class="box text-sm sm:text-base border-y border-l">tailwind</div>
					<div class="box text-sm sm:text-base border-y border-l">twin.macro</div>
					<div class="box text-sm sm:text-base border-y border-l">emotion</div>
					<div class="box text-sm sm:text-base border-y border-l">styled components</div>

					<div
						class="box uppercase text-xs sm:text-sm tracking-wide underline decoration-dashed text-gray-12"
					>
						scripting
					</div>
					<div class="box text-sm sm:text-base border-l border-gray-11">javascript</div>
					<div class="box text-sm sm:text-base border-l">typescript</div>
					<div class="box text-sm sm:text-base border-l">svelte</div>
					<div class="box text-sm sm:text-base border-l" />
					<div class="box" />

					<div
						class="box border-y uppercase text-xs sm:text-sm tracking-wide underline decoration-dashed text-gray-12"
					>
						frameworks
					</div>
					<div class="box text-sm sm:text-base border-y border-l border-gray-11">react</div>
					<div class="box text-sm sm:text-base border-y border-l">svelte</div>
					<div class="box text-sm sm:text-base border-y border-l">next.js</div>
					<div class="box text-sm sm:text-base border-y border-l">gatsby</div>
					<div class="box text-sm sm:text-base border-y border-l">sveltekit</div>

					<div
						class="box uppercase text-xs sm:text-sm tracking-wide underline decoration-dashed text-gray-12"
					>
						testing
					</div>
					<div class="box text-sm sm:text-base border-l border-gray-11">jest</div>
					<div class="box text-sm sm:text-base border-l">cypress</div>
					<div class="box text-sm sm:text-base border-l">react testing library</div>
					<div class="box border-l" />
					<div class="box" />

					<div
						class="box border-y uppercase text-xs sm:text-sm tracking-wide underline decoration-dashed text-gray-12"
					>
						database
					</div>
					<div class="box text-sm sm:text-base border-y border-l border-gray-11">firebase</div>
					<div class="box text-sm sm:text-base border-y border-l">supabase</div>
					<div class="box text-sm sm:text-base border-y border-l">prisma</div>
					<div class="box border-y border-l" />
					<div class="box border-y" />

					<div
						class="box uppercase text-xs sm:text-sm tracking-wide underline decoration-dashed text-gray-12"
					>
						api
					</div>
					<div class="box text-sm sm:text-base border-l border-gray-11">react query</div>
					<div class="box text-sm sm:text-base border-l">rtk query</div>
					<div class="box text-sm sm:text-base border-l">trpc</div>
					<div class="box text-sm sm:text-base border-l">qraphql</div>
					<div class="box border-l" />

					<div
						class="box border-t uppercase text-xs sm:text-sm tracking-wide underline decoration-dashed text-gray-12"
					>
						platforms
					</div>
					<div class="box text-sm sm:text-base border-t border-l border-gray-11">squarespace</div>
					<div class="box text-sm sm:text-base border-t border-l">wix</div>
					<div class="box text-sm sm:text-base border-t border-l">shopify</div>
					<div class="box text-sm sm:text-base border-t border-l">stripe</div>
					<div class="box border-t border-l" />
				</div>
			</div>
		</div>
	</AnimateSectionIn>
</div>

<style>
	.box {
		@apply p-xs grid place-items-center bg-white border-y-gray-11 border-dashed whitespace-nowrap shrink-0;
	}
</style>
