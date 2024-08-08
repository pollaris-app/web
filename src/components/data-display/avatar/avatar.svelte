<script lang="ts">
	import { Avatar } from 'bits-ui';
	import type { AvatarProps } from '.';
	import { cn } from '@kurasu/variants';

	let { class: className, image, fallback, ...props }: AvatarProps = $props();
</script>

<Avatar.Root class={cn(className, 'h:32 w:32')} {...props}>
	<Avatar.Image {...image} class="r:100%" />
	<Avatar.Fallback class="r:100%">
		{fallback}
	</Avatar.Fallback>
</Avatar.Root>
