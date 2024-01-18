<script lang="ts" context="module">
	import { onMount } from 'svelte';

	import { updateSectionReady } from '^stores';

	const start = 0;
	const end = 100;
	const duration = 600;
</script>

<script lang="ts">
	onMount(() => {
		animateValue();
	});

	let number = start;

	$: numberStr = `${number < 10 ? '00' : number < 100 ? '0' : ''}${number}`;

	function animateValue() {
		let startTimestamp = Date.now();

		const step = () => {
			const progress = Math.min((Date.now() - startTimestamp) / duration, 1);

			number = Math.floor(progress * (end - start) + start);

			if (progress < 1) {
				window.requestAnimationFrame(step);
			}
		};

		window.requestAnimationFrame(step);
	}

	let width: number;

	let transitionOut1 = false;
	let transitionOut2 = false;

	$: {
		if (number === end) {
			transitionOut1 = true;

			setTimeout(() => {
				updateSectionReady.logo();

				transitionOut2 = true;

				setTimeout(() => {
					updateSectionReady.main();
				}, 400);
			}, 500);
		}
	}
</script>

<div
	class="relative flex font-light text-xl md:text-2xl lg:text-3xl 2xl:text-[2.6rem] tracking-widest"
	bind:clientWidth={width}
>
	<p style:opacity={transitionOut2 ? 0 : 1}>{numberStr}</p>

	<div
		class="absolute z-10 h-full left-0 bg-white cover"
		style:right="{transitionOut1 ? 0 : width}px"
		style:left="{transitionOut2 ? width : 0}px"
	/>
</div>

<style>
	.cover {
		transition: left 500ms linear, right 500ms ease-out;
	}
</style>
