<script>
	import { AnimateSectionIn } from '^components';
	import { Buildings } from 'phosphor-svelte';
</script>

<AnimateSectionIn containerWidth={3200} color="green" skipWidthAnimation>
	<span
		class="text-sm md:text-base xl:text-lg 2xl:text-xl underline text-green-11 uppercase tracking-wide decoration-green-11 underline-offset-2 decoration-2"
	>
		Tech-Poiesis
	</span>

	<span class="md:text-lg xl:text-xl 2xl:text-2xl">
		&nbsp;I'm a developer who creates unique sites made to your specifications. The prototyping and
		design stages are 2 way processes between us; followed by a build stage in which I use optimal
		tools for your site. Optional features include: shop, custom content management system, domain
		management with email and much more. I also work with content management systems such as
		Squarespace. Get in touch to find out what's possible.
	</span>
	<p
		class="mt-sm text-xs md:text-sm xl:text-base 2xl:text-lg uppercase tracking-wider whitespace-nowrap underline text-green-11"
	>
		hello@tech-poiesis.net
	</p>

	<p class="mt-sm flex items-center gap-xs">
		<span class="text-sm md:text-base xl:text-lg 2xl:text-xl">
			<Buildings />
		</span>
		<span class="text-sm md:text-base xl:text-lg 2xl:text-xl">London, UK.</span>
	</p>
</AnimateSectionIn>
