<script lang="ts">
	import type { CheckboxProps } from '.';
	import { Check } from 'lucide-svelte';
	import { Control, Description, FieldErrors, Label } from 'formsnap';
	import { createCheckbox, melt } from '@melt-ui/svelte';

	let { checked = $bindable(), label, description, ...props }: CheckboxProps = $props();
	let inputEl: HTMLInputElement;
</script>

<Control let:attrs>
	<div class="flex ai:center gap:8">
		<button
			onclick={() => inputEl.click()}
			class="flex ai:center jc:center font:18 b:2|solid|base-400 r:12 w:32 h:32 color:neutral"
		>
			{#if checked}
				<Check size={24} />
			{/if}
		</button>

		<input type="checkbox" name={attrs.name} bind:checked bind:this={inputEl} hidden />

		{#if label}
			<Label class="f:18">
				{label}
			</Label>
		{/if}
	</div>
</Control>

{#if description}
	<Description>
		{description}
	</Description>
{/if}

<FieldErrors class="fg:error mt:4" />
