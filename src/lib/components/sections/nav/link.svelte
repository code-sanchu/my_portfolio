<script lang="ts">
	export let position: 'left' | 'right' | 'top';
	export let bgColorClass: string;
	export let onClick: () => void;
	export let text: string[];

	let pulsing = false;

	const handleClick = () => {
		pulsing = true;

		setTimeout(() => {
			pulsing = false;
		}, 800);

		onClick();
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<button
	class={`z-10 fixed w-[38px] xs/sm:w-[47px] md:w-[56px] aspect-square ${
		position === 'left'
			? 'left-xs xs:left-sm sm:left-md top-1/2 -translate-y-1/2'
			: position === 'right'
			? 'right-xs xs:right-sm sm:right-md top-1/2 -translate-y-1/2'
			: 'top-xs xs:top-sm sm:top-md left-1/2 -translate-x-1/2'
	}`}
	on:click={handleClick}
	type="button"
>
	<span
		class={`absolute inset-0 w-full h-full rounded-full ${pulsing ? 'pulse' : ''} ${bgColorClass}`}
	>
		<span class="h-full flex flex-col items-center justify-center">
			{#each text as line}
				<span class="text-white text-[0.5rem] xs/sm:text-xxs md:text-xs uppercase">
					{line}
				</span>
			{/each}
		</span>
	</span>
</button>

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
		animation: pulse 0.4s ease-in 2;
	}
</style>
