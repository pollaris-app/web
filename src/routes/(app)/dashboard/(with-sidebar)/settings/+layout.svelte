<script>
	import { SidebarSettings } from '$components/layout/sidebar-settings';

	let { children } = $props();
</script>

<div class="flex gap:16">
	<SidebarSettings />

	<div class="w:100% p:16 min-h:calc(100dvh-80)">{@render children()}</div>
</div>
