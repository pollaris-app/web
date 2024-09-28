import { passwordResetSchema } from '$lib/validation/schemas/auth/password-reset';
import { valibot } from 'sveltekit-superforms/adapters';
import { fail, message, superValidate } from 'sveltekit-superforms';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(valibot(passwordResetSchema))
	};
};

export const actions = {
	default: async ({ request }: { request: Request }) => {
		const form = await superValidate(request, valibot(passwordResetSchema));

		if (!form.valid) {
			return fail(400, { form });
		}

		console.log(form.data);

		const passwordReset = await fetch(
			`http://localhost:3000/api/v1/auth/password-reset/${form.data.userId}/${form.data.token}`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					password: form.data.password
				})
			}
		);

		const response = await passwordReset.json().then((e) => e);

		if (!passwordReset.ok) {
			return fail(400, { form, message: response.message });
		}

		return message(form, response);
	}
};
