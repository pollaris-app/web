<script lang="ts">
	import { cn } from '@kurasu/variants';
	import { DropdownMenu } from 'bits-ui';
	import type { DropdownSeparatorProps } from '.';

	let { class: className }: DropdownSeparatorProps = $props();
</script>

<DropdownMenu.Separator class={cn('bg:base-300 h:1 w:100%', className)} />
