import Root from './choice-group.svelte'

type Choice = {
  value: string;
  label: string;
  description?: string;
}

interface Props {
  choices: Choice[],
  value: string
}

export {
  Root as ChoiceGroup,
  type Props as ChoiceGroupProps
}