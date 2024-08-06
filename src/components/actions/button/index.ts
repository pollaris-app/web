import Root from './button.svelte';
import { Variants, type VariantsType } from '@kurasu/variants';
import type { Snippet } from 'svelte';
import type { Icon } from 'lucide-svelte';
import type { ButtonProps } from 'bits-ui';

const variants = new Variants({
	base: 'flex ai:center gap:8 b:2 b:solid cursor:pointer font:semibold',
	variants: {
		variant: {
			default: 'b:transparent',
			outline: '',
			ghost: 'bg:transparent b:transparent'
		},
		color: {
			primary: 'color:primary-foreground',
			secondary: '',
			accent: '',
			success: '',
			warning: '',
			error: '',
			info: '',
			neutral: ''
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
				return `b:${color} color:${color}! bg:transparent bg:${color}/.10:hover`;
			}

			return `bg:${color} bg:${color}/.75:hover color:${color}-foreground`;
		}
	]
});

type Variant = keyof VariantsType<typeof variants.getVariants>['variant'];
type Color = keyof VariantsType<typeof variants.getVariants>['color'];
type Size = keyof VariantsType<typeof variants.getVariants>['size'];
type Roundness = keyof VariantsType<typeof variants.getVariants>['roundness'];

type Props = ButtonProps & {
	children: Snippet;
	icon?: typeof Icon;
	variant?: Variant;
	color?: Color;
	size?: Size;
	roundness?: Roundness;
	class?: string;
};

export { Root as Button, variants as buttonVariants, type Props as ButtonProps };
