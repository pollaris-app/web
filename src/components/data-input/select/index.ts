import Root from './select.svelte';
import type { Selected, SelectProps } from 'bits-ui';

type Props<T, M extends boolean> = SelectProps<T, M> & {
	data: string[];
	items: Selected<T>[];
	placeholder: string;
	multiple?: M;
	class?: string;
};

export { Root as Select, type Props as SelectProps };
