import type { Snippet } from 'svelte';
import Root from './dialog.svelte';
import type { AnyMeltElement } from '@melt-ui/svelte';
import type { Builder } from 'bits-ui';

interface Props {
	children?: Snippet;
	trigger: Snippet<[{ builder: Builder }]>;
	status?: 'success' | 'warning' | 'error' | 'info';
	title: string;
	description?: string;
	class?: string;
}

export { Root as Dialog, type Props as DialogProps };
