import type { PinInputProps } from 'bits-ui';
import Root from './pin-input.svelte';

interface Props extends PinInputProps {
	data: string;
	quantity: number;
}

export { Root as PinInput, type Props as PinInputProps };
