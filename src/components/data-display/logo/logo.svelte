<script lang="ts">
	import { cn } from '@kurasu/variants';
	import { logoVariants, type LogoProps } from '.';

	let { variant = 'full', class: className }: LogoProps = $props();
</script>

{#snippet icon()}
	<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
		<path
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M5 13V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v13c0 1-.6 3-3 3m0 0H6c-1 0-3-.6-3-3v-2h12v2c0 2.4 2 3 3 3"
		/>
	</svg>
{/snippet}

{#snippet text()}
	<span>pollaris</span>
{/snippet}

<div class={cn(logoVariants.forgeClasses({ variant }))}>
	{#if variant === 'icon'}
		{@render icon()}
	{:else if variant === 'full'}
		{@render icon()}
		{@render text()}
	{/if}
</div>
