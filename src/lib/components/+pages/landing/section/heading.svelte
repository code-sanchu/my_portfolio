<script context="module" lang="ts">
	import HorizontalSpacing from './horizontal-spacing.svelte';
</script>

<script lang="ts">
	export let align: 'left' | 'right';
	export let text: string;
</script>

<HorizontalSpacing>
	<div class={`flex flex-col ${align === 'right' ? 'items-end' : ''}`}>
		<h2 class="uppercase font-light lg:text-lg tracking-widest text-gray-10">{text}</h2>

		<div class="mt-sm lg:mt-lg w-[64px] h-[5px] bg-gray-4" />
	</div>
</HorizontalSpacing>
