<script>
	import { SidebarSettings } from '$components/layout/sidebar-settings';

	let { children } = $props();
</script>

<div>
	<SidebarSettings />

	{@render children()}
</div>
