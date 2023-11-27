<script lang="ts" context="module">
</script>

<script lang="ts">
	let show = false;
	let showLine = false;
	let hideLine = false;
	let showContent = false;

	const handleTransition = () => {
		show = true;

		setTimeout(() => {
			showLine = true;

			setTimeout(() => {
				hideLine = true;

				setTimeout(() => {
					showContent = true;
				}, 200);
			}, 250);
		}, 200);
		return;
	};
</script>

<div class="flex mt-lg">
	<div
		class={`relative aspect-square transition-all ease-in duration-200 ${
			show ? 'w-[400px]' : 'w-0'
		}`}
	>
		<div
			class={`z-10 absolute left-0 top-0 transition-all ease-in duration-300 h-[3px] bg-blue-11 ${
				showLine ? 'w-[400px]' : 'w-0 opacity-0'
			} ${hideLine ? 'opacity-0' : ''}`}
		/>

		<div class={`relative  transition-all ease-in duration-300 ${showContent ? '' : 'opacity-0'}`}>
			HELLO
		</div>
	</div>

	<div class=" w-[400px] aspect-square bg-tomato-8" />
</div>

<button
	class="fixed bottom-lg right-lg border p-sm border-gray-8"
	on:click={handleTransition}
	type="button">Click Me</button
>
