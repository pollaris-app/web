<script lang="ts" generics="T extends Choice[]">
	import { RadioGroup } from 'bits-ui';
	import { imageRadioGroupIndicatorVariants, type ImageRadioGroupProps } from '.';
	import { Control, Description, Label } from 'formsnap';
	import { Check } from 'lucide-svelte';
	import { cn } from '@kurasu/variants';
	import { type Choice } from '$lib/utils/types/choices';

	let { value = $bindable(), choices, indicator, ...props }: ImageRadioGroupProps<T> = $props();
</script>

<RadioGroup.Root bind:value {...props} class="flex gap:16 ai:start ">
	{#each choices as choice}
		<Control let:attrs>
			<!-- Hidden Input for form handling -->
			<RadioGroup.Input {...attrs} />

			<!-- Visible Input -->
			<RadioGroup.Item
				value={choice.value}
				class="rel flex flex:1 flex:col gap:8 cursor:pointer min-w:96 max-w:224"
			>
				<img
					alt={choice.image.alt}
					src={choice.image.src}
					class={cn('r:16 max-h:128 w:100% obj:cover video', {
						['outline:2|solid|primary outline-offset:2']: value === choice.value
					})}
				/>

				<div class="flex flex:col ai:start">
					<Label class="color:primary f:24 f:semibold ls:0.5 cursor:pointer">{choice.label}</Label>

					{#if choice.description}
						<Description class="color:neutral text:start">{choice.description}</Description>
					{/if}
				</div>

				{#if value === choice.value}
					<RadioGroup.ItemIndicator
						{...attrs}
						{...indicator}
						class={cn(
							imageRadioGroupIndicatorVariants.forgeClasses({ position: indicator?.position }),
							indicator?.class
						)}
					>
						<Check size={16} strokeWidth={3} />
					</RadioGroup.ItemIndicator>
				{/if}
			</RadioGroup.Item>
		</Control>
	{/each}
</RadioGroup.Root>
