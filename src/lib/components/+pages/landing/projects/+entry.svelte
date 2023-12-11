<script context="module" lang="ts">
	import { uid } from 'uid/single';

	import { handleIntersection } from '^actions';
	import type { ProjectId } from '^types';

	import Titles from './titles.svelte';
	import Projects from './projects.svelte';

	type ProjectCardType = 'info' | 'main-card';
</script>

<script lang="ts">
	let inView = false;

	let shownProjectCards: { type: ProjectCardType; key: string; id: ProjectId }[] = [];

	const handleShowProjectCard = (projectId: ProjectId, type: ProjectCardType) => {
		shownProjectCards = [{ id: projectId, type, key: uid() }, ...shownProjectCards];
	};
</script>

<div
	class={`mt-3xl pt-3xl flex flex-col sm:gap-lg md:flex-row md:gap-xl h-full sm:pb-md border-t transition-colors ease-in-out duration-500 ${
		!inView ? 'border-gray-4' : 'border-gray-6'
	}`}
>
	<div class="shrink-0">
		<h2
			class={`text-xl uppercase tracking-wider  mb-lg ${!inView ? 'text-gray-7' : 'text-gray-12'}`}
		>
			Projects.
		</h2>

		<div class="relative">
			<Titles
				onClickTitle={(projectId) => handleShowProjectCard(projectId, 'main-card')}
				bind:inView
			/>

			<span
				class="absolute top-1/2"
				use:handleIntersection={{
					onIntersect: () => (inView = true),
					onNonIntersect: () => (inView = false)
				}}
			/>
		</div>
	</div>

	<div class={`transition-opacity ease-in-out duration-500 ${!inView ? 'opacity-40' : ''}`}>
		<Projects
			{shownProjectCards}
			onClickInfo={(projectId) => handleShowProjectCard(projectId, 'info')}
		/>
	</div>
</div>
