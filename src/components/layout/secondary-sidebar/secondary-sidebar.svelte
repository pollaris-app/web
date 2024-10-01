<script lang="ts">
	import { Search } from 'lucide-svelte';
	import { page } from '$app/stores';
	import { CONTENT } from '.';
	import { cn } from '@kurasu/variants';

	let pathname = $derived($page.url.pathname);
</script>

<nav class="flex flex:col gap-y:16 bg:base-200 max-w:256 h:calc(100dvh-96) p:16 r:24 sticky top:80">
	<h2 class="color:white font:bold font:24">Settings</h2>

	<label for="search" class="rel">
		<Search class="abs left:12 top:12 color:neutral" />
		<input
			id="search"
			type="text"
			class="w:100% font:18 pr:16 pl:40 py:12 b:2|solid|base-400 r:16 h:48 color:neutral"
			placeholder="Search"
		/>
	</label>

	<ul class="flex flex:col gap-y:4 font:semibold letter-spacing:0.5 cursor:pointer">
		{#each CONTENT as item}
			<li class="flex">
				<a
					href={item.href()}
					class={cn('w:100% px:16 py:12 r:16 color:neutral color:white:hover bg:base-300:hover', {
						'bg:base-300': item.href() === pathname
					})}>{item.label}</a
				>
			</li>
		{/each}
	</ul>
</nav>
