<script lang="ts">
	import { DropdownMenu } from 'bits-ui';
	import type { DropdownProps } from '.';
	import { cn } from '@kurasu/variants';

	let { children, trigger, class: className }: DropdownProps = $props();
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger asChild let:builder>
		{@render trigger({ builder })}
	</DropdownMenu.Trigger>

	<DropdownMenu.Content class="w:100% max-w:256 r:16 outline:2|solid|base-400 bg:base-200">
		{@render children()}
	</DropdownMenu.Content>
</DropdownMenu.Root>
