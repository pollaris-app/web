<script lang="ts">
	import { melt, createSelect, type CreateSelectProps } from '@melt-ui/svelte';
	import { Control, FieldErrors, Label } from 'formsnap';

	import { Separator } from '$components/layout/separator';
	import { Check } from 'lucide-svelte';
	import { Icon, type IconProps } from '$components/icon';
	import type { SelectProps } from '.';

	let {
		value = $bindable(['']),
		options,
		multiple,
		placeholder,
		label,
		displayErrors
	}: SelectProps = $props();

	const {
		elements: { trigger, menu, option, group, groupLabel, label: inputLabel, hiddenInput },
		states: { selectedLabel, open, selected },
		helpers: { isSelected }
	} = createSelect({
		forceVisible: true,
		positioning: {
			placement: 'bottom',
			fitViewport: true,
			sameWidth: true
		},
		multiple
	});

	function isMultiple<T>(selected: T | T[]): selected is T[] {
		return Array.isArray(selected);
	}

	const flatOptions = $derived(Object.values(options).flat());

	$effect(() => {
		if ($selected) {
			if (isMultiple($selected)) {
				value = $selected.map((item) => item.value) as string[];
			} else {
				value = [$selected.value] as string[];
			}
		} else {
			value = [] as string[];
		}
	});
</script>

{#snippet indicator(props: IconProps | null)}
	{#if props}
		<Icon {...props} />
	{/if}
{/snippet}

<Control let:attrs>
	{#if label}
		<label for={attrs.name} use:melt={$inputLabel}>{label}</label>
	{/if}

	{#each flatOptions as option}
		{@const disabled = option.disabled === true ? option.disabled : !value.includes(option.value)}

		<input name={attrs.name} value={option.value} {disabled} hidden />
	{/each}

	<button
		{...attrs}
		use:melt={$trigger}
		class="flex ai:center jc:space-between w:256 font:18 py:8 px:12 b:2|solid|base-400 r:16 h:48 color:neutral"
	>
		{$selectedLabel || placeholder || 'Select an option'}
	</button>

	{#if $open}
		<div
			use:melt={$menu}
			class="flex flex:col gap:4 w:100% mt:8 p:4 max-w:256 r:16 outline:2|solid|base-400 bg:base-200"
		>
			{#each Object.entries(options) as [value, values], index}
				<div use:melt={$group} class="flex flex:col gap:8">
					{#if value !== 'default'}
						{#if index !== 0}
							<Separator class="ml:-2 w:calc(100%+8px)!" />
						{/if}

						<span use:melt={$groupLabel(value)} class="fg:primary f:18 f:bold px:12 capitalize">
							{value}
						</span>
					{/if}

					{#each values as { value, label, disabled, details }}
						<button
							use:melt={$option({ value, label, disabled })}
							class="w:100% flex gap:8 ai:center jc:start py:8 px:12 r:12 cursor:pointer color:neutral font:medium color:primary:hover bg:base-300:hover"
							{...attrs}
						>
							{#if details && details.indicator}
								{@render indicator(details.indicator ?? null)}
							{/if}

							<span>
								{label}
							</span>

							{#if $isSelected(value)}
								<Check size={16} class="ml:auto" />
							{/if}
						</button>
					{/each}
				</div>
			{/each}
		</div>
	{/if}
</Control>

{#if displayErrors}
	<FieldErrors class="fg:error mt:4" />
{/if}
