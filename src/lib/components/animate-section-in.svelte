<script lang="ts" context="module">
	import { onMount } from 'svelte';
</script>

<script lang="ts">
	export let containerWidth: number;
	export let color: 'green' | 'red' | 'blue';
	export let skipWidthAnimation = false;

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
				}, 300);
			}, 200);
		}, 400);
	};

	onMount(() => {
		setTimeout(() => {
			handleTransition();
		}, 100);
	});
</script>

<div
	class={`relative max-w-full shrink-0 transition-all ease-[cubic-bezier(.79,.18,.36,.92)]`}
	style:width={show ? `${containerWidth}px` : '0px'}
	style:transition-duration={skipWidthAnimation ? '0ms' : '300ms'}
>
	<div
		class={`z-10 absolute left-0 top-0 transition-all ease-[cubic-bezier(1,.19,.9,.45)] duration-[400ms] h-[3px] max-w-full ${
			hideLine ? 'opacity-0' : ''
		} ${color === 'green' ? 'bg-green-9' : color === 'red' ? 'bg-red-9' : 'bg-blue-9'}`}
		style:width={showLine ? `${containerWidth - 24}px` : '0px'}
	/>

	<div class={`relative transition-all ease-in duration-300 ${showContent ? '' : 'opacity-0'}`}>
		<slot />
	</div>
</div>
