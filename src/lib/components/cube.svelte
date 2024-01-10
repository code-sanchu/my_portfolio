<div class="cube">
	<div class="face front" />
	<div class="face back" />
	<div class="face left" />
	<div class="face right" />
	<div class="face top" />
	<div class="face bottom" />
</div>

<style>
	.cube {
		position: relative;
		width: 20px;
		height: 20px;
		transform-style: preserve-3d;
		transform: rotateX(45deg) rotateY(45deg);
		animation: rotateCube 5s infinite linear;
	}

	.face {
		position: absolute;
		width: 20px;
		height: 20px;
		line-height: 20px;
		text-align: center;
		font-size: 24px;
		font-weight: bold;
		border: 1px solid #f2eded;
	}

	.front {
		transform: translateZ(10px);
		border-color: rgb(128, 128, 0);
	}
	.back {
		transform: rotateY(180deg) translateZ(10px);
		border-color: rgb(100, 149, 237);
	}
	.left {
		transform: rotateY(-90deg) translateZ(10px);
		border-color: rgb(128, 128, 0);
	}
	.right {
		transform: rotateY(90deg) translateZ(10px);
		border-color: rgb(128, 128, 0);
	}
	.top {
		transform: rotateX(90deg) translateZ(10px);
		border-color: rgb(128, 128, 0);
	}
	.bottom {
		transform: rotateX(-90deg) translateZ(10px);
		border-color: rgb(128, 128, 0);
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
