<script lang="ts" context="module">
	import { Tooltip } from 'flowbite-svelte';

	import Internal from './internal.svelte';
</script>

<script lang="ts">
	export let text: string;
	export let triggeredBy: string;
</script>

<Tooltip class="" type="custom" shadow={false} arrow={false} triggeredBy={`[id^='${triggeredBy}']`}
	><Internal>{text}</Internal></Tooltip
>
