import Root from './image-radio-group.svelte';
import { Variants, type VariantsType } from '@kurasu/variants';
import { type Choice } from '$lib/utils/constants/settings';
import type { RadioGroupProps } from 'bits-ui';

const indicatorVariants = new Variants({
	base: 'flex ai:center jc:center w:24 h:24 bg:primary fg:secondary b:1|solid|base-300/.15 r:100% abs',
	variants: {
		position: {
			'top-left': 'top:8 left:8',
			'top-right': 'top:-8 right:-8',
			'bottom-left': 'bottom:8 left:8',
			'bottom-right': 'bottom:8 right:8'
		}
	},
	default: {
		position: 'top-right'
	}
});

type IndicatorPosition = keyof VariantsType<typeof indicatorVariants.getVariants>['position'];

// type ChoiceValue<T extends Choice<string>[]> = T[number]['value'];

type Props<T extends Choice[]> = RadioGroupProps & {
	choices: T;
	value: T[number]['value'];
	indicator?: {
		class?: string;
		position?: IndicatorPosition;
	};
};

export {
	Root as ImageRadioGroup,
	indicatorVariants as imageRadioGroupIndicatorVariants,
	type Props as ImageRadioGroupProps
};
