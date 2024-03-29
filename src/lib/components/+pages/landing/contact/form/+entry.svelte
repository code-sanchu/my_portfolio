<script context="module" lang="ts">
	import axios from 'axios';
	import { fade, fly } from 'svelte/transition';
	import { CircleNotch, PaperPlaneTilt, Check } from 'phosphor-svelte';

	import { my_links_and_contacts } from '^data';

	import Input from './input.svelte';
	import TextArea from './text-area.svelte';
</script>

<script lang="ts">
	let name = '';
	let email = '';
	let message = '';

	$: formIsComplete = email.length && message.length;

	let messageSent: 'idle' | 'sending' | 'sent' = 'idle';
	let showMessageReceived = false;

	$: {
		if (messageSent === 'sent') {
			setTimeout(() => {
				showMessageReceived = true;

				setTimeout(() => {
					showMessageReceived = false;
				}, 2600);
			}, 650);
		}
	}

	const submitForm = async () => {
		if (messageSent !== 'idle') {
			return;
		}
		messageSent = 'sending';

		axios.defaults.headers.post['Content-Type'] = 'application/json';

		axios.post(`https://formsubmit.co/ajax/${my_links_and_contacts.email}`, {
			_subject: 'Website enquiry',
			name,
			email,
			message
		});

		setTimeout(() => {
			messageSent = 'sent';
		}, 600);

		setTimeout(() => {
			name = '';
			email = '';
			message = '';

			messageSent = 'idle';
		}, 1600);
	};
</script>

<div class="flex flex-col w-[400px] xl:w-[500px] max-w-full xl:text-lg">
	<div class="border-t border-t-my-lime-1/60">
		<Input bind:value={name} label="Name" />
	</div>

	<div class="border-t border-t-my-blue-light-1/60">
		<Input bind:value={email} label="Email" />
	</div>

	<div class="border-t border-t-my-orange-red-1/60 border-b border-b-my-cyan-1/60">
		<TextArea bind:value={message} label="About your project" />
	</div>

	{#if formIsComplete}
		<div class="mt-lg flex items-end justify-end" transition:fade>
			<button
				class="group/button py-xxs px-sm flex items-center gap-xs hover:gap-sm rounded-sm border text-xs lg:text-sm 3xl:text-base text-my-blue-2 border-my-blue-2 hover:text-green-8 hover:border-green-8 transition-all ease-in-out duration-500"
				on:click={submitForm}
				type="button"
			>
				<span
					class="-translate-y-[1px] lg:-translate-y-[2px] group-hover/button:rotate-45 transition-transform ease-in-out duration-500"
				>
					{#if messageSent === 'sent'}
						<Check weight="light" />
					{:else if messageSent === 'sending'}
						<CircleNotch weight="light" />
					{:else}
						<PaperPlaneTilt weight="light" />
					{/if}
				</span>
				<span class="tracking-wide uppercase"
					>{messageSent === 'sent' ? 'sent' : messageSent === 'sending' ? 'sending' : 'send'}</span
				>
			</button>
		</div>
	{/if}
</div>

{#if showMessageReceived}
	<div
		class="fixed bottom-xs right-xs bg-gray-10 text-white py-xxs px-sm rounded-md text-sm xl:text-base"
		transition:fly={{ duration: 600, y: 100 }}
	>
		Message recieved. Thanks! I'll be in touch shortly.
	</div>
{/if}
