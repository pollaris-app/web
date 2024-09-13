<script module lang="ts">
	const {
		elements,
		states: { toasts: popouts },
		actions: { portal },
		helpers
	} = createToaster<PopouterData>();

	function removeOtherPopouts(popouts: Toast<PopouterData>[]) {
		if (popouts.length >= 1) {
			for (let popout of popouts) {
				removePopout(popout.id);
			}
		}
	}

	export const addPopout = (popoutData: AddToastProps<PopouterData>) => {
		removeOtherPopouts(get(popouts));

		helpers.addToast(popoutData);
	};
	export const removePopout = helpers.removeToast;
	export const updatePopout = helpers.updateToast;
</script>

<script lang="ts">
	import { flip } from 'svelte/animate';
	import { Popout } from './popout';
	import { get } from 'svelte/store';
	import { createToaster, type AddToastProps, type Toast } from '@melt-ui/svelte';
	import type { PopouterData } from '.';
</script>

<div use:portal class="fixed inset:50% z:50 m:16 flex flex:col ai:end gap:8">
	{#each $popouts as popout (popout.id)}
		<div animate:flip={{ duration: 500 }} class="translate(50%,-50%)">
			<Popout {elements} {popout} />
		</div>
	{/each}
</div>
