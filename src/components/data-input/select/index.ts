import type { Details } from '$lib/utils/types/details';
import Root from './select.svelte';

type OptionLabel = 'default' | string;

type OptionValue = {
	readonly value: string;
	readonly label: string;
	readonly disabled?: boolean;
	readonly details?: Details;
};

type Options = Record<OptionLabel, readonly OptionValue[]>;

interface Props {
	value: string[];
	options: Options;
	multiple?: boolean;
	placeholder?: string;
	label?: string;
	displayErrors?: boolean;
}

export { Root as Select, type Props as SelectProps, type Options as SelectOptions };
