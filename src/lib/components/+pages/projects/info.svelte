<script lang="ts" context="module">
	import { ArrowUpRight } from 'phosphor-svelte';
</script>

<script lang="ts">
	export let data: {
		title: string;
		text: string;
		siteUrl: string;
	};
</script>

<div class="pr-md">
	<span class="text-blue-11 uppercase text-sm tracking-wider">{data.title}</span>

	<span>{data.text}</span>

	<div class="mt-xs">
		<a
			class="inline-flex items-center text-gray-10 gap-xxs hover:text-blue-10 transition-colors ease-in-out duration-150 cursor-pointer"
			href={data.siteUrl}
			target="_blank"
		>
			<span class="tracking-wider uppercase text-[0.6rem]">Visit</span>
			<span class="text-xxs">
				<ArrowUpRight weight="bold" />
			</span>
		</a>
	</div>
</div>
