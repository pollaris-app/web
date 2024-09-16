import type { ButtonProps } from '$components/actions/button';
import Root from './popouter.svelte';

type Action = {
	label: string;
	handler: () => void;
	button?: Partial<ButtonProps>;
};

interface Data {
	title: string;
	description: string;
	status: 'success' | 'error' | 'warning' | 'info';
	actions?: Action[];
	onClose?: () => void;
}

export { Root as Popouter, type Data as PopouterData, type Action as PopouterAction };
