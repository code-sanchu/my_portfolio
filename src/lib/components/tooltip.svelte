<script lang="ts" context="module">
	import { Tooltip } from 'flowbite-svelte';
</script>

<script lang="ts">
	export let text: string;
	export let triggeredBy: string;
</script>

<Tooltip
	class="py-xxs px-xs bg-gray-11 text-white rounded-sm"
	type="custom"
	shadow={false}
	arrow={false}
	triggeredBy={`[id^='${triggeredBy}']`}>{text}</Tooltip
>
