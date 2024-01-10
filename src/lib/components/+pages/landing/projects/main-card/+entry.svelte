<script lang="ts" context="module">
	import { Picture } from '^components';
	import type { Project } from '^types';
</script>

<script lang="ts">
	export let data: Project;
</script>

<div class="w-[260px] lg:w-[300px] shrink-0">
	<div class="relative aspect-[3/4] overflow-hidden">
		<Picture data={data.mainPicture} imageClass="absolute inset-0 object-cover w-full h-full" />
	</div>

	<div class="mt-xxs flex items-baseline justify-between">
		<p class="text-sm mr-md">{data.title}</p>

		<div class="flex pr-xxs">
			<p class="mr-sm uppercase text-xxs tracking-wider text-gray-9">more info</p>

			<a class="uppercase text-xxs tracking-wider text-gray-9" href={data.siteUrl}>visit</a>
		</div>
	</div>
</div>
