<script lang="ts">
	export let data: {
		title: string;
		text: string;
	};
</script>

<div class="pr-md">
	<span class="text-blue-11 uppercase text-sm tracking-wider">{data.title}</span>
	<span>{data.text}</span>
</div>
