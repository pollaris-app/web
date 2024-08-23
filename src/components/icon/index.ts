import Root from './icon.svelte';
import { Squircle } from './icons';

import type { IconProps } from 'lucide-svelte';

const ICONS = [
	{
		name: 'squircle',
		component: Squircle
	}
] as const;

type IconName = (typeof ICONS)[number]['name'];

interface Props extends IconProps {
	name: 'squircle';
}

export { Root as Icon, ICONS, type Props as IconProps, type IconName };
