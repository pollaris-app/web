import { passwordResetRequestSchema } from '$lib/zod/schemas/auth/password-reset';
import { superValidate } from 'sveltekit-superforms';
import { valibot } from 'sveltekit-superforms/adapters';
import type { PageServerLoad } from './$types.js';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(valibot(passwordResetRequestSchema))
	};
};

export const actions = {
	default: () => {
		console.log('default');
	}
};
