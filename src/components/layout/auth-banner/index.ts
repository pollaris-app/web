import type { Snippet } from 'svelte';
import Root from './auth-banner.svelte';

interface Props {
	children: Snippet;
	title: string;
	description: string;
	header: {
		question: string;
		action: {
			label: string;
			href: string;
		};
	};
}

export { Root as AuthBanner, type Props as AuthBannerProps };
