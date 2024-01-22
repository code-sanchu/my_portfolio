<script context="module" lang="ts">
	import { image } from '^assets/images';

	import { Picture } from '^components';
</script>

<div class="relative flex gap-sm 2xl:gap-md font-light text-xs md:text-sm xl:text-base 2xl:text-xl">
	<button class="flex items-baseline gap-xxs md:gap-xs" type="button" id="projects-link">
		<span
			class="tracking-wider text-gray-9 hover:text-gray-12 ease-linear duration-200 transition-colors"
			>Projects</span
		>
		<span class="w-[5px] md:w-[7px] opacity-70">
			<Picture data={image.dot.green} loading="eager" />
		</span>
	</button>

	<div class="flex flex-col items-end gap-y-xs md:flex-row md:gap-x-sm 2xl:gap-x-md">
		<button class="flex items-baseline gap-xxs md:gap-xs" type="button" id="services-link">
			<span
				class="tracking-wider text-gray-9 hover:text-gray-12 ease-linear duration-200 transition-colors"
				>Services</span
			>
			<span class="w-[5px] md:w-[7px] opacity-70">
				<Picture data={image.dot.orange} loading="eager" />
			</span>
		</button>

		<button class="flex items-baseline gap-xxs md:gap-xs" type="button" id="contact-link">
			<span
				class="tracking-wider text-gray-9 hover:text-gray-12 ease-linear duration-200 transition-colors"
				>Contact</span
			>
			<span class="w-[5px] md:w-[7px] opacity-70">
				<Picture data={image.dot.blue} loading="eager" />
			</span>
		</button>
	</div>
</div>
