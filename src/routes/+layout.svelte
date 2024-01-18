<script lang="ts" context="module">
	import '../app.css';

	import { onMount } from 'svelte';

	import { scrollStore, type ScrollValues } from '^stores';

	import { Header, LoadInCounter } from '^components';

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

	let scrollDirection: 'down' | 'up';

	onMount(() => {
		if (scrollNode) {
			// @ts-ignore
			scrollToPos = scrollNode.scrollTop;

			scrollNode.addEventListener('wheel', scrolled, { passive: false });
			scrollNode.addEventListener('DOMMouseScroll', scrolled, { passive: false });
			// below: account for scroll position change from scrollIntoView or scrollbar; smooth scroll function properly after.
			scrollNode.addEventListener('scrollend', (e) => {
				// @ts-ignore
				const disableScroll = e?.currentTarget?.dataset?.disablescroll === 'true';

				if (disableScroll || moving) {
					return;
				}

				scrollToPos = scrollNode.scrollTop;
			});

			document.addEventListener('click', (e) => {
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
					scrollNode.clientHeight / 2 +
					// @ts-ignore
					node.getBoundingClientRect().height / 2;

				const maxBottomScrollPos = scrollNode.scrollHeight - scrollNode.clientHeight;

				scrollToPos = scrollMiddlePos < maxBottomScrollPos ? scrollMiddlePos : maxBottomScrollPos;

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

				scrollDirection = delta === -1 ? 'down' : 'up';

				scrollToPos += -delta * speed;

				// @ts-ignore
				scrollToPos = Math.max(
					0,
					Math.min(scrollToPos, scrollNode.scrollHeight - scrollNode.clientHeight)
				); // limit scrolling

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
				let delta = (scrollToPos - scrollNode.scrollTop) / smooth;

				// @ts-ignore
				scrollNode.scrollTop += delta;

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

	let windowWidth: number;
	let windowHeight: number;
	let headerHeight = 0;

	$: hideHeader = windowWidth && windowWidth < 768 && scrollDirection === 'down';
</script>

<svelte:head>
	<title>Tech-poiesis</title>
	<meta name="description" content="Technopoeisis" />
</svelte:head>

<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} />

<div class="fixed z-40 left-0 top-0 p-sm md:p-[1.25rem] lg:p-md 2xl:p-xl">
	<LoadInCounter />
</div>

<div
	class="fixed z-30 left-0 top-0 w-full transition-transform ease-in-out duration-500"
	style:transform={hideHeader && headerHeight ? `translateY(-${headerHeight}px)` : ''}
	bind:clientHeight={headerHeight}
>
	<Header />
</div>

<div
	class={`h-screen overflow-x-hidden overflow-y-auto sm:scrollbar-thin sm:scrollbar-track-gray-50/50 sm:scrollbar-thumb-gray-100 sm:hover:scrollbar-thumb-gray-200 ${
		scrollStoreState.disable ? 'scrollbar-none' : ''
	}`}
	style:padding-top="{headerHeight}px"
	data-disablescroll={scrollStoreState.disable ? 'true' : 'false'}
	bind:this={scrollNode}
>
	<slot />
</div>
