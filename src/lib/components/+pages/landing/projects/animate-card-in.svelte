<script lang="ts" context="module">
	import { onMount } from 'svelte';
</script>

<script lang="ts">
	export let containerWidth: number;
	export let skipWidthAnimation = false;

	let show = false;
	let showLine = false;
	let hideLine = false;
	let showContent = false;

	const handleTransition = () => {
		show = true;

		showLine = true;

		setTimeout(() => {
			hideLine = true;

			setTimeout(() => {
				showContent = true;
			}, 200);
		}, 500);
	};

	onMount(() => {
		setTimeout(() => {
			handleTransition();
		}, 100);
	});
</script>

<div
	class={`relative max-w-full shrink-0 transition-all ease-in-out`}
	style:width={show ? `${containerWidth}px` : '0px'}
	style:transition-duration={skipWidthAnimation ? '0ms' : '1000ms'}
>
	<div
		class={`z-10 absolute left-0 top-0 transition-all ease-in duration-[800ms] h-[3px] max-w-full bg-gray-4 ${
			hideLine ? 'opacity-0' : ''
		}`}
		style:width={showLine ? `${containerWidth - 24}px` : '0px'}
	/>

	{#if showContent}
		<slot />
	{/if}
</div>
