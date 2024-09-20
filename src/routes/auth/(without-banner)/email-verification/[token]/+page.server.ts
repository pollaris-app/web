import { emailVerificationSchema } from '$lib/zod/schemas/auth/email-verification';
import { fail, superValidate } from 'sveltekit-superforms';
import { valibot } from 'sveltekit-superforms/adapters';

export const load = async () => {
	return {
		form: await superValidate(valibot(emailVerificationSchema))
	};
};

export const actions = {
	default: async ({ request }: { request: Request }) => {
		const form = await superValidate(request, valibot(emailVerificationSchema));

		if (!form.valid) {
			return fail(400, { form });
		}

		console.log(form.data.code);
	}
};
