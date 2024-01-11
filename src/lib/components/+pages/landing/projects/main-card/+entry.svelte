<script lang="ts" context="module">
	import { Picture } from '^components';
	import type { Project } from '^types';
</script>

<script lang="ts">
	export let data: Project;
</script>

<div class="w-[220px] lg:w-[300px] shrink-0">
	<div class="relative aspect-[3/4] overflow-hidden">
		<Picture data={data.mainPicture} imageClass="absolute inset-0 object-cover w-full h-full" />
	</div>

	<div class="mt-xxs flex items-baseline justify-between">
		<p class="text-xs tracking-wide lg:text-sm mr-md">{data.title}</p>

		<div
			class="flex pr-xxxs md:pr-xxs text-[0.5rem] md:text-xxs uppercase tracking-wider text-gray-9"
		>
			<p class="mr-sm">more info</p>

			<a href={data.siteUrl}>visit</a>
		</div>
	</div>
</div>
