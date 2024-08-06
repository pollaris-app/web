import type { Builder, DropdownMenuItemProps } from 'bits-ui';
import Item from './item.svelte';
import type { Snippet } from 'svelte';

type DropdownItemProps = DropdownMenuItemProps & {
	children: Snippet<[{ builder: Builder }]>;
};

export { Item, type DropdownItemProps };
