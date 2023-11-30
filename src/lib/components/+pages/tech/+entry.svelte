<script>
	import { ArrowUpRight, GithubLogo } from 'phosphor-svelte';

	import { my_links_and_contacts } from '^data';

	import { AnimateSectionIn } from '^components';
</script>

<AnimateSectionIn containerWidth={1000} color="red" skipWidthAnimation>
	<div class="">
		<h2 class="text-red-11 uppercase underline tracking-wide decoration-2">Tech Stuff</h2>

		<div class="mt-sm flex items-center">
			<a
				class="flex gap-xs items-center hover:text-red-11 transition-colors ease-in-out duration-100"
				href={my_links_and_contacts.git}
				target="_blank"
			>
				<span><GithubLogo /></span>
				<span class="uppercase text-sm">my code</span>
				<span><ArrowUpRight /></span>
			</a>,
			<p class="ml-xs text-sm">2019 - present.</p>
		</div>

		<div class="overflow-auto pb-md">
			<div
				class="mt-md inline-grid grid-cols-6 border border-gray-4 text-base text-gray-11 w-[900.3px]"
			>
				<div class="box uppercase text-xs underline decoration-dashed tracking-wide text-gray-12">
					markup
				</div>
				<div class="box border-l border-gray-11 text-gray-10">html</div>
				<div class="box border-l border-gray-4" />
				<div class="box" />
				<div class="box" />
				<div class="box" />

				<div
					class="box uppercase text-xs tracking-wide underline decoration-dashed border-y text-gray-12"
				>
					styling
				</div>
				<div class="box border-y border-l border-gray-11 text-gray-11">css</div>
				<div class="box border-y border-l text-gray-11">tailwind</div>
				<div class="box border-y border-l text-gray-11">twin.macro</div>
				<div class="box border-y border-l text-gray-11">emotion</div>
				<div class="box border-y border-l">styled components</div>

				<div class="box uppercase text-xs tracking-wide underline decoration-dashed text-gray-12">
					scripting
				</div>
				<div class="box border-l border-gray-11">javascript</div>
				<div class="box border-l">typescript</div>
				<div class="box border-l">svelte</div>
				<div class="box border-l" />
				<div class="box" />

				<div
					class="box border-y uppercase text-xs tracking-wide underline decoration-dashed text-gray-12"
				>
					frameworks
				</div>
				<div class="box border-y border-l border-gray-11">react</div>
				<div class="box border-y border-l">svelte</div>
				<div class="box border-y border-l">next.js</div>
				<div class="box border-y border-l">gatsby</div>
				<div class="box border-y border-l">sveltekit</div>

				<div class="box uppercase text-xs tracking-wide underline decoration-dashed text-gray-12">
					testing
				</div>
				<div class="box border-l border-gray-11">jest</div>
				<div class="box border-l">cypress</div>
				<div class="box border-l">react testing library</div>
				<div class="box border-l" />
				<div class="box" />

				<div
					class="box border-y uppercase text-xs tracking-wide underline decoration-dashed text-gray-12"
				>
					database
				</div>
				<div class="box border-y border-l border-gray-11">firebase</div>
				<div class="box border-y border-l">supabase</div>
				<div class="box border-y border-l">prisma</div>
				<div class="box border-y border-l" />
				<div class="box border-y" />

				<div class="box uppercase text-xs tracking-wide underline decoration-dashed text-gray-12">
					api
				</div>
				<div class="box border-l border-gray-11">react query</div>
				<div class="box border-l">rtk query</div>
				<div class="box border-l">trpc</div>
				<div class="box border-l">qraphql</div>
				<div class="box border-l" />

				<div
					class="box border-y uppercase text-xs tracking-wide underline decoration-dashed text-gray-12"
				>
					platforms
				</div>
				<div class="box border-y border-l border-gray-11">squarespace</div>
				<div class="box border-y border-l">wix</div>
				<div class="box border-y border-l">shopify</div>
				<div class="box border-y border-l">stripe</div>
				<div class="box border-y border-l" />
			</div>
		</div>
	</div>
</AnimateSectionIn>

<style>
	.box {
		@apply p-xs grid place-items-center bg-white border-y-gray-11 border-dashed whitespace-nowrap shrink-0;
	}
</style>
