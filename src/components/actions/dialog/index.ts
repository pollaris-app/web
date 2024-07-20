import type { Snippet } from 'svelte';
import Root from './dialog.svelte';
import type { AnyMeltElement } from '@melt-ui/svelte';

interface Props {
	children?: Snippet;
	triggerContent: Snippet;
	class?: string;
}

export { Root as Dialog, type Props as DialogProps };
