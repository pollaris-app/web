<script lang="ts">
	import { Dialog } from '$components/actions/dialog';
	import { Logo } from '$components/data-display/logo';
	import { cn } from '@kurasu/variants';
	import { Compass, Home, PieChart, type Icon as IconType } from 'lucide-svelte';
	import { page } from '$app/stores';

	const PAGES = [
		{
			name: 'Home',
			path: '/dashboard',
			icon: Home
		},
		{
			name: 'Discover',
			path: '/dashboard/discover',
			icon: Compass
		},
		{
			name: 'Insights',
			path: '/dashboard/insights',
			icon: PieChart
		}
	];

	let pathname = $derived($page.url.pathname);
</script>

<div class="flex flex:col min-w:256 gap:32">
	<Logo variant="full" />

	<nav class="flex flex:col gap:16">
		<Dialog>
			{#snippet triggerContent()}
				Tester
			{/snippet}

			{#snippet children()}
				Testererer
			{/snippet}
		</Dialog>

		<ul class="flex flex:col gap:8">
			{#each PAGES as page}
				<li>
					<a
						href={page.path}
						class={cn(
							'flex ai:center gap:8 p:16 r:16 bg:base-300:hover w:100% color:neutral color:white:hover font:semibold letter-spacing:0.5',
							{
								'bg:base-300': page.path === pathname
							}
						)}
					>
						{#snippet icon(Icon: typeof IconType)}
							<Icon size={20} />
						{/snippet}

						{@render icon(page.icon)}
						<span>
							{page.name}
						</span>
					</a>
				</li>
			{/each}
		</ul>
	</nav>

	<nav class="flex flex:col gap:8 mt:auto">
		<ul>
			<li>
				<a
					href="/settings"
					class="flex gap:8 p:16 r:16 bg:base-200:hover w:100% color:gray font:semibold letter-spacing:0.5"
					>Settings</a
				>
			</li>
			<li>
				<a
					href="/settings"
					class="flex gap:8 p:16 r:16 bg:base-200:hover w:100% color:gray font:semibold letter-spacing:0.5"
					>Log Out</a
				>
			</li>
		</ul>
	</nav>
</div>
