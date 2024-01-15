<script lang="ts" context="module">
	import '../app.css';

	import { onMount } from 'svelte';

	import { scrollStore, type ScrollValues } from '^stores';

	const buttonIds = ['home-link', 'projects-link', 'services-link', 'contact-link'];

	const speed = 120;
	const smooth = 15;
</script>

<script lang="ts">
	let scrollStoreState: ScrollValues;

	scrollStore.subscribe((state) => {
		scrollStoreState = state;
	});

	let scrollNode: HTMLDivElement;

	let moving = false;
	let scrollToPos = 0;

	onMount(() => {
		if (scrollNode) {
			const target = scrollNode;
			// @ts-ignore
			scrollToPos = target.scrollTop;

			let frame = scrollNode;

			scrollNode.addEventListener('wheel', scrolled, { passive: false });
			scrollNode.addEventListener('DOMMouseScroll', scrolled, { passive: false });
			// below: account for scroll position change from scrollIntoView or scrollbar; smooth scroll function properly after.
			scrollNode.addEventListener('scrollend', (e) => {
				// @ts-ignore
				const disableScroll = e?.currentTarget?.dataset?.disablescroll === 'true';

				if (disableScroll) {
					return;
				}

				const wheeling = moving;

				if (wheeling) {
					return;
				}

				// @ts-ignore
				scrollToPos = target.scrollTop - 11;
			});

			scrollNode.addEventListener('click', (e) => {
				//@ts-ignore
				const clickedNodeId = e.target.id;
				//@ts-ignore
				const clickedNodeParentId = e.target?.parentNode?.id;

				let clickedNode;

				if (buttonIds.includes(clickedNodeId)) {
					clickedNode = 'button';
				} else if (buttonIds.includes(clickedNodeParentId)) {
					clickedNode = 'child';
				} else {
					return;
				}

				let buttonId = clickedNode === 'button' ? clickedNodeId : clickedNodeParentId;

				const sectionId = buttonId.split('-')[0] + '-section';

				const node = document.getElementById(sectionId);

				if (!node) {
					return;
				}

				const scrollMiddlePos =
					// @ts-ignore
					node.offsetTop -
					window.innerHeight / 2 +
					// @ts-ignore
					node.getBoundingClientRect().height / 2;

				// const maxBottomScrollPos = target.scrollHeight - window.innerHeight;

				scrollToPos = scrollMiddlePos;
				// scrollToPos = scrollMiddlePos < maxBottomScrollPos ? scrollMiddlePos : maxBottomScrollPos;

				if (moving) {
					return;
				}

				update();
			});

			// @ts-ignore
			function scrolled(e) {
				e.preventDefault(); // disable default scrolling

				// @ts-ignore
				const disableScroll = e?.currentTarget?.dataset?.disablescroll === 'true';

				if (disableScroll) {
					return;
				}

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
	<title>Tech-poiesis</title>
	<meta name="description" content="Technopoeisis" />
</svelte:head>

<div
	class={`h-screen overflow-x-hidden overflow-y-auto sm:scrollbar-thin sm:scrollbar-track-gray-50/50 sm:scrollbar-thumb-gray-100 sm:hover:scrollbar-thumb-gray-200 ${
		scrollStoreState.disable ? 'scrollbar-none' : ''
	}`}
	data-disablescroll={scrollStoreState.disable ? 'true' : 'false'}
	bind:this={scrollNode}
>
	<slot />
</div>
