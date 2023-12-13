<script lang="ts" context="module">
	import '../app.css';

	import { onMount } from 'svelte';

	const speed = 120;
	const smooth = 15;
</script>

<script>
	let moving = false;
	let pos = 0;

	onMount(() => {
		// new SmoothScroll(document, 120, 12);
		if (document) {
			const target = document.scrollingElement;
			// @ts-ignore
			pos = target.scrollTop;
			let frame =
				target === document.body && document.documentElement ? document.documentElement : target; // safari is the new IE

			document.addEventListener('wheel', scrolled, { passive: false });
			document.addEventListener('DOMMouseScroll', scrolled, { passive: false });
			document.addEventListener('scrollend', () => {
				// account for scroll position change from scrollIntoView or scrollbar

				const wheeling = moving;

				if (wheeling) {
					return;
				}

				// @ts-ignore
				pos = target.scrollTop - 11;
			});

			// @ts-ignore
			function scrolled(e) {
				e.preventDefault(); // disable default scrolling

				let delta = normalizeWheelDelta(e);

				pos += -delta * speed;
				// @ts-ignore
				pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)); // limit scrolling

				if (!moving) update();
			}

			// @ts-ignore
			function normalizeWheelDelta(e) {
				if (e.detail) {
					if (e.wheelDelta)
						return (e.wheelDelta / e.detail / 40) * (e.detail > 0 ? 1 : -1); // Opera
					else return -e.detail / 3; // Firefox
				} else return e.wheelDelta / 120; // IE,Safari,Chrome
			}

			function update() {
				moving = true;

				// @ts-ignore
				let delta = (pos - target.scrollTop) / smooth;

				// @ts-ignore
				target.scrollTop += delta;

				if (Math.abs(delta) > 0.5) requestFrame(update);
				else moving = false;
			}

			let requestFrame = (function () {
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
	});
</script>

<svelte:head>
	<title>Tech-poiesis. Bespoke website creation.</title>
	<meta name="description" content="Technopoeisis" />
</svelte:head>

<slot />
