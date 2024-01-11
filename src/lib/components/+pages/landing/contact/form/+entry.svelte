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

<div class="flex flex-col w-[400px] max-w-full">
	<div class="border-t border-t-my-lime-1/60 border-b border-b-my-blue-light-1/60">
		<Input bind:value={name} label="Name" />
	</div>

	<Input bind:value={email} label="Email" />

	<div class="border-t border-t-my-orange-red-1/60 border-b border-b-my-cyan-1/60">
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
