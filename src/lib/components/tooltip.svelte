<script lang="ts" context="module">
	import { Tooltip } from 'flowbite-svelte';

	import TooltipInternal from './tooltip-internal.svelte';
</script>

<script lang="ts">
	export let text: string;
	export let triggeredBy: string;
</script>

<Tooltip class="" type="custom" shadow={false} arrow={false} triggeredBy={`[id^='${triggeredBy}']`}
	><TooltipInternal>{text}</TooltipInternal></Tooltip
>
