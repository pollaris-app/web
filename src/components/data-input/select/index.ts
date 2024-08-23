import Root from './select.svelte';

import type { IconProps } from '$components/icon';
import type { Selected, SelectProps } from 'bits-ui';
import type { Accent } from '$lib/utils/constants/settings';

type Item<T> = {
	value: T;
	label: string;
};

type Details = Record<Accent, { indicator?: IconProps }>;

type Props<T extends Accent, M extends boolean> = SelectProps<T, M> & {
	data: string[];
	items: Selected<T>[];
	details: Details;
	placeholder: string;
	multiple?: M;
	class?: string;
};

export { Root as Select, type Props as SelectProps, type Item as SelectItem };
