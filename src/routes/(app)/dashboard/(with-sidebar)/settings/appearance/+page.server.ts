import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import type { LayoutServerLoad } from '../../$types';
import { appearanceSchema } from '$lib/zod/schemas';

export const load: LayoutServerLoad = async () => {
	return {
		form: await superValidate(zod(appearanceSchema))
	};
};
