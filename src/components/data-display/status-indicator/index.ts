import { Variants, type VariantsType } from '@kurasu/variants';
import Root from './status-indicator.svelte';

const variants = new Variants({
	base: 'flex jc:center ai:center r:full',
	variants: {
		status: {
			success: '',
			error: '',
			warning: '',
			info: ''
		},
		size: {
			small: 'w:32 h:32',
			medium: 'w:40 h:40',
			large: 'w:48 h:48'
		}
	},
	default: {
		status: 'info',
		size: 'medium'
	},
	compoundVariants: [
		({ status }) => {
			return `bg:${status}/.15 color:${status}`;
		}
	]
});

type Status = keyof VariantsType<typeof variants.getVariants>['status'];
type Size = keyof VariantsType<typeof variants.getVariants>['size'];

interface Props {
	status: Status;
	size?: Size;
	class?: string;
}

export {
	Root as StatusIndicator,
	type Props as StatusIndicatorProps,
	type Status as StatusIndicatorStatus,
	variants as StatusIndicatorVariants
};
