import Root from './select.svelte';

import type { IconProps } from '$components/icon';
import type { SelectProps } from 'bits-ui';

type Item<T> = {
	value: T;
	label: string;
	indicator?: IconProps;
};

type Props<T, M extends boolean> = SelectProps<T, M> & {
	data: string[];
	items: Item<T>[];
	placeholder: string;
	multiple?: M;
	class?: string;
};

export { Root as Select, type Props as SelectProps, type Item as SelectItem };
