<script lang="ts" context="module">
	import {
		Chats,
		Equalizer,
		HandCoins,
		Images,
		Pen,
		PencilCircle,
		ShoppingCart,
		Table,
		Translate,
		Wrench,
		YoutubeLogo
	} from 'phosphor-svelte';

	import type { Feature } from '^types';

	import { Tooltip } from '^components';
</script>

<script lang="ts">
	export let features: Feature[];
	export let componentKey: string;
	export let topFadeOut: boolean;
</script>

<div class="flex gap-sm items-center flex-wrap text-inherit">
	<h4
		class={`transition-colors ease-out duration-700 text-sm ${
			topFadeOut ? 'text-gray-6' : 'text-my-light-blue'
		}`}
	>
		Features
	</h4>
	{#each features as feature}
		{#if feature === 'music-player'}
			<span
				class={`icon transition-colors ease-out duration-700 ${
					topFadeOut ? 'border-gray-3 text-gray-6' : 'border-gray-5 text-gray-10'
				}`}
				id={`${componentKey}-music-player-icon`}
			>
				<Equalizer />
			</span>
			<Tooltip text="custom music player" triggeredBy={`${componentKey}-music-player-icon`} />
		{:else if feature === 'image-gallery'}
			<span
				class={`icon transition-colors ease-out duration-700 ${
					topFadeOut ? 'border-gray-3 text-gray-6' : 'border-gray-5 text-gray-10'
				}`}
				id={`${componentKey}-image-gallery`}
			>
				<Images />
			</span>
			<Tooltip text="optimised image gallery" triggeredBy={`${componentKey}-image-gallery`} />
		{:else if feature === 'custom-cms'}
			<span
				class={`icon transition-colors ease-out duration-700 ${
					topFadeOut ? 'border-gray-3 text-gray-6' : 'border-gray-5 text-gray-10'
				}`}
				id={`${componentKey}-custom-cms`}
			>
				<Wrench />
			</span>
			<Tooltip text="custom cms" triggeredBy={`${componentKey}-custom-cms`} />
		{:else if feature === 'donation'}
			<span
				class={`icon transition-colors ease-out duration-700 ${
					topFadeOut ? 'border-gray-3 text-gray-6' : 'border-gray-5 text-gray-10'
				}`}
				id={`${componentKey}-donation`}
			>
				<HandCoins />
			</span>
			<Tooltip text="donations" triggeredBy={`${componentKey}-donation`} />
		{:else if feature === 'sign-up-form'}
			<span
				class={`icon transition-colors ease-out duration-700 ${
					topFadeOut ? 'border-gray-3 text-gray-6' : 'border-gray-5 text-gray-10'
				}`}
				id={`${componentKey}-sign-up-form`}
			>
				<Pen />
			</span>
			<Tooltip text="sign up form" triggeredBy={`${componentKey}-sign-up-form`} />
		{:else if feature === 'youtube'}
			<span
				class={`icon transition-colors ease-out duration-700 ${
					topFadeOut ? 'border-gray-3 text-gray-6' : 'border-gray-5 text-gray-10'
				}`}
				id={`${componentKey}-youtube`}
			>
				<YoutubeLogo />
			</span>
			<Tooltip text="youtube integration" triggeredBy={`${componentKey}-youtube`} />
		{:else if feature === 'shop'}
			<span
				class={`icon transition-colors ease-out duration-700 ${
					topFadeOut ? 'border-gray-3 text-gray-6' : 'border-gray-5 text-gray-10'
				}`}
				id={`${componentKey}-shop`}
			>
				<ShoppingCart />
			</span>
			<Tooltip text="shop" triggeredBy={`${componentKey}-shop`} />
		{:else if feature === 'comment-system'}
			<span
				class={`icon transition-colors ease-out duration-700 ${
					topFadeOut ? 'border-gray-3 text-gray-6' : 'border-gray-5 text-gray-10'
				}`}
				id={`${componentKey}-comment-system`}
			>
				<Chats />
			</span>
			<Tooltip text="comment system" triggeredBy={`${componentKey}-comment-system`} />
		{:else if feature === 'text-editor'}
			<span
				class={`icon transition-colors ease-out duration-700 ${
					topFadeOut ? 'border-gray-3 text-gray-6' : 'border-gray-5 text-gray-10'
				}`}
				id={`${componentKey}-text-editor`}
			>
				<PencilCircle />
			</span>
			<Tooltip text="custom text editor" triggeredBy={`${componentKey}-text-editor`} />
		{:else if feature === 'multi-language'}
			<span
				class={`icon transition-colors ease-out duration-700 ${
					topFadeOut ? 'border-gray-3 text-gray-6' : 'border-gray-5 text-gray-10'
				}`}
				id={`${componentKey}-multi-language`}
			>
				<Translate />
			</span>
			<Tooltip text="multiple languages" triggeredBy={`${componentKey}-multi-language`} />
		{:else if feature === 'google-spreadsheet'}
			<span
				class={`icon transition-colors ease-out duration-700 ${
					topFadeOut ? 'border-gray-3 text-gray-6' : 'border-gray-5 text-gray-10'
				}`}
				id={`${componentKey}-google-spreadsheet`}
			>
				<Table />
			</span>
			<Tooltip
				text="google spreadsheet integration"
				triggeredBy={`${componentKey}-google-spreadsheet`}
			/>
		{/if}
	{/each}
</div>

<style>
	.icon {
		@apply border rounded-full p-[0.3rem] text-sm;
	}
</style>
