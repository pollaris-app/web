<script lang='ts'>
  import { Tabs } from "bits-ui";
	import type { DialogTabsProps } from ".";

  let { children, triggers, ...props }: DialogTabsProps = $props()

  let activeTab = $state<string | undefined>('')
</script>

<Tabs.Root onValueChange={(value) => {
  activeTab = value
}} {...props}>
  <Tabs.List>
    {#each triggers as trigger}
      <Tabs.Trigger value={trigger.value} >
        { trigger.name }
      </Tabs.Trigger >
    {/each}
  </Tabs.List>

  <Tabs.Content value={activeTab ?? triggers[0].value}>
    {@render children()}
  </Tabs.Content>
</Tabs.Root>