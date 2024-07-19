import Root from './button.svelte';
import { Variants, type VariantsType } from '@kurasu/variants';
import type { AnyMeltElement } from '@melt-ui/svelte';
import type { Snippet } from 'svelte';
import type { HTMLButtonAttributes } from 'svelte/elements';
import type { Icon } from 'lucide-svelte';

const variants = new Variants({
	base: 'flex ai:center gap:8 b:2 b:solid cursor:pointer font:semibold',
	variants: {
		variant: {
			default: 'b:transparent',
			outline: '',
			ghost: 'bg:transparent b:transparent'
		},
		color: {
			primary: '',
			secondary: '',
			accent: '',
			success: '',
			warning: '',
			error: '',
			info: ''
		},
		size: {
			small: 'p:8',
			medium: 'p:16',
			large: 'p:24'
		},
		roundness: {
			none: '',
			small: 'r:12',
			medium: 'r:16',
			large: 'r:24',
			full: 'r:50%'
		}
	},
	default: {
		variant: 'default',
		color: 'primary',
		size: 'medium',
		roundness: 'medium'
	},
	compoundVariants: [
		({ color, variant }) => {
			if (variant === 'ghost') {
				return `color:${color} bg:transparent bg:${color}/.5:hover`;
			}

			if (variant === 'outline') {
				return `b:${color} color:${color}! bg:transparent`;
			}

			return `bg:${color} bg:${color}/.9:hover`;
		}
	]
});

type Variant = keyof VariantsType<typeof variants.getVariants>['variant'];
type Color = keyof VariantsType<typeof variants.getVariants>['color'];
type Size = keyof VariantsType<typeof variants.getVariants>['size'];
type Roundness = keyof VariantsType<typeof variants.getVariants>['roundness'];

interface Props extends HTMLButtonAttributes {
	children: Snippet;
	element?: AnyMeltElement;
	icon?: typeof Icon;
	variant?: Variant;
	color?: Color;
	size?: Size;
	roundness?: Roundness;
	class?: string;
}

export { Root as Button, variants as buttonVariants, type Props as ButtonProps };
