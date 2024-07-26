import type { RadioGroupProps } from 'bits-ui';
import Root from './choice-group.svelte'

type Choice = {
  value: string;
  label: string;
  description?: string;
}

type Props = RadioGroupProps &  {
  choices: Choice[],
  value: string
}

export {
  Root as ChoiceGroup,
  type Props as ChoiceGroupProps
}