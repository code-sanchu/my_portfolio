<script context="module" lang="ts">
	import { Link, LinkText } from '^landing';
</script>

<script lang="ts">
	type Section = 'landing' | 'projects' | 'about' | 'tech-info';
	let previousSection: null | Section = null;
	let currentSection: Section = 'landing';

	let lineIn = false;
	let textIn = false;
</script>

<Link position="top" bgColorClass="bg-[#E5484D]" onClick={() => (currentSection = 'tech-info')}>
	<LinkText>Tech</LinkText>
	<LinkText>info</LinkText>
</Link>

<Link
	position="left"
	bgColorClass="bg-[#0090FF]"
	onClick={() => {
		currentSection = 'projects';

		setTimeout(() => {
			lineIn = true;
		}, 1600);
	}}
>
	<LinkText>Pro</LinkText>
	<LinkText>jects</LinkText>
</Link>

<Link position="right" bgColorClass="bg-[#30A46C]" onClick={() => (currentSection = 'about')}>
	<LinkText>Ab</LinkText>
	<LinkText>out</LinkText>
</Link>

<div class={`fixed inset-0 grid place-items-center ${currentSection !== 'landing' ? 'leave' : ''}`}>
	<div>
		<h1 class="text-7xl font-medium text-[#202020]">Tech-poiesis</h1>
		<h3 class="mt-xs text-lg text-[#202020]">Individually created sites.</h3>
	</div>
</div>

<div class="fixed left-[160px] top-[160px]">
	<div class={`absolute bg-[#0090FF] h-[4px] ${lineIn ? 'line-in' : 'w-0 opacity-0'}`} />

	<div class={`w-0 h-0 opacity-0 ${textIn ? 'text-in' : ''}`}>
		<h2 class="text-[#0090FF] font-medium uppercase tracking-wider text-2xl">Projects</h2>
		<div class="mt-xxs">
			<h4
				class="font-medium uppercase tracking-wider text-2xl text-gray-800 underline decoration-2 underline-offset-4"
			>
				Raie Music
			</h4>
			<h4
				class="font-medium uppercase tracking-wider text-2xl text-gray-800 underline decoration-2 underline-offset-4"
			>
				Birch Collective
			</h4>
			<h4
				class="font-medium uppercase tracking-wider text-2xl text-gray-800 underline decoration-2 underline-offset-4"
			>
				Piros Photography
			</h4>
			<h4
				class="font-medium uppercase tracking-wider text-2xl text-gray-800 underline decoration-2 underline-offset-4"
			>
				Alesh Compton
			</h4>
		</div>
	</div>
</div>

<style>
	@keyframes leave {
		0% {
			transform: translateX(0);
		}

		100% {
			transform: translateX(200%);
		}
	}

	.leave {
		animation: leave 1s ease-in forwards;
		animation-delay: 1000ms;
	}

	@keyframes line-in {
		0% {
			width: 0px;
			opacity: 0;
		}

		100% {
			width: 100%;
			opacity: 1;
		}
	}

	.line-in {
		animation: line-in 1s ease-in;
		/* animation-delay: 1000ms; */
	}

	@keyframes text-in {
		0% {
			width: 0px;
			height: 0px;
			opacity: 0;
		}

		100% {
			width: 100%;
			height: 100%;
			opacity: 1;
		}
	}

	.text-in {
		animation: text-in 1s ease-in;
		/* animation-delay: 1000ms; */
	}
</style>
