<script context="module" lang="ts">
</script>

<script lang="ts">
	let inView = false;

	function handleIntersection(node: HTMLElement) {
		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				inView = true;
			} else {
				inView = false;
			}
		});
		observer.observe(node);

		return {
			destroy() {
				observer.disconnect();
			}
		};
	}
</script>

<p
	class={`relative w-[580px] text-base pt-xl transition-colors ease-in-out duration-500 ${
		!inView ? 'text-gray-7 border-gray-7' : 'border-gray-12 text-gray-12'
	}`}
>
	I'm a design-focused web engineer who provides consultancy and tech services with a focus on
	personalized and high-quality solutions. I work with individuals and small companies, hobbyists
	and professionals, and find the right-sized approach for each.

	<span class="absolute bottom-0" use:handleIntersection />
</p>
