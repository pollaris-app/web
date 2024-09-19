import { passwordResetSchema } from '$lib/zod/schemas/auth/password-reset';
import { valibot } from 'sveltekit-superforms/adapters';
import { superValidate } from 'sveltekit-superforms';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(valibot(passwordResetSchema))
	};
};

export const actions = {
	default: () => {
		console.log('default');
	}
};
