<script context="module" lang="ts">
</script>

<script lang="ts">
	export let label: string;
	export let value: string;

	let isFocused = false;
</script>

<div
	class="relative py-sm w-full transition-all ease-in-out duration-150"
	style:height={!isFocused ? '56px' : '66px'}
>
	<label
		class={`absolute tracking-[0.01em] z-10 right-0 cursor-text transition-all ease-in-out duration-150 ${
			!isFocused && !value.length
				? 'top-1/2 -translate-y-1/2 text-[0.82rem] text-gray-11'
				: 'top-xxs text-xs text-gray-9'
		}`}
		for={label}>{label}</label
	>
	<input
		class="absolute left-0 w-full h-full cursor-text bg-transparent transition-transform ease-in-out duration-150"
		style:top={!isFocused && !value.length ? 0 : '7px'}
		bind:value
		on:focus={() => (isFocused = true)}
		on:blur={() => (isFocused = false)}
		name={label}
		type="text"
		id={label}
	/>
</div>
