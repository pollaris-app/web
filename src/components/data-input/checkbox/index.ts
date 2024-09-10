import type { CheckboxProps } from 'bits-ui';
import Root from './checkbox.svelte';

type CheckboxCheckState = boolean | 'indeterminate';

type Props = CheckboxProps & {
	checked: boolean;
	label?: string;
	description?: string;
};

export { Root as Checkbox, type Props as CheckboxProps, type CheckboxCheckState };
