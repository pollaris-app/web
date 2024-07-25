import Root from './tabs.svelte'
import type { Snippet } from 'svelte'
import type { TabsProps } from 'bits-ui'

type Trigger = {
  value: string
  label: string,
  description?: string;
}

type Props = TabsProps & {
  children: Snippet;
  triggers: Trigger[]
  active?: string | undefined
}

export {
  Root as DialogTabs,
  type Trigger as DialogTabsTrigger,
  type Props as DialogTabsProps
}