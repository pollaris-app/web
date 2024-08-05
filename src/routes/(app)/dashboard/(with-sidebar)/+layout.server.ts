import { createNewDialogSchema } from '$lib/zod/schemas';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import type { LayoutServerLoad } from '../$types';

export const load: LayoutServerLoad = async () => {
	return {
		form: await superValidate(zod(createNewDialogSchema))
	};
};
