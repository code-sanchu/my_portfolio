<script lang="ts">
	export let id: string = '';
	export let text: string;
	export let url: string;
</script>

<a
	class="inline-flex items-center gap-xxs underline decoration-transparent text-gray-8 hover:decoration-gray-10 hover:text-gray-12 transition-all ease-linear duration-200 cursor-pointer"
	href={url}
	target="_blank"
	{id}
>
	<slot name="icon" />
	<span class="uppercase font-mono text-xs tracking-wide">
		{text}
	</span>
</a>
