<script lang="ts">
	import { Checkbox } from 'bits-ui';
	import type { CheckboxProps } from '.';
	import { Check } from 'lucide-svelte';
	import { Control, Description, FieldErrors, Label } from 'formsnap';

	let { checked = $bindable(), label, description, ...props }: CheckboxProps = $props();
</script>

<Control let:attrs>
	<div class="flex ai:center gap:8">
		<button
			class="flex ai:center jc:center font:18 b:2|solid|base-400 r:12 w:32 h:32 color:neutral"
			onclick={() => {
				checked = !checked;
			}}
		>
			{#if checked}
				<Check size={18} />
			{/if}
		</button>

		<input type="checkbox" {...attrs} bind:checked hidden />

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
