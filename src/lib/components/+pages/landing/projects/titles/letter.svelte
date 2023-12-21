<script context="module" lang="ts">
	const isUppercase = (string: string) => /^[A-Z]*$/.test(string);
</script>

<script lang="ts">
	export let letter: string;
	export let transitionStatus:
		| 'idle-clicked'
		| 'transitioning-out'
		| 'transitioned-clicked'
		| 'transitioning-in';

	$: collapse =
		transitionStatus === 'transitioning-out' || transitionStatus === 'transitioned-clicked';

	let node: HTMLSpanElement;
	$: width = node?.getBoundingClientRect().width;
</script>

<span class={`fixed invisible`} bind:this={node}>
	{@html letter === ' ' ? '&nbsp;' : letter}
</span>

{#if width}
	<span
		class={`my-style ${collapse && !isUppercase(letter) ? 'opacity-0' : ''}`}
		style:width={collapse && !isUppercase(letter) ? '0px' : `${width}px`}
	>
		{@html letter === ' ' ? '&nbsp; ' : letter}
	</span>
{/if}

<style>
	.my-style {
		transition: opacity 800ms linear, width 800ms ease-out, transform 1000ms ease-out;
	}
</style>
