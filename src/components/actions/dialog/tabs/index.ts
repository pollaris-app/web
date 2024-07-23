import Root from './tabs.svelte'
import type { Snippet } from 'svelte'
import type { TabsProps } from 'bits-ui'

type Trigger = {
  name: string,
  value: string
}

type Props = TabsProps & {
  children: Snippet;
  triggers: Trigger[]
}

export {
  Root as DialogTabs,
  type Trigger as DialogTabsTrigger,
  type Props as DialogTabsProps
}