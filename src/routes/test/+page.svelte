<script context="module" lang="ts"></script>

<script lang="ts">
</script>

<div
	class="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 grid place-items-center rounded-full"
>
	<!-- <div class="absolute top- left-[5px] bg-white w-[2px] h-[2px]" /> -->
	<!-- <div class="absolute top-1/2 left-[5px] bg-white w-[2px] h-[2px]" /> -->
	<h1 class="uppercase tracking-widest font-light">Tech-poiesis</h1>
	<p class="mt-xs text-gray-9 font-light tracking-wide text-center text-sm">
		Beskpoke website creation.
	</p>

	<div class="cube-container mt-xl">
		<div class="cube">
			<div
				class="face border-t border-t-my-blue-2 border-l border-l-my-lime-1 border-r border-e-my-red-dark-1 border-b border-b-my-yellow-1"
			/>
			<div
				class="face border-t border-t-my-lime-1 border-r border-e-my-orange-red-1 border-b border-b-my-yellow-1"
			/>
			<div
				class="face border-t border-t-my-orange-1 border-r border-r-my-blue-2 border-b border-b-my-blue-2"
			/>
			<div class="face border-b border-b-my-red-dark-1 border-t border-t-my-orange-1" />
			<div class="face" />
			<div class="face" />
		</div>
	</div>

	<p class="text-gray-10 font-light tracking-widest mt-xl">100%</p>
</div>

<style>
	.cube-container {
		/* perspective: 600px; */
		width: 40px;
		height: 40px;
		position: relative;
	}

	.cube {
		width: 100%;
		height: 100%;
		transform-style: preserve-3d;
		transform: rotateX(45deg) rotateY(45deg);
		animation: rotateAndTilt 6s infinite linear forwards;
	}

	.face {
		position: absolute;
		width: 40px;
		height: 40px;
		/* background-color: rgba(0, 123, 255, 0.7); */
		/* border: 1px solid #007bff; */
	}

	.face:nth-child(1) {
		transform: rotateY(0deg) translateZ(20px);
	}
	.face:nth-child(2) {
		transform: rotateY(90deg) translateZ(20px);
	}
	.face:nth-child(3) {
		transform: rotateY(180deg) translateZ(20px);
	}
	.face:nth-child(4) {
		transform: rotateY(-90deg) translateZ(20px);
	}
	.face:nth-child(5) {
		transform: rotateX(90deg) translateZ(20px);
	}
	.face:nth-child(6) {
		transform: rotateX(-90deg) translateZ(20px);
	}

	@keyframes rotateAndTilt {
		0% {
			transform: rotateX(45deg) rotateY(45deg);
		}
		25% {
			transform: rotateX(45deg) rotateY(-100deg) rotateZ(30deg);
		}
		50% {
			transform: rotateX(45deg) rotateY(-200deg) rotateZ(10deg);
		}
		75% {
			transform: rotateX(45deg) rotateY(-300deg) rotateZ(20deg);
		}
		100% {
			transform: rotateX(45deg) rotateY(-405deg) rotateZ(5deg);
		}
	}
</style>
