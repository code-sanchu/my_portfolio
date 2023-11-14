<script lang="ts">
	export let position: 'left' | 'right' | 'top';
	export let bgColorClass: string;
	export let onClick: () => void;

	let pulsing = false;

	const handleClick = () => {
		pulsing = true;

		setTimeout(() => {
			pulsing = false;
		}, 1200);

		onClick();
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class={`z-10 w-[56px] aspect-square fixed cursor-pointer ${
		position === 'left'
			? 'left-sm top-1/2 -translate-y-1/2'
			: position === 'right'
			? 'right-sm top-1/2 -translate-y-1/2'
			: 'top-sm left-1/2 -translate-x-1/2'
	}`}
	on:click={handleClick}
>
	<div class={`absolute w-full h-full rounded-full ${pulsing ? 'pulse' : ''} ${bgColorClass}`}>
		<h4 class={`h-full flex flex-col items-center justify-center`}>
			<slot />
		</h4>
	</div>
</div>

<style>
	@keyframes pulse {
		0% {
			transform: scale(1, 1);
		}

		50% {
			transform: scale(1.2, 1.2);
		}

		100% {
			transform: scale(1, 1);
		}
	}

	.pulse {
		animation: pulse 0.6s ease-in 2;
	}
</style>
