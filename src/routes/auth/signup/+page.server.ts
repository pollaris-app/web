import { fail, message, setError, superValidate, type ErrorStatus } from 'sveltekit-superforms';
import type { PageServerLoad } from './$types';
import { valibot, zod } from 'sveltekit-superforms/adapters';
import { signUpSchema } from '$lib/zod/schemas/auth/signup';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(valibot(signUpSchema))
	};
};

export const actions = {
	default: async ({ request }: { request: Request }) => {
		const form = await superValidate(request, valibot(signUpSchema));

		if (!form.valid) {
			return fail(400, { form });
		}

		const emailAvailabilityCheck = await fetch(
			`http://localhost:3000/api/v1/users/${form.data.email}`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);

		const response = await emailAvailabilityCheck.json().then((e) => e);

		if (!emailAvailabilityCheck.ok) {
			setError(form, 'email', response.message);

			return message(form, response, {
				status: emailAvailabilityCheck.status as ErrorStatus
			});
		}

		return message(form, response);
	}
};
