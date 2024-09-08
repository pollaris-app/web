import type { HTMLInputAttributes } from 'svelte/elements';
import Root from './text-input.svelte';

type TextInputType = 'text';

type Props = HTMLInputAttributes & {
	data: string;
	placeholder?: string;
	label?: string;
	description?: string;
	type?: TextInputType;
};

export { Root as TextInput, type Props as TextInputProps };
