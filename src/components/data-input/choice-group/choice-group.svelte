<script lang="ts">
	import { cn } from "@kurasu/variants";
  import { RadioGroup } from "bits-ui";
	import type { ChoiceGroupProps } from ".";
	import { Check } from "lucide-svelte";

  let { choices, value = $bindable(choices[0].value), ...props }: ChoiceGroupProps = $props()
</script>
 
<RadioGroup.Root bind:value={value} class="flex gap:16 ai:start jc:start" {...props}>
  {#each choices as choice}
    <RadioGroup.Item
      value={choice.value}
      class={cn(
        'rel flex flex:1 flex:col ai:start jc:start text-align:start gap:8 b:base-300|solid|1 r:16 p:16 cursor:pointer',
        {
          'outline-offset:2 bg:base-300': value === choice.value
        }
      )}
    >
      <h3 class="font:20 font:bold">{choice.label}</h3>
      {#if choice.description}
        <p class="color:neutral w:75%">{choice.description}</p>
      {/if}

      <RadioGroup.ItemIndicator
        class={cn(
          'abs flex ai:center jc:center color:base-400 top:16 right:16 w:24 h:24 r:full b:base-300|solid|1',
          {
            'b:white bg:white': value === choice.value
          }
        )}
      >
        {#if value === choice.value}
          <Check size={16} strokeWidth={3} />
        {/if}
      </RadioGroup.ItemIndicator>
    </RadioGroup.Item >
  {/each}
</RadioGroup.Root>