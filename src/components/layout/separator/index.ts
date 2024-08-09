import { Variants } from '@kurasu/variants';
import Root from './separator.svelte';

import type { SeparatorProps } from 'bits-ui';

const variants = new Variants({
	base: 'bg:base-400',
	variants: {
		orientation: {
			horizontal: 'w:100% h:1',
			vertical: 'w:1 h:100%'
		}
	},
	default: {
		orientation: 'horizontal'
	}
});

type Props = SeparatorProps & {
	class?: string;
};

export { Root as Separator, variants as separatorVariants, type Props as SeparatorProps };
