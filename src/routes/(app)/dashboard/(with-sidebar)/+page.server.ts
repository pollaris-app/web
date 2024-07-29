import { createNewDialogSchema } from '$lib/schemas';
import { redirect } from '@sveltejs/kit';
import { fail, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

export const actions = {
	default: async ({ request }: { request: Request }) => {
		const form = await superValidate(request, zod(createNewDialogSchema));

		if (!form.valid) {
			return fail(400, { form });
		}

		throw redirect(303, `/dashboard/new/${form.data.type}`);
	}
};
