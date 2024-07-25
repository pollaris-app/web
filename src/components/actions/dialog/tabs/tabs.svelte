<script lang='ts'>
  import { Tabs } from "bits-ui";
	import type { DialogTabsProps } from ".";
	import { cn } from "@kurasu/variants";
	import { Check } from "lucide-svelte";

  let { children, triggers, active = $bindable(triggers[0].value),  ...props }: DialogTabsProps = $props()
</script>

<Tabs.Root bind:value={active} {...props} class='flex flex:col gap:24'>
  <Tabs.List class='flex gap:16'>
    {#each triggers as trigger}
      <Tabs.Trigger value={trigger.value} class={cn(
        'rel flex flex:1 flex:col ai:start jc:start text-align:start gap:8 b:base-300|solid|1 r:16 p:16 cursor:pointer',
        {
          'outline:2|solid|base-400 bg:base-300': active === trigger.value
        }
      )}>
        <h3 class="font:20 font:bold">{trigger.label}</h3>
        {#if trigger.description}
          <p class="color:neutral w:75%">{trigger.description}</p>
        {/if}

        <span
          class={cn(
            'abs flex ai:center jc:center color:base-400 top:16 right:16 w:24 h:24 r:full b:base-300|solid|1',
            {
              'b:base-400 bg:white': active === trigger.value
            }
          )}
        >
          {#if active === trigger.value}
            <Check size={16} strokeWidth={3} />
          {/if}
        </span>
      </Tabs.Trigger >
    {/each}
  </Tabs.List>

  <Tabs.Content value={active ?? triggers[0].value}>
    {@render children()}
  </Tabs.Content>
</Tabs.Root>