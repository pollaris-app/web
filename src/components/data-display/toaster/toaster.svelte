<script module lang="ts">
	export type ToastData = {
		title: string;
		description: string;
		status: 'success' | 'error' | 'warning' | 'info';
	};

	const {
		elements,
		states: { toasts },
		actions: { portal },
		helpers
	} = createToaster<ToastData>();

	export const addToast = helpers.addToast;
</script>

<script lang="ts">
	import { createToaster } from '@melt-ui/svelte';
	import { flip } from 'svelte/animate';
	import { Toast } from './toast';
</script>

<!-- TODO: Move the entire toast into a seperate component -->
<!-- TODO: Create another toaster for popouts (allow one at a time only) -->
<!-- TODO: Make a reusable snippet (icon size etc) -->

<div use:portal class="fixed right:16 bottom:16 z:50 m:16 flex flex:col ai:end gap:8">
	{#each $toasts as toast (toast.id)}
		<div animate:flip={{ duration: 500 }}>
			<Toast {elements} {toast} />
		</div>
	{/each}
</div>
