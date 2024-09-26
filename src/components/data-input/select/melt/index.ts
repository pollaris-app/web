import Root from './select.svelte';

type OptionLabel = 'default' | string;

type Option<T extends string> = {
	value: T;
	label: string;
	disabled?: boolean;
};

type Options<T extends string> = {
	[key: string]: Option<T>[];
};

export interface Props<T extends string, M extends boolean> {
	multiple?: M;
	options: Options<T>;
	value: T[];
}

export {
	Root as Select,
	type Props as SelectProps,
	type Option as SelectOption,
	type Options as SelectOptions,
	type OptionLabel as SelectOptionLabel
};
