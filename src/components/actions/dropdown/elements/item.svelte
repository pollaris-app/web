<script lang="ts">
	import { DropdownMenu } from 'bits-ui';
	import type { DropdownItemProps } from '.';
	import { cn } from '@kurasu/variants';

	let { children, class: className }: DropdownItemProps = $props();
</script>

<DropdownMenu.Item let:builder asChild>
	<div
		use:builder.action
		{...builder}
		class={cn(
			'flex gap:8 ai:center py:8 px:12 r:12 cursor:pointer color:neutral font:medium color:primary:hover bg:base-300:hover',
			className
		)}
	>
		{@render children()}
	</div>
</DropdownMenu.Item>
