<script>
	import { image } from '^assets/images';

	import Picture from '^components/picture.svelte';
</script>

<!-- <div class="flex items-center gap-sm">
	<button
		class={`text-xs uppercase text-[#ACB7C4] tracking-wider ease-linear duration-200 transition-colors`}
		type="button"
		id="about-link"
	>
		About
	</button>
	<button
		class={`text-xs uppercase text-[#ACB7C4] tracking-wider ease-linear duration-200 transition-colors`}
		type="button"
		id="projects-link"
	>
		Projects
	</button>
	<button
		class={`text-xs uppercase text-[#ACB7C4] tracking-wider ease-linear duration-200 transition-colors`}
		type="button"
		id="services-link"
	>
		Services
	</button>

	<button
		class={`text-xs uppercase text-[#A094A0] tracking-wider ease-linear duration-200 transition-colors`}
		type="button"
		id="contact-link"
	>
		Say Hi
	</button>
</div> -->

<!-- <div class="">
	<div class="absolute right-sm top-sm w-[22px] border-b-[3px] border-black" />
	<div class="absolute right-sm top-md w-[22px] border-b-[3px] border-black" />
</div> -->
<div class="relative flex gap-sm font-light">
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
		class="absolute right-0 -bottom-sm translate-y-full flex items-baseline gap-xxs"
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
