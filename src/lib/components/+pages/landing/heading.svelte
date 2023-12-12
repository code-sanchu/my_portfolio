<script context="module" lang="ts">
</script>

<script lang="ts">
	let contentRect: DOMRectReadOnly;

	$: {
		if (contentRect && document) {
			document.addEventListener('wheel', () => {
				console.log('contentRect:', contentRect);
			});
		}
	}

	let inView: boolean = true;
</script>

<div bind:contentRect>
	<h1 class="text-gray-12 text-5xl uppercase tracking-wide leading-none">Tech-poiesis</h1>

	<p class="leading-none tracking-wider mt-xxs flex font-mono">
		<span class="text-my-olive">B</span>
		<span class="text-my-olive">e</span>
		<span class="text-my-light-blue">s</span>
		<span class="text-my-dark-red">p</span>
		<span class="text-my-sea-green">o</span>
		<span class="text-my-dark-olive">k</span>
		<span class="mr-xxs text-my-orange">e</span>

		<span class="text-my-rosy-brown">w</span>
		<span class="text-my-dark-slate-gray">e</span>
		<span class="text-my-plum">b</span>
		<span class="text-my-dark-olive">s</span>
		<span class="text-my-dark-olive">i</span>
		<span class="text-my-steel-blue">t</span>
		<span class="mr-xxs text-my-royal-blue">e</span>

		<span class="text-my-golden-rod">c</span>
		<span class="text-my-dark-olive">r</span>
		<span class="text-my-navy-blue">e</span>
		<span class="text-my-navy-blue">a</span>
		<span class="text-my-plum">t</span>
		<span class="text-my-plum">i</span>
		<span class="text-my-dark-red">o</span>
		<span class="text-my-golden-rod">n</span>
	</p>
</div>
