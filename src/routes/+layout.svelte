<script lang="ts" context="module">
	import '../app.css';

	import { onMount } from 'svelte';

	const speed = 120;
	const smooth = 15;
</script>

<script>
	let moving = false;
	let scrollToPos = 0;

	onMount(() => {
		// new SmoothScroll(document, 120, 12);
		if (document) {
			const target = document.scrollingElement || document.body.parentNode || document.body;
			// @ts-ignore
			scrollToPos = target.scrollTop;
			let frame =
				target === document.body && document.documentElement ? document.documentElement : target; // safari is the new IE

			document.addEventListener('wheel', scrolled, { passive: false });
			document.addEventListener('DOMMouseScroll', scrolled, { passive: false });
			document.addEventListener('scrollend', () => {
				// account for scroll position change from scrollIntoView or scrollbar; smooth scroll function properly after.

				const wheeling = moving;

				if (wheeling) {
					return;
				}

				// @ts-ignore
				scrollToPos = target.scrollTop - 11;
			});

			document.addEventListener('click', (e) => {
				//@ts-ignore
				const buttonId = e.target.id;

				if (
					buttonId !== 'about-link' &&
					buttonId !== 'projects-link' &&
					buttonId !== 'services-link' &&
					buttonId !== 'contact-link'
				) {
					return;
				}

				const sectionId = buttonId.split('-')[0] + '-section';

				const node = document.getElementById(sectionId);

				const scrollMiddlePos =
					// @ts-ignore
					node.offsetTop -
					window.innerHeight / 2 +
					// @ts-ignore
					node.getBoundingClientRect().height / 2;

				// @ts-ignore
				const maxBottomScrollPos = target.scrollHeight - window.innerHeight;

				scrollToPos = scrollMiddlePos < maxBottomScrollPos ? scrollMiddlePos : maxBottomScrollPos;

				if (moving) {
					return;
				}

				update();
			});

			// @ts-ignore
			function scrolled(e) {
				e.preventDefault(); // disable default scrolling

				let delta = normalizeWheelDelta(e);

				scrollToPos += -delta * speed;
				// @ts-ignore
				scrollToPos = Math.max(0, Math.min(scrollToPos, target.scrollHeight - frame.clientHeight)); // limit scrolling

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
				let delta = (scrollToPos - target.scrollTop) / smooth;

				// @ts-ignore
				target.scrollTop += delta;

				if (Math.abs(delta) > 1) requestFrame(update);
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
	<title>tech-poiesis · bespoke website creation.</title>
	<meta name="description" content="Technopoeisis" />
</svelte:head>

<slot />
