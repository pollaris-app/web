<script lang="ts">
	import { ICONS, type IconProps } from '.';

	let { name, ...props }: IconProps = $props();
</script>

<span>
	{#each ICONS as icon}
		{@const Component = icon.component}
		<Component {...props} />
	{/each}
</span>
