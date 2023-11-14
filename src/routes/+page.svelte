<script context="module" lang="ts">
	import { Link, LinkText } from '^landing';
</script>

<script lang="ts">
	let linkClicked = false;
</script>

<Link position="top" bgColorClass="bg-[#E5484D]" onClick={() => (linkClicked = true)}>
	<LinkText>Tech</LinkText>
	<LinkText>info</LinkText>
</Link>

<Link position="left" bgColorClass="bg-[#0090FF]" onClick={() => (linkClicked = true)}>
	<LinkText>Pro</LinkText>
	<LinkText>jects</LinkText>
</Link>

<Link position="right" bgColorClass="bg-[#30A46C]" onClick={() => (linkClicked = true)}>
	<LinkText>Ab</LinkText>
	<LinkText>out</LinkText>
</Link>

<div class="fixed inset-0 grid place-items-center">
	<div>
		<h1 class="text-7xl font-medium text-[#202020]">Tech-poiesis</h1>
		<h3 class="mt-xs text-lg text-[#202020]">Individually created sites.</h3>
	</div>
</div>
