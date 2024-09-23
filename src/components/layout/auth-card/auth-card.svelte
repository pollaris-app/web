<script lang="ts">
	import type { AuthCardProps } from '.';
	import { Separator } from '../separator';

	let { title, description, children, footer }: AuthCardProps = $props();
</script>

<div
	class="flex flex:col gap:16 w:576 h:max-content bg:base-200 b:2|base-300|solid p:16 r:32 flex flex:col gap:32"
>
	<header class="flex flex:col gap:8 text:center">
		<h1 class="f:32 fg:white f:bold">{title}</h1>
		<p class="f:18">{description}</p>
	</header>

	<main>
		{@render children()}
	</main>

	{#if footer}
		<footer class="flex flex:col gap:16">
			<Separator />

			<div>
				{@render footer()}
			</div>
		</footer>
	{/if}
</div>
