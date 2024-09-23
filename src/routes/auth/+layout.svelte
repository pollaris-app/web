<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
</script>

<main class="bg:base-50 fg:neutral w:100% h:100dvh p:32">
	<div class="max-w:1440 mx:auto flex gap:32 h:100% jc:center">
		{@render children()}
	</div>
</main>
