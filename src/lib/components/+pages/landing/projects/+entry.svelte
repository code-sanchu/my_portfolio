<script context="module" lang="ts">
	import { ArrowLineRight } from 'phosphor-svelte';

	import { projects } from '^data';

	import MainCard from './main-card';
</script>

<script lang="ts">
</script>

<div class="flex gap-[1.25rem]">
	<MainCard data={projects.raie} />
	<MainCard data={projects.amy} />
	<MainCard data={projects.piros} />
</div>

<div class="mt-sm md:mt-md">
	<p class="inline-flex gap-xs items-center border py-xxs px-xs rounded-lg border-gray-8">
		<span class="text-xs lg:text-sm">
			<ArrowLineRight weight="thin" />
		</span>

		<span
			class="translate-y-[1px] text-xxs lg:text-xs uppercase tracking-wider text-gray-11 font-light"
			>Next</span
		>
	</p>
</div>
