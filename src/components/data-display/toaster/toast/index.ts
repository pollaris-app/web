import type { Toast, ToastsElements } from '@melt-ui/svelte';
import Root from './toast.svelte';
import type { ToastData } from '../toaster.svelte';

interface Props {
	elements: ToastsElements;
	toast: Toast<ToastData>;
}

export { Root as Toast, type Props as ToastProps };
