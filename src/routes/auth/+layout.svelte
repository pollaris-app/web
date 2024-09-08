<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
</script>

<main class="bg:base-50 fg:neutral w:100% h:100dvh flex p:32 gap:32">
	{@render children()}
</main>
