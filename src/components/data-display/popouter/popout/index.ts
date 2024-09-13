import type { Toast, ToastsElements } from '@melt-ui/svelte';
import Root from './popout.svelte';
import type { PopouterData } from '..';

interface Props {
	elements: ToastsElements;
	popout: Toast<PopouterData>;
}

export { Root as Popout, type Props as PopoutProps };
