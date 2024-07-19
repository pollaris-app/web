<script lang="ts">
	import { cn } from '@kurasu/variants';
	import { buttonVariants, type ButtonProps } from '.';
	import { emptyMeltElement, melt } from '@melt-ui/svelte';

	let {
		children,
		element,
		icon,
		variant = buttonVariants.getDefault()['variant'],
		color = buttonVariants.getDefault()['color'],
		size = buttonVariants.getDefault()['size'],
		roundness = buttonVariants.getDefault()['roundness'],
		class: className,
		...props
	}: ButtonProps = $props();

	let meltEl = $derived(element ?? emptyMeltElement);
</script>

{#snippet iconSnippet(Icon: typeof icon)}
	<Icon size={20} />
{/snippet}

<button
	class={cn(className, buttonVariants.forgeClasses({ variant, color, size, roundness }))}
	use:melt={$meltEl}
	{...props}
>
	{#if icon}
		{@render iconSnippet(icon)}
	{/if}
	{@render children()}
</button>
