import {
	emailVerificationSchema,
	resendEmailVerificationSchema
} from '$lib/zod/schemas/auth/email-verification';
import { error, redirect, type Actions } from '@sveltejs/kit';
import { fail, message, setError, superValidate, type ErrorStatus } from 'sveltekit-superforms';
import { valibot } from 'sveltekit-superforms/adapters';

export const load = async ({ params }) => {
	const user = await fetch(`http://localhost:3000/api/v1/users/id/${params.userId}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	});

	const userResponse = await user.json().then((e) => e);

	if (!user.ok) {
		throw error(user.status, userResponse.message);
	}

	if (userResponse.data.email_verified) {
		throw error(400, 'Email already verified');
	}

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

		redirect(300, `/auth/email-verification/${response?.data.userId}/${response?.data.token}`);
	}
} satisfies Actions;
