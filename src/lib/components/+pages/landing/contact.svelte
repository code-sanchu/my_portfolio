<script context="module" lang="ts">
	import { handleIntersection } from '^actions';
</script>

<script lang="ts">
	import { PaperPlaneTilt } from 'phosphor-svelte';

	let inView = false;
</script>

<div
	class={`relative mt-3xl pt-3xl border-t transition-colors ease-in-out duration-500 ${
		!inView ? 'border-gray-4' : 'border-gray-6'
	}`}
>
	<span
		class="absolute top-[100px]"
		use:handleIntersection={{
			onIntersect: () => (inView = true),
			onNonIntersect: () => (inView = false)
		}}
	/>
	<div>
		<h2
			class={`text-xl uppercase tracking-wider mb-lg ${!inView ? 'text-gray-7' : 'text-gray-12'}`}
		>
			Contact.
		</h2>
	</div>

	<p class="max-w-[500px] text-my-royal-blue mt-2xl">
		I'd love to hear from you, whether for just an informal chat or if you're ready to build a site.
	</p>

	<div class="flex justify-end mt-2xl">
		<div>
			<h4 class="underline text-my-sea-green">Email me</h4>
			<a class="mt-xs flex items-center gap-xs" href=".">
				<span class="font-mono text-sm">hello@tech-poiesis.net</span></a
			>
		</div>
	</div>

	<div class="mt-2xl">
		<h4 class="underline text-my-sea-green">Send me a message</h4>
	</div>
</div>
