import type { Snippet } from 'svelte';
import Root from './dialog.svelte';
import type { AnyMeltElement } from '@melt-ui/svelte';
import type { Builder, DialogProps } from 'bits-ui';

type Props = DialogProps & {
	children: Snippet;
	trigger: Snippet<[{ builder: Builder }]>;
	status?: 'success' | 'warning' | 'error' | 'info';
	openState?: boolean
	title: string;
	description?: string;
	alertBeforeClose?: boolean;
	class?: string;
}

export { Root as Dialog, type Props as DialogProps };
