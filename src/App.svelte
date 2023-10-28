<script lang="ts">
	import { onMount } from "svelte";

	let mounted = 'not mounted!';

	onMount(() => {
		mounted = 'mounted!';
	})
</script>
{mounted}
