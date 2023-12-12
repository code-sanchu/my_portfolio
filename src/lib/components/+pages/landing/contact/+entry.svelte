<script context="module" lang="ts">
	import { handleIntersection } from '^actions';

	import Form from './form';
</script>

<script lang="ts">
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

	<p class="max-w-[500px] mt-[4.5rem]">
		I'd love to hear from you, whether for just an informal chat or if you're ready to build a site.
	</p>

	<div class="mt-xl">
		<div class="flex gap-sm items-center">
			<h4 class="text-gray-9 uppercase text-xs tracking-wider">Message Me</h4>
		</div>

		<Form />

		<div class="mt-xl">
			<div class="flex gap-xs">
				<p class="text-gray-9 text-xs uppercase">or email</p>
				<a class="flex items-center gap-xs" href=".">
					<span class="text-xs uppercase text-my-light-blue">hello@tech-poiesis.net</span></a
				>
			</div>
		</div>
	</div>
</div>
