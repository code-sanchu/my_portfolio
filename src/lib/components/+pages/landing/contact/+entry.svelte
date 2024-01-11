<script context="module" lang="ts">
	import Form from './form';
</script>

<div class="font-light text-right">
	<p class={`text-sm max-w-[500px] leading-[1.35rem] transition-colors ease-out duration-700  `}>
		It'd be great to hear from you if just for an informal chat or you're ready to get building.
	</p>

	<div class="mt-xl flex flex-col items-end">
		<div class="flex gap-sm items-center">
			<h4 class="text-gray-9 uppercase text-xs tracking-[0.06em]">Message Me</h4>
		</div>

		<div class="mt-lg w-full">
			<Form />
		</div>

		<div class="mt-xl">
			<div class="flex gap-xs">
				<p class="text-gray-9 text-xs uppercase tracking-[0.06em]">or email</p>
				<a class="flex items-center gap-xs" href=".">
					<span class="text-xs uppercase text-my-light-blue tracking-wide"
						>hello@tech-poiesis.net</span
					></a
				>
			</div>
		</div>
	</div>
</div>
