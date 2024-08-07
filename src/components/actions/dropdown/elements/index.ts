import {
	DropdownMenu,
	type Builder,
	type DropdownMenuGroupProps,
	type DropdownMenuItemProps,
	type DropdownMenuSeparatorProps
} from 'bits-ui';
import Item from './item.svelte';
import Separator from './separator.svelte';
import Group from './group.svelte';

import type { Snippet } from 'svelte';

type DropdownItemProps = DropdownMenuItemProps & {
	children: Snippet;
	class?: string;
};

type DropdownGroupProps = DropdownMenuGroupProps & {
	children: Snippet;
	class?: string;
};

type DropdownSeparatorProps = DropdownMenuSeparatorProps & {
	class?: string;
};

export {
	Item,
	Group,
	Separator,
	type DropdownItemProps,
	type DropdownGroupProps,
	type DropdownSeparatorProps
};
