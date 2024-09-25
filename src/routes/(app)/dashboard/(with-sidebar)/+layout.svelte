<script lang="ts">
	import { Sidebar } from '$components/layout/sidebar';
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';
	import { Header } from '$components/layout/header';

	interface DashboardLayoutProps {
		children: Snippet;
		data: LayoutData;
	}

	let { children, data }: DashboardLayoutProps = $props();
</script>

<div class="bg:base-100 min-h:100dvh flex flex:col gap:16 p:16">
	<Header />

	<div class="flex gap:24">
		<Sidebar {data} />

		<main class="flex flex:col gap:16 w:100% r:32">
			{@render children()}
		</main>
	</div>
</div>
