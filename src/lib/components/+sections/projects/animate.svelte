<script lang="ts" context="module">
	import { onMount } from 'svelte';
</script>

<script lang="ts">
	export let containerWidth: number;

	let show = false;
	let showLine = false;
	let hideLine = false;
	let showContent = false;

	const handleTransition = () => {
		show = true;

		setTimeout(() => {
			showLine = true;

			setTimeout(() => {
				hideLine = true;

				setTimeout(() => {
					showContent = true;
				}, 200);
			}, 250);
		}, 200);
	};

	onMount(() => {
		setTimeout(() => {
			handleTransition();
		}, 100);
	});
</script>

<div />

<div
	class={`relative shrink-0 transition-all ease-in duration-200 `}
	style:width={show ? `${containerWidth}px` : '0px'}
>
	<div
		class={`z-10 absolute left-0 top-0 transition-all ease-in duration-300 h-[3px] bg-blue-9 ${
			hideLine ? 'opacity-0' : ''
		}`}
		style:width={showLine ? `${containerWidth - 24}px` : '0px'}
	/>

	<div class={`relative transition-all ease-in duration-300 ${showContent ? '' : 'opacity-0'}`}>
		<slot />
	</div>
</div>
