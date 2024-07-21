<script lang="ts">
	import { AlertDialog } from 'bits-ui';
	import type { AlertProps } from '.';
	import { Info, CircleCheck, TriangleAlert, CircleAlert } from 'lucide-svelte';

	let {
		children,
		trigger,
		title,
		description,
		status = 'info',
		class: className
	}: AlertProps = $props();
</script>

{#snippet statusElement(status: AlertProps['status'])}
	<div class="flex jc:center ai:center color:info w:48 h:48 r:full bg:info/.15">
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

<AlertDialog.Root>
	<AlertDialog.Trigger asChild let:builder>
		{@render trigger({ builder })}
	</AlertDialog.Trigger>

	<AlertDialog.Portal>
		<!-- TODO: Create a class for overlays -->
		<AlertDialog.Overlay class="overlay" />

		<AlertDialog.Content>
			<div class="flex flex:col gap-y:16">
				<div class="flex jc:start ai:center gap-x:16">
					{@render statusElement(status)}

					<AlertDialog.Title>
						{title}
					</AlertDialog.Title>
				</div>

				{#if description}
					<AlertDialog.Description>
						{description}
					</AlertDialog.Description>
				{/if}
			</div>

			{#if children}
				{@render children()}
			{/if}
		</AlertDialog.Content>
	</AlertDialog.Portal>
</AlertDialog.Root>
