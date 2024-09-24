import { Variants, type VariantsType } from '@kurasu/variants';
import Root from './avatar.svelte';

import type { AvatarImageProps, AvatarProps } from 'bits-ui';

const variants = new Variants({
	base: '',
	variants: {
		size: {
			small: 'h:32 w:32',
			medium: 'h:48 w:48',
			large: 'h:64 w:64'
		}
	},
	default: {
		size: 'medium'
	}
});

type Size = keyof VariantsType<typeof variants.getVariants>['size'];

type Props = AvatarProps & {
	image: AvatarImageProps;
	fallback: string;
	size?: Size;
	className?: string;
};

export { Root as Avatar, type Props as AvatarProps, variants as AvatarVariants };
