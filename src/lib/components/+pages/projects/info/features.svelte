<script lang="ts" context="module">
	import {
		Chats,
		Equalizer,
		HandCoins,
		Images,
		Pen,
		PencilCircle,
		ShoppingCart,
		Translate,
		Wrench,
		YoutubeLogo,
		Table
	} from 'phosphor-svelte';

	import type { Feature } from '^types';

	import { Tooltip } from '^components';
</script>

<script lang="ts">
	export let features: Feature[];
	export let componentKey: string;
</script>

<div class="flex gap-xs sm:items-center mt-xs sm:mt-0">
	<h6 class="uppercase text-xxs sm:text-xs underline decoration-gray-11">Features</h6>

	<div class="flex gap-xs items-center flex-wrap text-gray-11 text-xs">
		{#each features as feature}
			{#if feature === 'music-player'}
				<span
					class="border border-gray-11 border-dashed rounded-full p-xxs"
					id={`${componentKey}-music-player-icon`}
				>
					<Equalizer />
				</span>
				<Tooltip text="custom music player" triggeredBy={`${componentKey}-music-player-icon`} />
			{:else if feature === 'image-gallery'}
				<span
					class="border border-gray-11 border-dashed rounded-full p-xxs"
					id={`${componentKey}-image-gallery`}
				>
					<Images />
				</span>
				<Tooltip text="optimised image gallery" triggeredBy={`${componentKey}-image-gallery`} />
			{:else if feature === 'custom-cms'}
				<span
					class="border border-gray-11 border-dashed rounded-full p-xxs"
					id={`${componentKey}-custom-cms`}
				>
					<Wrench />
				</span>
				<Tooltip text="custom cms" triggeredBy={`${componentKey}-custom-cms`} />
			{:else if feature === 'donation'}
				<span
					class="border border-gray-11 border-dashed rounded-full p-xxs"
					id={`${componentKey}-donation`}
				>
					<HandCoins />
				</span>
				<Tooltip text="donations" triggeredBy={`${componentKey}-donation`} />
			{:else if feature === 'sign-up-form'}
				<span
					class="border border-gray-11 border-dashed rounded-full p-xxs"
					id={`${componentKey}-sign-up-form`}
				>
					<Pen />
				</span>
				<Tooltip text="sign up form" triggeredBy={`${componentKey}-sign-up-form`} />
			{:else if feature === 'youtube'}
				<span
					class="border border-gray-11 border-dashed rounded-full p-xxs"
					id={`${componentKey}-youtube`}
				>
					<YoutubeLogo />
				</span>
				<Tooltip text="youtube integration" triggeredBy={`${componentKey}-youtube`} />
			{:else if feature === 'shop'}
				<span
					class="border border-gray-11 border-dashed rounded-full p-xxs"
					id={`${componentKey}-shop`}
				>
					<ShoppingCart />
				</span>
				<Tooltip text="shop" triggeredBy={`${componentKey}-shop`} />
			{:else if feature === 'comment-system'}
				<span
					class="border border-gray-11 border-dashed rounded-full p-xxs"
					id={`${componentKey}-comment-system`}
				>
					<Chats />
				</span>
				<Tooltip text="comment system" triggeredBy={`${componentKey}-comment-system`} />
			{:else if feature === 'text-editor'}
				<span
					class="border border-gray-11 border-dashed rounded-full p-xxs"
					id={`${componentKey}-text-editor`}
				>
					<PencilCircle />
				</span>
				<Tooltip text="custom text editor" triggeredBy={`${componentKey}-text-editor`} />
			{:else if feature === 'multi-language'}
				<span
					class="border border-gray-11 border-dashed rounded-full p-xxs"
					id={`${componentKey}-multi-language`}
				>
					<Translate />
				</span>
				<Tooltip text="multiple languages" triggeredBy={`${componentKey}-multi-language`} />
			{:else if feature === 'google-spreadsheet'}
				<span
					class="border border-gray-11 border-dashed rounded-full p-xxs"
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
</div>
