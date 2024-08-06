<script lang="ts">
	import { DropdownMenu } from 'bits-ui';
	import type { ItemProps } from '.';

	let { children }: ItemProps = $props();
</script>

<DropdownMenu.Item let:builder asChild>
	{@render children({ builder })}
</DropdownMenu.Item>
