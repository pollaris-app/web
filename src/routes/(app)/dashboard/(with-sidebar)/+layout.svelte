<script lang="ts">
	import { Sidebar } from '$components/layout/sidebar';
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';
	import { Header } from '$components/layout/header';
	import SecondarySidebar from '$components/layout/secondary-sidebar/secondary-sidebar.svelte';

	interface DashboardLayoutProps {
		children: Snippet;
		data: LayoutData;
	}

	let { children, data }: DashboardLayoutProps = $props();
</script>

<div class="bg:base-100 min-h:100dvh flex flex:col gap:16">
	<Header />

	<div class="flex">
		<Sidebar {data} />
		<SecondarySidebar />

		<main class="flex flex:col gap:16 w:100% r:32">
			{@render children()}
		</main>
	</div>
</div>
