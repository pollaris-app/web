<script lang="ts">
	import { CheckboxVariants, handleCheckboxIconSize, type CheckboxProps } from '.';
	import { Check } from 'lucide-svelte';
	import { Control, Description, FieldErrors, Label } from 'formsnap';
	import { cn } from '@kurasu/variants';

	let {
		checked = $bindable(),
		label,
		description,
		size,
		class: className,
		...props
	}: CheckboxProps = $props();
	let inputEl: HTMLInputElement;
</script>

<Control let:attrs>
	<div class="flex ai:center gap:8">
		<button
			type="button"
			onclick={() => inputEl.click()}
			class={cn(CheckboxVariants.forgeClasses({ size }), className)}
		>
			{#if checked}
				<Check size={handleCheckboxIconSize(size ?? 'md')} />
			{/if}
		</button>

		<input type="checkbox" bind:checked bind:this={inputEl} {...attrs} {...props} hidden />

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
