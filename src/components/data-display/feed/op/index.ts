import Root from './op.svelte';

interface Props {
	user: {
		username: string;
		displayName: string;
		avatar: {
			src: string;
		};
	};
	date: string;
}

export { Root as Op, type Props as OpProps };
