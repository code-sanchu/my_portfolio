<script context="module" lang="ts">
	import { Picture } from '^components';
	import { image } from '^assets/images';
</script>

<script lang="ts">
	let state = false;
</script>

<div class="h-screen grid place-items-center">
	<div class="flip-card">
		<div class={`flip-card-inner ${state ? 'my-flip' : ''}`}>
			<div class="flip-card-front">
				<div class="w-[300px]">
					<Picture data={image.project.raie.landing_main_pic} />
				</div>
			</div>
		</div>
	</div>
</div>

<button class="fixed right-md bottom-md" on:click={() => (state = !state)}>CLICK ME</button>

<style>
	@keyframes my-flip {
		0% {
			transform: rotateY(0deg);
		}

		50% {
			transform: translateY(-150px) rotateY(45deg);
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
