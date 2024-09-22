import { passwordResetRequestSchema } from '$lib/zod/schemas/auth/password-reset';
import { fail, message, superValidate } from 'sveltekit-superforms';
import { valibot } from 'sveltekit-superforms/adapters';
import type { PageServerLoad } from './$types.js';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(valibot(passwordResetRequestSchema))
	};
};

export const actions = {
	default: async ({ request }: { request: Request }) => {
		const form = await superValidate(request, valibot(passwordResetRequestSchema));

		if (!form.valid) {
			return fail(400, { form });
		}

		const passwordResetRequest = await fetch(`http://localhost:3000/api/v1/auth/password-reset`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: form.data.email
			})
		});

		const response = await passwordResetRequest.json().then((e) => e);

		if (!passwordResetRequest.ok) {
			return fail(400, { form, message: response.message });
		}

		return message(form, response);
	}
};
