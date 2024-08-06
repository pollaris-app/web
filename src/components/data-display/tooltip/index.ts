import Root from './tooltip.svelte';

import type { Snippet } from 'svelte';
import type { Builder, TooltipContentProps, TooltipProps } from 'bits-ui';

type Props = TooltipProps & {
	trigger: Snippet<[{ builder: Builder }]>;
	children: Snippet;
	content?: TooltipContentProps;
};

export { Root as Tooltip, type Props as TooltipProps };
