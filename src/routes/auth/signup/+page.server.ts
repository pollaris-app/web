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
			console.log('ajaja');
			return fail(400, { form });
		}

		const signUp = await fetch('http://localhost:3000/api/v1/auth/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: form.data.email,
				password: form.data.password
			})
		});

		const response = await signUp.json().then((e) => e);

		if (!signUp.ok) {
			setError(form, 'email', response.message);

			return message(form, response, {
				status: signUp.status as ErrorStatus
			});
		}

		return message(form, response);
	}
};
