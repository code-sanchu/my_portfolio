<script>
	import { image } from '^assets/images';

	import { Picture } from '^components';
</script>

<div class="relative flex gap-sm font-light text-xs">
	<button class="flex items-baseline gap-xxs" type="button" id="projects-link">
		<span
			class="tracking-wider text-gray-9 hover:text-gray-12 ease-linear duration-200 transition-colors"
			>Projects</span
		>
		<span class="w-[6px] opacity-70">
			<Picture data={image.dot.green} />
		</span>
	</button>

	<button class="flex items-baseline gap-xxs" type="button" id="services-link">
		<span
			class="tracking-wider text-gray-9 hover:text-gray-12 ease-linear duration-200 transition-colors"
			>Services</span
		>
		<span class="w-[6px] opacity-70">
			<Picture data={image.dot.orange} />
		</span>
	</button>

	<button
		class="absolute right-0 -bottom-[11px] translate-y-full flex items-baseline gap-xxs"
		type="button"
		id="contact-link"
	>
		<span
			class="tracking-wider text-gray-9 hover:text-gray-12 ease-linear duration-200 transition-colors"
			>Contact</span
		>
		<span class="w-[6px] opacity-70">
			<Picture data={image.dot.blue} />
		</span>
	</button>
</div>
