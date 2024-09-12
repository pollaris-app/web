import type { HTMLInputAttributes } from 'svelte/elements';
import Root from './password-input.svelte';

interface Props extends HTMLInputAttributes {
	data: string;
	scoreBar?: boolean;
	placeholder?: string;
	label?: string;
	description?: string;
	unlocked?: boolean;
}

export { Root as PasswordInput, type Props as PasswordInputProps };
