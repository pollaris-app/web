<script lang="ts">
	import { CircleAlert, CircleCheck, Info, TriangleAlert, X } from 'lucide-svelte';
	import { createProgress, melt } from '@melt-ui/svelte';
	import { writable } from 'svelte/store';
	import { fly } from 'svelte/transition';

	import { type ToastData } from '../toaster.svelte';
	import type { ToastProps } from '.';

	let { elements, toast }: ToastProps = $props();

	let { content, title, description, close } = $derived(elements);
	let { data, id, getPercentage } = $derived(toast);

	// TODO: Port to Svelte 5 once available
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

{#snippet statusElement(status: ToastData['status'])}
	<div class={`flex jc:center ai:center color:${status} w:30 h:30 r:full bg:${status}/.15`}>
		{#if status === 'info'}
			<Info size={18} />
		{:else if status === 'success'}
			<CircleCheck size={18} />
		{:else if status === 'warning'}
			<TriangleAlert size={18} />
		{:else if status === 'error'}
			<CircleAlert size={18} />
		{/if}
	</div>
{/snippet}

<div
	use:melt={$content(id)}
	in:fly={{ duration: 150, x: '100%' }}
	out:fly={{ duration: 150, x: '100%' }}
	class="rel"
>
	<div
		class={`rel flex ai:start jc:start gap:16 font:18 pt:12 px:12 pb:16 b:2|solid|base-400 r:24 w:376 h:auto bg:base-100 overflow:hidden`}
	>
		<div class="flex flex:col gap:8">
			<div class="flex gap:12">
				<span>
					{@render statusElement(data.status)}
				</span>

				<span use:melt={$title(id)} class="font:bold text:18 letter-spacing:0.5 fg:white">
					{data.title}
				</span>
			</div>

			<p use:melt={$description(id)} class="fg:neutral">
				{data.description}
			</p>
		</div>

		<button
			use:melt={$close(id)}
			class="cursor:pointer flex p:6 r:full bg:error/.1:hover fg:neutral color:error:hover ml:auto"
		>
			<X size={18} />
		</button>

		<div use:melt={$progress} class="abs w:376 h:6 bg:transparent bottom:0 right:0 r:3">
			<div
				class="h:100% w:100% bg:base-300 r:3"
				style={`transform: translateX(-${100 - (100 * ($percentage ?? 0)) / ($max ?? 1)}%)`}
			></div>
		</div>
	</div>
</div>
