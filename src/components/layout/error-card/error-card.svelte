<script lang="ts">
	import { Button } from '$components/actions/button';
	import type { ErrorCardProps } from '.';

	let { title, description, children }: ErrorCardProps = $props();
</script>

<div>
	<header>
		<h1>{title}</h1>
		<p>{description}</p>
	</header>

	<main>
		{#if children}
			{@render children()}
		{:else}
			<a href="/auth/signin"><Button>Go back</Button></a>
		{/if}
	</main>
</div>
