import type { Snippet } from 'svelte';
import Root from './error-card.svelte';

interface Props {
	title: string;
	description: string;
	children?: Snippet;
}

export { Root as ErrorCard, type Props as ErrorCardProps };
