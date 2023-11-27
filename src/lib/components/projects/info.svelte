<script lang="ts">
	import { onMount } from 'svelte';

	export let data: {
		title: string;
		text: string;
	};

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
		return;
	};

	onMount(() => {
		setTimeout(() => {
			handleTransition();
		}, 100);
	});
</script>

<div
	class={`relative shrink-0 transition-all ease-in duration-200 ${!show ? 'w-0 ' : 'w-[500px]'}`}
>
	<div
		class={`z-10 absolute left-0 top-0 transition-all ease-in duration-300 h-[3px] bg-blue-11 ${
			showLine ? 'w-[500px]' : 'w-0 opacity-0'
		} ${hideLine ? 'opacity-0' : ''}`}
	/>

	<div class={`relative transition-all ease-in duration-300 ${showContent ? '' : 'opacity-0'}`}>
		<span class="text-blue-11 uppercase text-sm tracking-wider">{data.title}</span>
		<span>{data.text}</span>
	</div>
</div>
