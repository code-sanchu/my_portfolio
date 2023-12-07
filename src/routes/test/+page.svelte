<script context="module" lang="ts">
	// import { myCrossfade } from '^helpers';
	import { quintOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';

	type TransformStatus = 'idle' | 'opening' | 'open' | 'closing';
</script>

<script lang="ts">
	const [send, receive] = crossfade({
		duration: 1200,
		easing: quintOut,
		delay: 0
	});

	let transformStatus: TransformStatus = 'idle';
</script>

{#if transformStatus === 'idle' || transformStatus === 'closing'}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
	<h1
		class="fixed left-xl top-xl"
		on:click={() => {
			transformStatus = 'opening';
			setTimeout(() => {
				transformStatus = 'open';
			}, 1200);
		}}
		in:receive={{ key: 'letter-p' }}
		out:send={{ key: 'letter-p' }}
	>
		<span>P</span>
	</h1>
{:else}
	<div class="fixed left-1/2 top-1/2">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<h1
			class="text-4xl"
			in:receive={{ key: 'letter-p' }}
			out:send={{ key: 'letter-p' }}
			on:click={() => {
				transformStatus = 'closing';
				setTimeout(() => {
					transformStatus = 'idle';
				}, 1200);
			}}
		>
			<span>P</span>
		</h1>
	</div>
{/if}
