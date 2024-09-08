<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="flex:1">
	<img src="/me.jpg" alt="test" class="r:32 w:100% h:100% object-fit:cover" />
</div>

<div class="flex:1">
	{@render children()}
</div>
