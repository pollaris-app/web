<script lang="ts">
	import { Fragment } from '@master/css.svelte';
	import { onMount } from 'svelte';
	import '$styles/global.css';
	import '$styles/fonts.css';
	import Toaster from '$components/data-display/toaster/toaster.svelte';
	import { Popouter } from '$components/data-display/popouter';

	let CSSRuntimeProvider = $state(Fragment as any);

	onMount(async () => {
		CSSRuntimeProvider = (await import('@master/css.svelte')).default;
	});

	const { children } = $props();
</script>

<svelte:component this={CSSRuntimeProvider} config={import('../../master.css')}>
	{@render children()}

	<Popouter />
	<Toaster />
</svelte:component>
