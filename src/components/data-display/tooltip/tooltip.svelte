<script lang="ts">
	import { Tooltip } from 'bits-ui';
	import type { TooltipProps } from '.';

	let { trigger, children, content, ...props }: TooltipProps = $props();
</script>

<Tooltip.Root {...props}>
	<Tooltip.Trigger let:builder asChild>
		{@render trigger({ builder })}
	</Tooltip.Trigger>

	<Tooltip.Content {...content}>
		<div
			class="flex ai:center jc:center r:16 outline:2|solid|base-400 bg:base-300 p:16 color:neutral"
		>
			{@render children()}
		</div>
	</Tooltip.Content>
</Tooltip.Root>
