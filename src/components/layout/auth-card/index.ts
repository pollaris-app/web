import type { Snippet } from 'svelte';
import Root from './auth-card.svelte';

interface Props {
	title: string;
	description: string;
	children: Snippet;
	footer?: Snippet;
}

export { Root as AuthCard, type Props as AuthCardProps };
