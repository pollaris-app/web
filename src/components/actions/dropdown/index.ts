import Root from './dropdown.svelte';
import { Item, Group, Separator } from './elements';

import type { Snippet } from 'svelte';
import type { Builder, DropdownMenuProps } from 'bits-ui';

type Props = DropdownMenuProps & {
	children: Snippet;
	trigger: Snippet<[{ builder: Builder }]>;
	class?: string;
};

export { Root, Item, Group, Separator, type Props as DropdownProps };
