<script lang="ts">
	export let remPxVal: number;

	$: {
		if (document) {
			remPxVal = parseFloat(getComputedStyle(document.documentElement).fontSize);
		}
	}
</script>
