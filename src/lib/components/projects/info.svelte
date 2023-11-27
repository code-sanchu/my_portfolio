<script lang="ts">
	export let data: {
		title: string;
		text: string;
	};
</script>

<p class=" w-[500px] px-xs shrink-0">
	<span class="text-blue-11 uppercase text-sm tracking-wider">{data.title}</span>
	<span>{data.text}</span>
</p>
