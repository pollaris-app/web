import Root from './checkbox.svelte';
import { Variants, type VariantsType } from '@kurasu/variants';
import type { HTMLInputAttributes } from 'svelte/elements';

const variants = new Variants({
	base: 'flex ai:center jc:center font:18 b:2|solid|base-400 color:neutral',
	variants: {
		size: {
			sm: 'w:24 h:24 r:6',
			md: 'w:28 h:28 r:8',
			lg: 'w:32 h:32 r:12'
		}
	},
	default: {
		size: 'md'
	}
});

type CheckboxCheckState = boolean | 'indeterminate';

type Size = keyof VariantsType<typeof variants.getVariants>['size'];

type Props = HTMLInputAttributes & {
	checked: boolean;
	label?: string;
	description?: string;
	size?: Size;
	class?: string;
};

const handleIconSize = (size: Size) => {
	switch (size) {
		case 'sm':
			return 16;
		case 'md':
			return 20;
		case 'lg':
			return 24;
		default:
			return 24;
	}
};

export {
	Root as Checkbox,
	type Props as CheckboxProps,
	type CheckboxCheckState,
	type Size as CheckboxSize,
	variants as CheckboxVariants,
	handleIconSize as handleCheckboxIconSize
};
