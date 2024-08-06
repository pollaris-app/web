import Root from './avatar.svelte';

import type { AvatarImageProps, AvatarProps, Builder } from 'bits-ui';

type Props = AvatarProps & {
	image: AvatarImageProps;
	fallback: string;
	className?: string;
};

export { Root as Avatar, type Props as AvatarProps };
