<div class=" fixed right-sm top-[300px] z-50">
	<div class="cube-container">
		<div class="cube">
			<div class="face" />
			<div class="face" />
			<div class="face" />
			<div class="face" />
			<div class="face" />
			<div class="face" />
		</div>
	</div>
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
		/* animation: rotateCube 5s infinite linear; */
	}

	.face {
		position: absolute;
		width: 40px;
		height: 40px;
		/* border: 1px solid #e8e8e8; */
	}

	.face:nth-child(1) {
		transform: rotateY(0deg) translateZ(20px);
	}
	.face:nth-child(2) {
		transform: rotateY(90deg) translateZ(20px);
		background-color: rgba(100, 149, 237, 0.5);
	}
	.face:nth-child(3) {
		transform: rotateY(180deg) translateZ(20px);
		background-color: rgba(249, 249, 249, 1);
	}
	.face:nth-child(4) {
		transform: rotateY(-90deg) translateZ(20px);
	}
	.face:nth-child(5) {
		transform: rotateX(90deg) translateZ(20px);
		background-color: white;
	}
	.face:nth-child(6) {
		transform: rotateX(-90deg) translateZ(20px);
	}

	@keyframes rotateCube {
		from {
			transform: rotateX(45deg) rotateY(45deg);
		}
		to {
			transform: rotateX(45deg) rotateY(405deg);
		}
	}
</style>
