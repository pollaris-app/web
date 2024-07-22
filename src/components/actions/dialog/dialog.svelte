<script lang="ts">
	import { Dialog } from 'bits-ui';

	import { CircleAlert, CircleCheck, Info, Plus, TriangleAlert, X } from 'lucide-svelte';

	import type { DialogProps } from '.';

	let {
		children,
		trigger,
		status = 'info',
		title,
		description,
		class: className
	}: DialogProps = $props();
</script>

{#snippet statusElement(status: DialogProps['status'])}
	<div class={`flex jc:center ai:center color:${status} w:48 h:48 r:full bg:${status}/.15`}>
		{#if status === 'info'}
			<Info size={24} />
		{:else if status === 'success'}
			<CircleCheck size={24} />
		{:else if status === 'warning'}
			<TriangleAlert size={24} />
		{:else if status === 'error'}
			<CircleAlert size={24} />
		{/if}
	</div>
{/snippet}

<Dialog.Root>
	<Dialog.Trigger asChild let:builder>
		{@render trigger({ builder })}
	</Dialog.Trigger>

	<Dialog.Portal class="abs top:0 left:0 w:100dvw h:100dvh">
		<Dialog.Overlay class="dialog-overlay" />

		<Dialog.Content class="dialog-content">
			<div class="flex flex:col gap:16">
				<div class="flex justify-content:start align-items:center gap-x:16">
					{@render statusElement(status)}

					<Dialog.Title class="dialog-title">{title}</Dialog.Title>

					<Dialog.Close class="dialog-close">
						<X size={24} />
					</Dialog.Close>
				</div>

				<Dialog.Description class="dialog-description">
					{description}
				</Dialog.Description>
			</div>

			<div class="flex flex:col gap-y:16 color:white">
				{#if children}
					{@render children()}
				{/if}
			</div>
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>
