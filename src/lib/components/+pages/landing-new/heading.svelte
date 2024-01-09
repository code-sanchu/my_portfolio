<script context="module" lang="ts">
	import { onMount } from 'svelte';
</script>

<script lang="ts">
	let topfadeOut = false;
</script>

<div>
	<h1
		class={`text-[2.5rem] font-light uppercase tracking-widest leading-none transition-colors ease-out duration-700 ${
			topfadeOut ? 'text-gray-12' : 'text-gray-12'
		}`}
	>
		Tech-poiesis
	</h1>

	<!-- <p class="leading-none tracking-widest mt-xxs flex font-thin text-[15px]">
		Bespoke website creation
	</p> -->

	<p class="tracking-widest mt-xs flex font-thin text-[15px] max-w-[300px]">
		<span class={`transition-colors ease-out duration-500 ${topfadeOut ? '' : 'text-my-olive'}`}
			>B</span
		>
		<span class={`transition-colors ease-out duration-500 ${topfadeOut ? '' : 'text-my-olive'}`}
			>e</span
		>
		<span
			class={`transition-colors ease-out duration-500 ${topfadeOut ? '' : 'text-my-light-blue'}`}
			>s</span
		>
		<span class={`transition-colors ease-out duration-500 ${topfadeOut ? '' : 'text-my-dark-red'}`}
			>p</span
		>
		<span class={`transition-colors ease-out duration-500 ${topfadeOut ? '' : 'text-my-sea-green'}`}
			>o</span
		>
		<span
			class={`transition-colors ease-out duration-500 ${topfadeOut ? '' : 'text-my-dark-olive'}`}
			>k</span
		>
		<span
			class={`mr-xxs transition-colors ease-out duration-500 ${topfadeOut ? '' : 'text-my-orange'}`}
			>e</span
		>

		<span
			class={`transition-colors ease-out duration-500 ${topfadeOut ? '' : 'text-my-rosy-brown '}`}
			>w</span
		>
		<span
			class={`transition-colors ease-out duration-500 ${
				topfadeOut ? '' : 'text-my-dark-slate-gray '
			}`}>e</span
		>
		<span class={`transition-colors ease-out duration-500 ${topfadeOut ? '' : 'text-my-plum '}`}
			>b</span
		>
		<span
			class={`transition-colors ease-out duration-500 ${topfadeOut ? '' : 'text-my-dark-olive '}`}
			>s</span
		>
		<span
			class={`transition-colors ease-out duration-500 ${topfadeOut ? '' : 'text-my-dark-olive '}`}
			>i</span
		>
		<span
			class={`transition-colors ease-out duration-500 ${topfadeOut ? '' : 'text-my-steel-blue '}`}
			>t</span
		>
		<span
			class={`mr-xxs transition-colors ease-out duration-500 ${
				topfadeOut ? '' : 'text-my-royal-blue '
			}`}>e</span
		>

		<span
			class={`transition-colors ease-out duration-500 ${topfadeOut ? '' : 'text-my-golden-rod '}`}
			>c</span
		>
		<span
			class={`transition-colors ease-out duration-500 ${topfadeOut ? '' : 'text-my-dark-olive '}`}
			>r</span
		>
		<span
			class={`transition-colors ease-out duration-500 ${topfadeOut ? '' : 'text-my-navy-blue '}`}
			>e</span
		>
		<span
			class={`transition-colors ease-out duration-500 ${topfadeOut ? '' : 'text-my-navy-blue '}`}
			>a</span
		>
		<span class={`transition-colors ease-out duration-500 ${topfadeOut ? '' : 'text-my-plum '}`}
			>t</span
		>
		<span class={`transition-colors ease-out duration-500 ${topfadeOut ? '' : 'text-my-plum '}`}
			>i</span
		>
		<span class={`transition-colors ease-out duration-500 ${topfadeOut ? '' : 'text-my-dark-red '}`}
			>o</span
		>
		<span
			class={`transition-colors ease-out duration-500 ${topfadeOut ? '' : 'text-my-golden-rod '}`}
			>n</span
		>
		<span class="ml-xs"> for individuals and small companies, hobbyists and professionals, </span>
	</p>
</div>
