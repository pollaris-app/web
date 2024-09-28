import { CreateNewDialogSchema } from '$lib/validation/schemas';
import { superValidate } from 'sveltekit-superforms';
import { valibot } from 'sveltekit-superforms/adapters';
import type { LayoutServerLoad } from '../$types';

export const load: LayoutServerLoad = async () => {
	return {
		form: await superValidate(valibot(CreateNewDialogSchema))
	};
};
