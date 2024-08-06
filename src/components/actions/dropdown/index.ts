import Root from './dropdown.svelte';
import { Item } from './elements';

import type { Snippet } from 'svelte';
import type { Builder, DropdownMenuProps } from 'bits-ui';

type Props = DropdownMenuProps & {
	children: Snippet;
	trigger: Snippet<[{ builder: Builder }]>;
	class?: string;
};

export { Root, Item, type Props as DropdownProps };
