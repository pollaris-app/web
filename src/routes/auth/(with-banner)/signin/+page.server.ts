import { signInSchema } from '$lib/zod/schemas/auth/signin';
import { fail, message, setError, superValidate, type ErrorStatus } from 'sveltekit-superforms';
import { valibot } from 'sveltekit-superforms/adapters';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(valibot(signInSchema))
	};
};

export const actions = {
	default: async ({ request }: { request: Request }) => {
		const form = await superValidate(request, valibot(signInSchema));

		if (!form.valid) {
			return fail(400, { form });
		}

		const signIn = await fetch('http://localhost:3000/api/v1/auth/signin', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: form.data.email,
				password: form.data.password
			})
		});

		const response = await signIn.json().then((e) => e);

		if (!signIn.ok) {
			setError(form, 'email', response.message);

			return message(form, response, {
				status: signIn.status as ErrorStatus
			});
		}

		return message(form, response);
	}
};
