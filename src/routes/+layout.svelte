<script lang="ts" context="module">
	import { onMount } from 'svelte';
	import '../app.css';
</script>

<script>
	onMount(() => {
		// @ts-ignore
		new SmoothScroll(document, 120, 12);
	});

	// @ts-ignore
	function SmoothScroll(target, speed, smooth) {
		if (target === document)
			target =
				document.scrollingElement ||
				document.documentElement ||
				document.body.parentNode ||
				document.body; // cross browser support for document scrolling

		var moving = false;
		var pos = target.scrollTop;
		var frame =
			target === document.body && document.documentElement ? document.documentElement : target; // safari is the new IE

		target.addEventListener('mousewheel', scrolled, { passive: false });
		target.addEventListener('DOMMouseScroll', scrolled, { passive: false });

		// @ts-ignore
		function scrolled(e) {
			e.preventDefault(); // disable default scrolling

			var delta = normalizeWheelDelta(e);

			pos += -delta * speed;
			pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)); // limit scrolling

			if (!moving) update();
		}

		// @ts-ignore
		function normalizeWheelDelta(e) {
			if (e.detail) {
				if (e.wheelDelta) return (e.wheelDelta / e.detail / 40) * (e.detail > 0 ? 1 : -1); // Opera
				else return -e.detail / 3; // Firefox
			} else return e.wheelDelta / 120; // IE,Safari,Chrome
		}

		function update() {
			moving = true;

			var delta = (pos - target.scrollTop) / smooth;

			target.scrollTop += delta;

			if (Math.abs(delta) > 0.5) requestFrame(update);
			else moving = false;
		}

		var requestFrame = (function () {
			// requestAnimationFrame cross browser
			return (
				window.requestAnimationFrame ||
				// @ts-ignore
				window.webkitRequestAnimationFrame ||
				// @ts-ignore
				window.mozRequestAnimationFrame ||
				// @ts-ignore
				window.oRequestAnimationFrame ||
				// @ts-ignore
				window.msRequestAnimationFrame ||
				function (func) {
					window.setTimeout(func, 1000 / 50);
				}
			);
		})();
	}
</script>

<svelte:head>
	<title>Tech-poiesis. Bespoke website creation.</title>
	<meta name="description" content="Technopoeisis" />
</svelte:head>

<slot />
