<script lang="ts" generics="T extends string | number, M extends boolean">
	import { Select, type Selected } from 'bits-ui';
	import { type SelectProps } from '.';
	import { Control, FieldErrors, Label } from 'formsnap';
	import { Check, ChevronsUpDown } from 'lucide-svelte';
	import { Icon, type IconProps } from '$components/icon';

	let { data = $bindable(), values, details, multiple, ...props }: SelectProps<T, M> = $props();

	const handlePlaceholder = (placeholder?: string, multiple?: boolean) => {
		if (placeholder) {
			return placeholder;
		}

		if (multiple) {
			return 'Select your options';
		}

		return 'Select your option';
	};

	let selected: Selected<T> | Selected<T>[] | undefined = $state(undefined);

	$effect(() => {
		if (multiple) {
			selected = data.map((c) => ({ label: values[c], value: c })) as Selected<T>[];
		} else {
			selected = { label: values[data[0]], value: data[0] } as Selected<T>;
		}
	});
</script>

{#snippet indicator(props: IconProps | null)}
	{#if props}
		<Icon {...props} />
	{/if}
{/snippet}

<Control let:attrs>
	<Select.Root
		{multiple}
		selected={selected as typeof props.selected}
		onSelectedChange={(selections) => {
			if (selections) {
				if (multiple) {
					data = (selections as Selected<T>[]).map((selection) => selection.value);
				} else {
					data = [(selections as Selected<T>).value];
				}
			} else {
				data = [];
			}
		}}
	>
		{#each data as color}
			<input name={attrs.name} hidden value={color} />
		{/each}

		<Select.Trigger
			{...attrs}
			class="flex ai:center jc:space-between w:256 font:18 py:8 px:12 b:2|solid|base-400 r:16 h:48 color:neutral"
		>
			<Select.Value placeholder={handlePlaceholder(props?.placeholder, multiple)} />
			<ChevronsUpDown size={16} />
		</Select.Trigger>

		<Select.Content class="w:100% mt:8 p:4 max-w:256 r:16 outline:2|solid|base-400 bg:base-200">
			{#each Object.entries(values) as [value, label]}
				<Select.Item
					{value}
					let:isSelected
					class="flex gap:8 ai:center jc:start py:8 px:12 r:12 cursor:pointer color:neutral font:medium color:primary:hover bg:base-300:hover"
				>
					{#if details && details[value]}
						{@render indicator(details[value].indicator ?? null)}
					{/if}

					<span>
						{label}
					</span>

					{#if isSelected}
						<Check size={16} class="ml:auto" />
					{/if}
				</Select.Item>
			{/each}
		</Select.Content>
	</Select.Root>
</Control>
