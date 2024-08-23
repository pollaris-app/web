import type { SelectProps } from 'bits-ui';
import Root from './select.svelte';
import type { IconProps } from '$components/icon';

type Details = Record<string, { indicator?: IconProps }>;

type Props<T extends string | number, M extends boolean> = SelectProps<T, M> & {
	data: T[];
	values: Record<T, string>;
	details?: Details;
	placeholder?: string;
	multiple?: M;
};

export { Root as Select, type Props as SelectProps };
