import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import type { LayoutServerLoad } from '../../$types';
import { testSchema } from '$lib/zod/schemas';

export const load: LayoutServerLoad = async () => {
	return {
		form: await superValidate(zod(testSchema))
	};
};
