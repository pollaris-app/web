import Root from './logo.svelte';
import { Variants, type VariantsType } from '@kurasu/variants';

const variants = new Variants({
	base: 'flex align-items:center gap-x:8 font:20 text:uppercase font:bold text-strong color:primary color:primary-hover:hover cursor:pointer',
	variants: {
		variant: {
			full: '',
			icon: ''
		}
	},
	default: {
		variant: 'full'
	}
});

type Variant = keyof VariantsType<typeof variants.getVariants>['variant'];

interface Props {
	variant?: Variant;
	class?: string;
}

export { Root as Logo, variants as logoVariants, type Props as LogoProps };
