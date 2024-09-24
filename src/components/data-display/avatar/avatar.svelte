<script lang="ts">
	import { Avatar } from 'bits-ui';
	import { AvatarVariants, type AvatarProps } from '.';
	import { cn } from '@kurasu/variants';

	let { image, fallback, size, class: className, ...props }: AvatarProps = $props();
</script>

<Avatar.Root class={cn(AvatarVariants.forgeClasses({ size }), className)} {...props}>
	<Avatar.Image {...image} class="r:8" />

	<Avatar.Fallback class="r:8">
		{fallback}
	</Avatar.Fallback>
</Avatar.Root>
