<script context="module" lang="ts">
	import { Picture } from '^components';
	import { image } from '^assets/images';
</script>

<script lang="ts">
	let state = false;
</script>

<div class="h-screen grid place-items-center">
	<div class="demo-dot">
		<div class="demo-dot-2 w-[300px]">
			<Picture data={image.project.raie.landing_main_pic} />
		</div>
	</div>
</div>

<!-- <div class="h-screen grid place-items-center">
	<div class="flip-card">
		<div class={`flip-card-inner ${state ? 'my-flip' : ''}`}>
			<div class="flip-card-front">
				<div class="w-[300px]">
					<Picture data={image.project.raie.landing_main_pic} />
				</div>
			</div>
		</div>
	</div>
</div> -->

<button class="fixed right-md bottom-md" on:click={() => (state = !state)}>CLICK ME</button>

<style>
	.demo-dot {
		animation: xAxis 2.5s infinite cubic-bezier(0.02, 0.01, 0.21, 1);
	}

	.demo-dot-2 {
		content: '';
		display: block;
		/* width: 20px; */
		/* height: 20px; */
		/* border-radius: 20px; */
		background-color: black;
		animation: yAxis 2.5s infinite cubic-bezier(0.3, 0.27, 0.07, 1.64);
	}

	@keyframes yAxis {
		50% {
			animation-timing-function: cubic-bezier(0.02, 0.01, 0.21, 1);
			transform: translateY(-200px);
		}
	}

	@keyframes xAxis {
		50% {
			animation-timing-function: cubic-bezier(0.3, 0.27, 0.07, 1.64);
			transform: translateX(200px);
		}
	}

	@keyframes my-flip {
		0% {
			transform: rotateY(0deg);
		}

		50% {
			transform: translateY(-150px) rotateY(45deg) scale(0.5);
		}

		100% {
			transform: rotateY(0deg) translateY(-450px) scale(1.5);
		}
	}

	.my-flip {
		animation: my-flip 2s ease-in-out forwards;
	}

	.flip-card {
		background-color: transparent;
		width: 300px;
		height: 200px;
		perspective: 1000px;
	}

	/* This container is needed to position the front and back side */
	.flip-card-inner {
		position: relative;
		width: 100%;
		height: 100%;
		text-align: center;
		transition: transform 0.8s;
		transform-style: preserve-3d;
	}

	/* Do an horizontal flip when you move the mouse over the flip box container */
	/* 	.flip-card:hover .flip-card-inner {
		transform: rotateY(30deg);
	} */

	/* Position the front and back side */
	.flip-card-front {
		position: absolute;
		width: 100%;
		height: 100%;
		-webkit-backface-visibility: hidden; /* Safari */
		backface-visibility: hidden;
	}

	/* Style the front side (fallback if image is missing) */
	.flip-card-front {
		background-color: #bbb;
		color: black;
	}
</style>
