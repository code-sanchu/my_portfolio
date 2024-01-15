<script lang="ts" context="module">
	import { onDestroy, onMount } from 'svelte';
</script>

<script lang="ts">
	export let containerWidth: number;
	export let animateOut: boolean;

	let show = false;
	// let showLine = false;
	let hideCover = false;
	// let showContent = false;

	const handleTransition = () => {
		show = true;

		// showLine = true;

		setTimeout(() => {
			hideCover = true;

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

	$: {
		if (animateOut) {
			show = false;
		}
	}
</script>

<div
	class={`relative shrink-0 transition-all ease-out duration-[700ms] overflow-hidden`}
	style:width={show ? `${containerWidth}px` : '0px'}
>
	<div
		class={`z-10 absolute left-0 top-0 bottom-0 right-0 pointer-events-none transition-all ease-out duration-[1000ms] bg-white`}
		style:opacity={!hideCover ? 1 : 0}
	/>
	{#if hideCover}
		<slot />
	{/if}
</div>

<!-- style:background-color={!hideLine ? '#F9F9F9' : 'white'} -->
<!-- style:left="{!hideLine ? '0' : containerWidth}px" -->
