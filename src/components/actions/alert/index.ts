import type { Snippet } from 'svelte';
import Root from './alert.svelte';
import type { Builder } from 'bits-ui';

interface Props {
	children?: Snippet;
	trigger: Snippet<[{ builder: Builder }]>;
	title: string;
	description?: string;
	onAction?: () => void
	status?: 'success' | 'warning' | 'error' | 'info';
	openState?: boolean
	class?: string;
}

export { Root as Alert, type Props as AlertProps };
