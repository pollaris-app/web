<script lang="ts">
	import { CircleAlert, CircleCheck, Info, TriangleAlert } from 'lucide-svelte';
	import { StatusIndicatorVariants, type StatusIndicatorProps } from '.';
	import { cn } from '@kurasu/variants';

	let { status, size, class: className }: StatusIndicatorProps = $props();

	const getIconSize = (size: StatusIndicatorProps['size']) => {
		if (size === 'small') return 18;
		if (size === 'medium') return 24;
		if (size === 'large') return 32;
	};

	const iconProps = { size: getIconSize(size) };
</script>

{#snippet icon(status: StatusIndicatorProps['status'])}
	{#if status === 'info'}
		<Info {...iconProps} />
	{:else if status === 'success'}
		<CircleCheck {...iconProps} />
	{:else if status === 'warning'}
		<TriangleAlert {...iconProps} />
	{:else if status === 'error'}
		<CircleAlert {...iconProps} />
	{/if}
{/snippet}

<div class={cn(StatusIndicatorVariants.forgeClasses({ status }), className)}>
	{@render icon(status)}
</div>
