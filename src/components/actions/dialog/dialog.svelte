<script lang="ts">
	import { Dialog, type Builder } from 'bits-ui';

	import { CircleAlert, CircleCheck, Info, Plus, TrainFrontTunnel, TriangleAlert, X } from 'lucide-svelte';

	import type { DialogProps } from '.';
	import { Alert, } from '../alert';

	let {
		children,
		trigger,
		status = 'info',
		title,
		description,
		openState = $bindable(),
		alertBeforeClose,
		closeOnEvents,
		class: className,
		...props
	}: DialogProps = $props();

	let alertOpen = $state(false)
</script>

{#snippet closeButton(builder?: Builder)}
	{@const conditionalBuilder = builder ? builder?.action : () => {}}

	<div class="dialog-close" use:conditionalBuilder tabindex="0" role='button'  {...builder}>
		<X size={24} />
	</div>
{/snippet}

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

<svelte:window onkeydown={(e) => {
	if (e.key === 'Escape' && closeOnEvents) {
		alertOpen = true
	}
}} />

<Dialog.Root
	bind:open={openState}
	closeOnOutsideClick={false}
	closeOnEscape={false}
	{...props}
>
	<Dialog.Trigger asChild let:builder>
		{@render trigger({ builder })}
	</Dialog.Trigger>

	<Dialog.Portal >
		<Dialog.Overlay
			class="dialog-overlay"
			onclick={(e) => {
				if (e && closeOnEvents) {
					if (alertBeforeClose) {
						alertOpen = true
					} else {
						openState = false
					}
				}
			}}
		/>

		<Dialog.Content class="dialog-content">
			<div class="flex flex:col gap:16">
				<div class="flex justify-content:start align-items:center gap-x:16">
					{@render statusElement(status)}

					<Dialog.Title class="dialog-title">{title}</Dialog.Title>

					<div class='ml:auto'>
						{#if alertBeforeClose}
							<Alert
								bind:openState={alertOpen}
								title='Are you sure you want to cancel?'
								status='warning' onAction={() => openState = false}
							>
								{#snippet trigger({builder})}
									{@render closeButton(builder)}
								{/snippet}
							</Alert>
						{:else}
							<Dialog.Close asChild let:builder>
								{@render closeButton(builder)}
							</Dialog.Close>
						{/if}
					</div>
				</div>

				<Dialog.Description class="dialog-description">
					{description}
				</Dialog.Description>
			</div>

			<div class="flex flex:col gap-y:16 color:white">
				{@render children()}
			</div>
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>
