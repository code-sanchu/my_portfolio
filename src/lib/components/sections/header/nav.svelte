<script context="module" lang="ts">
	import { sectionReadyStore, type SectionReadyValues } from '^stores';

	import { image } from '^assets/images';

	import { Picture } from '^components';
</script>

<script lang="ts">
	let sectionReady: SectionReadyValues;

	sectionReadyStore.subscribe((state) => {
		sectionReady = state;
	});
</script>

<div
	class="relative flex gap-xxs items-start 2xl:gap-md font-light text-xs md:text-sm xl:text-base 2xl:text-xl transition-opacity duration-[400ms] ease-in opacity-0 leading-none translate-x-xs -translate-y-xxs"
	style:opacity={!sectionReady?.main ? 0 : 1}
>
	<button
		class="flex items-baseline bg-white rounded-md py-xxs px-xs gap-xxs md:gap-xs"
		type="button"
		id="projects-link"
	>
		<span
			class="tracking-wider text-gray-9 hover:text-gray-12 ease-linear duration-200 transition-colors"
			>Projects</span
		>
		<span class="w-[5px] md:w-[7px] opacity-70">
			<Picture data={image.dot.green} />
		</span>
	</button>

	<div class="flex flex-col items-stretch gap-y-xxs md:flex-row md:gap-x-sm 2xl:gap-x-md">
		<button
			class="flex items-baseline gap-xxs md:gap-xs bg-white rounded-md py-xxs px-xs"
			type="button"
			id="services-link"
		>
			<span
				class="tracking-wider text-gray-9 hover:text-gray-12 ease-linear duration-200 transition-colors"
				>Services</span
			>
			<span class="w-[5px] md:w-[7px] opacity-70">
				<Picture data={image.dot.orange} />
			</span>
		</button>

		<button
			class="flex items-baseline justify-end gap-xxs md:gap-xs bg-white rounded-md py-xxs px-xs"
			type="button"
			id="contact-link"
		>
			<span
				class="tracking-wider text-gray-9 hover:text-gray-12 ease-linear duration-200 transition-colors"
				>Contact</span
			>
			<span class="w-[5px] md:w-[7px] opacity-70">
				<Picture data={image.dot.blue} />
			</span>
		</button>
	</div>
</div>
