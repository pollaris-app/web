<script lang="ts">
	import type { CheckboxProps } from '.';
	import { Check } from 'lucide-svelte';
	import { Control, Description, FieldErrors, Label } from 'formsnap';

	let { checked = $bindable(), label, description, ...props }: CheckboxProps = $props();
</script>

<!-- NOTICE: TO MAKE THIS FULLY WORKING INPUT NEEDS TO BE INSIDE OF THE BUTTON, BUT AS OF NOW IT'S IMPOSSIBLE MAKING THIS COMPONENT NOT FULLY WORKING WITH FORMSNAP -->
<Control let:attrs>
	<div class="flex ai:center gap:8">
		<button
			class="flex ai:center jc:center font:18 b:2|solid|base-400 r:12 w:32 h:32 color:neutral"
			onclick={() => {
				checked = !checked;
			}}
			role="checkbox"
			aria-checked={checked}
			{...props}
			{...attrs}
		>
			{#if checked}
				<Check size={18} />
			{/if}

			<!-- <input type="hidden" name={attrs.name} /> -->
		</button>

		<input type="hidden" name={attrs.name} />

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
