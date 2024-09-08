<script lang="ts">
	import { Control, Description, FieldErrors, Label } from 'formsnap';
	import type { TextInputProps } from '.';

	let {
		type = 'text',
		data = $bindable(''),
		label,
		description,
		placeholder,
		...props
	}: TextInputProps = $props();
</script>

<Control let:attrs>
	<div class="flex flex:col gap:4">
		{#if label}
			<Label class="f:18">
				{label}
			</Label>
		{/if}

		<input
			bind:value={data}
			placeholder={placeholder ?? null}
			{type}
			{...props}
			{...attrs}
			class="flex ai:center jc:space-between w:256 font:18 py:8 px:12 b:2|solid|base-400 r:16 h:48 color:neutral"
		/>
	</div>
</Control>

{#if description}
	<Description>
		{description}
	</Description>
{/if}

<FieldErrors class="fg:error mt:4" />
