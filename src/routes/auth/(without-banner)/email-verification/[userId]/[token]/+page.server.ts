import {
	emailVerificationSchema,
	resendEmailVerificationSchema
} from '$lib/zod/schemas/auth/email-verification';
import type { Actions } from '@sveltejs/kit';
import { fail, message, setError, superValidate, type ErrorStatus } from 'sveltekit-superforms';
import { valibot } from 'sveltekit-superforms/adapters';

export const load = async () => {
	const activateForm = await superValidate(valibot(emailVerificationSchema));
	const resendForm = await superValidate(valibot(resendEmailVerificationSchema));

	return {
		activateForm,
		resendForm
	};
};

export const actions = {
	activate: async ({ request }: { request: Request }) => {
		const form = await superValidate(request, valibot(emailVerificationSchema));

		if (!form.valid) {
			return fail(400, { form });
		}

		const emailVerification = await fetch(
			`http://localhost:3000/api/v1/auth/email-verification/${form.data.token}`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					code: form.data.code
				})
			}
		);

		const response = await emailVerification.json().then((e) => e);

		if (!emailVerification.ok) {
			setError(form, response.message);

			return message(form, response, {
				status: emailVerification.status as ErrorStatus
			});
		}

		return message(form, response);
	},
	resend: async ({ request }: { request: Request }) => {
		const form = await superValidate(request, valibot(resendEmailVerificationSchema));

		if (!form.valid) {
			return fail(400, { form });
		}

		const resendEmailVerification = await fetch(
			`http://localhost:3000/api/v1/auth/email-verification`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					userId: form.data.userId
				})
			}
		);

		const response = await resendEmailVerification.json().then((e) => e);

		if (!resendEmailVerification.ok) {
			setError(form, response.message);

			return message(form, response, {
				status: resendEmailVerification.status as ErrorStatus
			});
		}

		return message(form, response);
	}
} satisfies Actions;
