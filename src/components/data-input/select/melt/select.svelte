<script lang="ts" generics="T extends string, M extends boolean">
	import { melt, createSelect, type CreateSelectProps } from '@melt-ui/svelte';
	import { Control, Label } from 'formsnap';
	import type { SelectProps } from '.';
	import { Separator } from '$components/layout/separator';
	import { writable, type Writable } from 'svelte/store';

	let { value = $bindable(), options, multiple }: SelectProps<T, M> = $props();

	const {
		elements: { trigger, menu, option, group, groupLabel, label, hiddenInput },
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

	$effect(() => {
		if ($selected) {
			if (multiple) {
				value = $selected.map(({ value }) => value);
			} else {
				value = $selected.value;
			}
		}
	});
</script>

<Control let:attrs>
	<Label>test</Label>

	<button
		use:melt={$trigger}
		class="flex ai:center jc:space-between w:256 font:18 py:8 px:12 b:2|solid|base-400 r:16 h:48 color:neutral"
	>
		{$selectedLabel || 'Select'}
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

					{#each values as { value, label, disabled }}
						<button
							use:melt={$option({ value, label, disabled })}
							class="w:100% flex gap:8 ai:center jc:start py:8 px:12 r:12 cursor:pointer color:neutral font:medium color:primary:hover bg:base-300:hover"
						>
							{#if $isSelected(value)}
								<span>✓</span>
							{/if}

							{label}
						</button>
					{/each}
				</div>
			{/each}
		</div>
	{/if}
</Control>
