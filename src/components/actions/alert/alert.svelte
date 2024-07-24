<script lang="ts">
	import { AlertDialog } from 'bits-ui';
	import type { AlertProps } from '.';
	import { Info, CircleCheck, TriangleAlert, CircleAlert } from 'lucide-svelte';
	import { Button } from '$components/actions/button';

	let {
		children,
		trigger,
		title,
		description,
		onAction,
		openState = $bindable(),
		status = 'info',
		class: className
	}: AlertProps = $props();

</script>

{#snippet statusElement(status: AlertProps['status'])}
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

<AlertDialog.Root bind:open={openState}>
	<AlertDialog.Trigger asChild let:builder>
		{@render trigger({ builder })}
	</AlertDialog.Trigger>

	<AlertDialog.Portal>
		<AlertDialog.Overlay class="dialog-overlay" />

		<!-- TODO: Add custom classes for alert (make the base classes for all types of dialogs and then reuse them in dialog and alert classes) -->
		<AlertDialog.Content class="dialog-content w:640!">
			<div class="flex flex:col gap-y:16">
				<div class="flex jc:start ai:center gap-x:16">
					{@render statusElement(status)}

					<AlertDialog.Title class="dialog-title">
						{title}
					</AlertDialog.Title>
				</div>

				{#if description}
					<AlertDialog.Description class="dialog-description">
						{description}
					</AlertDialog.Description>
				{/if}
			</div>

			{#if children}
				{@render children()}
			{/if}

		
			<div class='flex ai:center jc:end gap-x:8'>
				<AlertDialog.Cancel asChild let:builder>
					<Button size='small' color='secondary' builders={[builder]}>
						Cancel
					</Button>
				</AlertDialog.Cancel>
				
				<AlertDialog.Action asChild let:builder>
					<Button size='small' color='error' builders={[builder]} onclick={() => {
						if (onAction) {
							onAction()
						}
					}}>
						Confirm
					</Button>
				</AlertDialog.Action>
			</div>
			
		</AlertDialog.Content>
	</AlertDialog.Portal>
</AlertDialog.Root>
