<script>
	import { PaperPlaneTilt } from 'phosphor-svelte';

	import { AnimateSectionIn } from '^components';
</script>

<AnimateSectionIn containerWidth={668} color="green">
	<span
		class="underline text-green-11 uppercase text-sm tracking-wide decoration-green-11 underline-offset-2 decoration-2"
	>
		Tech-Poiesis
	</span>
	<span>
		I'm a developer that create's unique sites made to your specifications. The prototyping and
		design stages are 2 way processes; followed by a build stage in which I use the optimal tools
		for your site. Common features include: shop, custom content management system and much more.
		Get in touch to find out what's possible.
	</span>

	<p class="flex gap-xs mt-sm items-center">
		<span class="text-sm"><PaperPlaneTilt /></span>
		<span class="text-xs uppercase tracking-wider">hello@tech-poiesis.net</span>
	</p>
</AnimateSectionIn>
