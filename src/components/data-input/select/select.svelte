<script lang="ts" generics="T, M extends boolean">
	import { Select, type Selected } from 'bits-ui';
	import { Control } from 'formsnap';
	import type { SelectProps } from '.';

	let {
		data = $bindable(),
		items,
		placeholder,
		multiple = false as M,
		...props
	}: SelectProps<T, M> = $props();

	let selected = $derived.by(() => {
		if (multiple) {
			return data.map((itemValue: string) => ({
				value: itemValue,
				label: items.find((item) => item.value === itemValue)?.label
			}));
		}

		const itemValue = data[0];
		if (itemValue) {
			return {
				value: itemValue,
				label: items.find((item) => item.value === itemValue)?.label
			};
		}

		return undefined;
	}) as [M] extends [true] ? Selected<T>[] | undefined : Selected<T> | undefined;
</script>

<Control let:attrs>
	<Select.Root
		{selected}
		{multiple}
		onSelectedChange={(s) => {
			if (s) {
				if (multiple) {
					data = (s as Selected<T>[]).map((item: Selected<T>) => item.value as string);
				} else {
					data = [(s as Selected<T>).value as string];
				}
			} else {
				data = [];
			}
		}}
		{...props}
	>
		{#each items as item}
			<Select.Input value={item.value} />
		{/each}

		<Select.Trigger
			{...attrs}
			class="flex ai:center jc:start w:256 font:18 py:8 px:12 b:2|solid|base-400 r:16 h:48 color:neutral"
		>
			<Select.Value {placeholder} />
		</Select.Trigger>

		<Select.Content class="w:100% mt:8 p:4 max-w:256 r:16 outline:2|solid|base-400 bg:base-200">
			{#each items as item}
				<Select.Item
					value={item.value}
					label={item.label}
					class="flex gap:8 ai:center py:8 px:12 r:12 cursor:pointer color:neutral font:medium color:primary:hover bg:base-300:hover"
				/>
			{/each}
		</Select.Content>
	</Select.Root>
</Control>
