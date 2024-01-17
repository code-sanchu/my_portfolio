<script context="module" lang="ts">
	import HorizontalSpacing from './horizontal-spacing.svelte';
</script>

<script lang="ts">
	export let align: 'left' | 'right';
	export let text: string;
</script>

<HorizontalSpacing>
	<div class={`flex flex-col ${align === 'right' ? 'items-end' : ''}`}>
		<h2
			class="uppercase font-light lg:text-lg xl:text-xl 2xl:text-2xl tracking-widest text-gray-10"
		>
			{text}
		</h2>

		<div
			class="mt-sm md:mt-md xl:mt-[1.75rem] 2xl:mt-[2rem] w-[64px] xl:w-[72px] 2xl:w-[82px] h-[5px] md:h-[6px] xl:h-[8px] 2xl:h-[10px] bg-gray-4"
		/>
	</div>
</HorizontalSpacing>
