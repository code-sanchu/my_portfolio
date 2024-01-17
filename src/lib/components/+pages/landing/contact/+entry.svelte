<script context="module" lang="ts">
	import Form from './form';
</script>

<div class="font-light flex flex-col items-end">
	<p
		class={`text-sm md:text-base xl:text-lg 3xl:text-xl 3xl:tracking-wide max-w-[500px] xl:max-w-[580px] leading-[1.35rem] transition-colors ease-out duration-700  text-right`}
	>
		It'd be great to hear from you if just for an informal chat or you're ready to get building.
	</p>

	<div class="mt-xl flex flex-col items-end">
		<div class="flex gap-sm items-center">
			<h4 class="text-gray-9 uppercase text-xs tracking-[0.06em] xl:text-sm 3xl:text-base">
				Message Me
			</h4>
		</div>

		<div class="mt-lg w-full">
			<Form />
		</div>

		<div class="mt-xl">
			<div class="flex gap-xs">
				<p class="text-gray-9 text-xs xl:text-sm 3xl:text-base uppercase tracking-[0.06em]">
					or email
				</p>
				<a class="flex items-center gap-xs" href=".">
					<span class="text-xs xl:text-sm 3xl:text-base uppercase text-my-blue-1 tracking-wide"
						>hello@tech-poiesis.net</span
					></a
				>
			</div>
		</div>
	</div>
</div>
