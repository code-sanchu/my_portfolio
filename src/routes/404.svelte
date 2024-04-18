<script context="module" lang="ts">
	import { onMount } from 'svelte';

	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
</script>

<script lang="ts">
	onMount(() => {
		if (browser && $page.status == 404) {
			goto('/');
		}
	});
</script>

<div class="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
	Redirecting...
</div>
