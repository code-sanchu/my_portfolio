<script lang="ts" context="module">
	import '../app.css';

	import { onMount } from 'svelte';

	import { scrollStore, updateSectionReady, type ScrollValues } from '^stores';

	import { Header } from '^components';

	const buttonIds = ['home-link', 'projects-link', 'services-link', 'contact-link'];

	const speed = 120;
	const smooth = 15;

	const headerTriggerMinScrollDistance = 50;
</script>

<script lang="ts">
	let scrollStoreState: ScrollValues;

	scrollStore.subscribe((state) => {
		scrollStoreState = state;
	});

	let windowHeight: number;
	let headerHeight = 0;

	$: {
		if (headerHeight) {
			updateSectionReady.initialLayout();
		}
	}

	let moving = false;
	let scrollToPos = 0;

	let scrollDirection: 'down' | 'up';

	let touchStartData: Touch;
	let prevTouchData: Touch;

	onMount(() => {
		if (document) {
			// @ts-ignore
			const target = document.scrollingElement || document.body.parentNode || document.body;
			// @ts-ignore
			scrollToPos = target.scrollTop;

			let frame =
				target === document.body && document.documentElement ? document.documentElement : target; // safari

			document.addEventListener('wheel', scrolled, { passive: false });
			document.addEventListener('DOMMouseScroll', scrolled, { passive: false });
			document.addEventListener('touchstart', (e) => {
				const touchData = e.targetTouches[0];

				touchStartData = touchData;
				prevTouchData = touchData;
			});

			document.addEventListener('touchend', (e) => {
				const touchEndData = e.changedTouches[0];

				const distance = Math.abs(touchEndData.clientY - touchStartData.clientY);

				if (distance >= headerTriggerMinScrollDistance) {
					scrollDirection = touchEndData.clientY > touchStartData.clientY ? 'up' : 'down';
				}
			});

			document.addEventListener(
				'touchmove',
				(e) => {
					e.preventDefault();

					// @ts-ignore
					const disableScroll = scrollStoreState?.disable;

					if (disableScroll) {
						return;
					}

					const touchMoveData = e.changedTouches[0];

					const touchDistance = touchMoveData.clientY - prevTouchData.clientY;

					scrollToPos += -touchDistance * 4;

					scrollToPos = Math.max(
						0,
						// @ts-ignore
						Math.min(scrollToPos, target.scrollHeight - frame.clientHeight)
					);

					prevTouchData = touchMoveData;

					if (!moving) update();
				},
				{ passive: false }
			);

			// below: account for scroll position change from scrollIntoView or scrollbar; smooth scroll function properly after.
			document.addEventListener('scrollend', () => {
				// @ts-ignore
				const disableScroll = scrollStoreState?.disable;

				if (disableScroll || moving) {
					return;
				}

				// @ts-ignore
				scrollToPos = target.scrollTop;
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

				const sectionNode = document.getElementById(sectionId);

				if (!sectionNode) {
					return;
				}

				const scrollMiddlePos =
					// @ts-ignore
					sectionNode.offsetTop -
					windowHeight / 2 +
					// @ts-ignore
					sectionNode.getBoundingClientRect().height / 2;

				// @ts-ignore
				const maxBottomScrollPos = target.scrollHeight - windowHeight;

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
				const disableScroll = scrollStoreState?.disable;

				if (disableScroll) {
					return;
				}

				let delta = normalizeWheelDelta(e);

				scrollDirection = delta === -1 ? 'down' : 'up';

				scrollToPos += -delta * speed;

				scrollToPos = Math.max(
					0,
					// @ts-ignore
					Math.min(scrollToPos, target.scrollHeight - frame.clientHeight)
				); // limit scrolling
				console.log('SCROLLED scrollToPos:', scrollToPos);

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

	$: hideHeader = scrollDirection === 'down';
</script>

<svelte:head>
	<title>Tech-poiesis</title>
	<meta
		name="description"
		content="Bespoke website creation for individuals, small companies, hobbyists and professionals."
	/>
</svelte:head>

<svelte:window bind:innerHeight={windowHeight} />

<div
	class="fixed z-30 left-0 top-0 w-full transition-transform ease-in-out duration-500"
	style:transform={hideHeader && headerHeight ? `translateY(-${headerHeight}px)` : ''}
	bind:clientHeight={headerHeight}
>
	<Header />
</div>

<div
	class={`transition-opacity duration-200 ease-in-out ${!headerHeight ? 'opacity-0' : ''}`}
	style:padding-top="{headerHeight}px"
>
	<slot />
</div>
