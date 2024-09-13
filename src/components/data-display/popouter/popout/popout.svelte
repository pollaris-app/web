<script lang="ts">
	import {
		StatusIndicator,
		type StatusIndicatorStatus
	} from '$components/data-display/status-indicator';
	import { createProgress, melt } from '@melt-ui/svelte';
	import type { PopoutProps } from '.';
	import { X } from 'lucide-svelte';
	import { Button } from '$components/actions/button';
	import { writable } from 'svelte/store';

	let { elements, popout }: PopoutProps = $props();

	let { content, title, description, close } = $derived(elements);
	let { data, id, getPercentage } = $derived(popout);

	const percentage = writable(0);
	const {
		elements: { root: progress },
		options: { max }
	} = createProgress({
		max: 100,
		value: percentage
	});

	$effect(() => {
		let frame: number;

		const updatePercentage = () => {
			percentage.set(getPercentage());
			frame = requestAnimationFrame(updatePercentage);
		};

		frame = requestAnimationFrame(updatePercentage);

		return () => cancelAnimationFrame(frame);
	});
</script>

<div
	class="rel w:376 h:max-content bg:base-200 b:2|base-300|solid p:16 r:32 flex flex:col gap:32 overflow:hidden"
	use:melt={$content(id)}
>
	<div class="flex flex:col gap:8">
		<div class="flex gap:8 ai:center">
			<StatusIndicator status={data.status as StatusIndicatorStatus} />
			<span use:melt={$title(id)} class="fg:primary f:bold f:24 ls:0.5">{data.title}</span>
		</div>

		<p use:melt={$description(id)} class="fg:neutral">
			{data.description}
		</p>
	</div>

	<!-- <div class="flex flex:col gap:8"> -->
	{#if data.actions}
		<div class="flex gap:8 as:end">
			{#each data.actions as action}
				<Button size="small" onclick={() => action.handler()} {...action.button}
					>{action.label}</Button
				>
			{/each}
		</div>
	{/if}
	<!-- </div> -->

	<button
		use:melt={$close(id)}
		class="abs top:16 right:16 cursor:pointer flex p:8 r:full bg:error/.1:hover fg:neutral color:error:hover ml:auto"
	>
		<X size={18} />
	</button>

	<div use:melt={$progress} class="abs w:376 h:6 bg:transparent bottom:-1 right:0 r:3">
		<div
			class={`h:100% w:100% bg:${data.status} r:3`}
			style={`transform: translateX(-${100 - (100 * ($percentage ?? 0)) / ($max ?? 1)}%)`}
		></div>
	</div>
</div>
