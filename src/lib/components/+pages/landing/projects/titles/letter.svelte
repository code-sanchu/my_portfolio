<script context="module" lang="ts">
	const isUppercase = (string: string) => /^[A-Z]*$/.test(string);
</script>

<script lang="ts">
	// todo: is a bit janky.
	export let letter: string;
	export let collapse: boolean;

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
		transition: opacity 500ms linear, width 500ms ease-out, transform 700ms ease-out;
	}
</style>
