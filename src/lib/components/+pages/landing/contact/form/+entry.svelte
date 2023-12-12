<script context="module" lang="ts">
	import { fade } from 'svelte/transition';
	import { PaperPlaneTilt } from 'phosphor-svelte';

	import Input from './input.svelte';
	import TextArea from './text-area.svelte';
</script>

<script lang="ts">
	let name = '';
	let email = '';
	let message = '';

	$: formIsComplete = email.length && message.length;
</script>

<div class="mt-lg inline-flex flex-col w-[400px]">
	<div class="border-t border-t-my-olive border-b border-b-my-light-blue">
		<Input bind:value={name} label="Name" />
	</div>

	<Input bind:value={email} label="Email" />

	<div class="border-t border-t-my-dark-red border-b border-b-my-sea-green">
		<TextArea bind:value={message} label="About your project" />
	</div>

	{#if formIsComplete}
		<div class="mt-lg flex justify-end" transition:fade>
			<button
				class="py-xxs px-sm flex items-center gap-xs rounded-sm border text-xs tracking-wide uppercase text-my-sea-green border-my-sea-green hover:bg-my-sea-green hover:text-white transition-colors ease-in-out duration-500"
				type="button"
			>
				<span><PaperPlaneTilt /></span>
				<span>Send</span></button
			>
		</div>
	{/if}
</div>
