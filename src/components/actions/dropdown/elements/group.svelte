<script lang="ts">
	import { DropdownMenu } from 'bits-ui';
	import type { DropdownGroupProps } from '.';
	import { cn } from '@kurasu/variants';

	let { children, class: className }: DropdownGroupProps = $props();
</script>

<DropdownMenu.Group let:builder asChild>
	<div use:builder.action {...builder} class={cn('p:8 flex flex:col gap:4', className)}>
		{@render children()}
	</div>
</DropdownMenu.Group>
