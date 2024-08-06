<script lang="ts">
	import { cn } from '@kurasu/variants';
	import { buttonVariants, type ButtonProps } from '.';
	import { Button as ButtonPrimitive } from 'bits-ui';

	let {
		children,
		icon,
		variant = buttonVariants.getDefault()['variant'],
		color = buttonVariants.getDefault()['color'],
		size = buttonVariants.getDefault()['size'],
		roundness = buttonVariants.getDefault()['roundness'],
		class: className,
		...props
	}: ButtonProps = $props();
</script>

{#snippet iconSnippet(Icon: typeof icon)}
	<Icon size={20} />
{/snippet}

<ButtonPrimitive.Root
	class={cn(buttonVariants.forgeClasses({ variant, color, size, roundness }), className)}
	{...props}
>
	{#if icon}
		{@render iconSnippet(icon)}
	{/if}
	{@render children()}
</ButtonPrimitive.Root>
