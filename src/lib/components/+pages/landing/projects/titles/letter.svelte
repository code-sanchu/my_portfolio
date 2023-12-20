<script context="module" lang="ts">
	const isUppercase = (string: string) => /^[A-Z]*$/.test(string);
</script>

<script lang="ts">
	// todo: is a bit janky.
	export let letter: string;
	export let collapseStatus: 'idle' | 'transitioning-out' | 'transitioned' | 'transitioning-in' =
		'idle';

	$: collapse = collapseStatus === 'transitioning-out' || collapseStatus === 'transitioned';

	let width: number;
</script>

<span class={`fixed invisible`} bind:clientWidth={width}>
	{@html letter === ' ' ? '&nbsp;' : letter}
</span>

{#if width}
	<span
		class={`my-style ${collapse && !isUppercase(letter) ? 'opacity-0' : ''}`}
		style:width={collapse && !isUppercase(letter) ? '0px' : `${width}px`}
		>{@html letter === ' ' ? '&nbsp; ' : letter}</span
	>
{/if}

<style>
	.my-style {
		transform-origin: top left;
		transition: opacity 800ms linear, width 800ms ease-out, transform 1000ms ease-out;
	}
</style>
