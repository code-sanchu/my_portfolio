<script context="module" lang="ts">
</script>

<script lang="ts">
	export let label: string;
	export let value: string;

	let isFocused = false;
</script>

<div
	class="relative py-sm w-full transition-all ease-in-out duration-150"
	style:height={!isFocused ? '56px' : '86px'}
>
	<label
		class={`absolute z-10 left-0 w-full cursor-text bg-white transition-all ease-in-out duration-150 ${
			!isFocused && !value.length
				? 'top-1/2 -translate-y-1/2 text-[0.82rem] text-gray-11'
				: 'top-0 pt-xxs pb-xxs text-xs text-gray-9'
		}`}
		for={label}>{label}</label
	>
	<textarea
		class="absolute left-0 cursor-text top-0 w-full h-full resize-none bg-transparent transition-transform ease-in-out duration-150"
		style:padding-top={!isFocused && !value.length ? 0 : '22px'}
		bind:value
		on:focus={() => (isFocused = true)}
		on:blur={() => (isFocused = false)}
		id={label}
	/>
</div>
