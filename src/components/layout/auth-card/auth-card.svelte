<script lang="ts">
	import type { AuthCardProps } from '.';
	import { Separator } from '../separator';

	let { title, description, children, footer }: AuthCardProps = $props();
</script>

<div class="flex flex:col gap:8">
	<header>
		<h1 class="f:32 fg:white f:bold">{title}</h1>
		<p class="f:18">{description}</p>
	</header>

	<main>
		{@render children()}
	</main>

	{#if footer}
		<footer>
			<Separator />

			{@render footer()}
		</footer>
	{/if}
</div>
