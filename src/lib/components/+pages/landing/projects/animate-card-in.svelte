<script lang="ts" context="module">
	import { onMount } from 'svelte';
</script>

<script lang="ts">
	export let containerWidth: number;

	let show = false;
	// let showLine = false;
	let hideLine = false;
	// let showContent = false;

	const handleTransition = () => {
		show = true;

		// showLine = true;

		setTimeout(() => {
			hideLine = true;

			/* 			setTimeout(() => {
				showContent = true;
			}, 200); */
		}, 350);
	};

	onMount(() => {
		setTimeout(() => {
			handleTransition();
		}, 100);
	});
</script>

<div
	class={`relative max-w-full shrink-0 transition-all ease-out duration-[700ms]`}
	style:width={show ? `${containerWidth}px` : '0px'}
>
	<div
		class={`z-10 absolute left-0 top-0 bottom-0 right-0 transition-all ease-out duration-[1000ms] bg-white`}
		style:opacity={!hideLine ? 1 : 0}
	/>
	{#if hideLine}
		<slot />
	{/if}
</div>

<!-- style:background-color={!hideLine ? '#F9F9F9' : 'white'} -->
<!-- style:left="{!hideLine ? '0' : containerWidth}px" -->
