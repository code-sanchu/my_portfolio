<script lang="ts" context="module">
	import { linear } from 'svelte/easing';
	import { fade } from 'svelte/transition';
</script>

<span
	class="py-xxs px-xs bg-gray-10 text-white rounded-sm"
	transition:fade={{ duration: 100, easing: linear }}
>
	<slot />
</span>
