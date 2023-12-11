<script context="module" lang="ts">
	import { handleIntersection } from '^actions';
</script>

<script lang="ts">
	let inView = false;
</script>

<div
	class={`relative mt-3xl pt-3xl flex gap-xl justify-between border-t transition-colors ease-in-out duration-500 ${
		!inView ? 'border-gray-4' : 'border-gray-6'
	}`}
>
	<span
		class="absolute top-[100px]"
		use:handleIntersection={{
			onIntersect: () => (inView = true),
			onNonIntersect: () => (inView = false)
		}}
	/>
	<div>
		<h2
			class={`text-xl uppercase tracking-wider mb-lg ${!inView ? 'text-gray-7' : 'text-gray-12'}`}
		>
			Services.
		</h2>
	</div>

	<div class="flex flex-col gap-xl">
		<div class="flex gap-xl justify-between">
			<h3 class="text-lg text-my-royal-blue font-mono">Consultancy</h3>
			<p class="pt-[5.5px] text-sm max-w-[400px]">
				I share my expertise about the landscape and talk through your options about all things web.
			</p>
		</div>

		<div class="flex gap-xl justify-between">
			<h3 class="text-lg text-my-royal-blue font-mono">Site creation</h3>
			<p class="pt-[5.5px] text-sm max-w-[400px]">
				A collaborative design process followed by the build, in which I use optimal tech.
			</p>
		</div>

		<div class="flex gap-xl justify-between">
			<h3 class="text-lg text-my-royal-blue font-mono">Platforms</h3>
			<p class="pt-[5.5px] text-sm max-w-[400px]">
				Site builds and updates on cms platforms such as Squarespace, Cargo and Wordpress.
			</p>
		</div>
	</div>
</div>
