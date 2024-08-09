<script lang="ts">
	import { Separator } from 'bits-ui';
	import { cn } from '@kurasu/variants';

	import { separatorVariants, type SeparatorProps } from '.';

	let { class: className, ...props }: SeparatorProps = $props();
</script>

<Separator.Root
	class={cn(separatorVariants.forgeClasses({ orientation: props.orientation }), className)}
	{...props}
/>
