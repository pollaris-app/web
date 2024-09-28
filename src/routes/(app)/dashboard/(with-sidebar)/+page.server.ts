import { CreateNewDialogSchema } from '$lib/validation/schemas';
import { redirect } from '@sveltejs/kit';
import { fail, superValidate } from 'sveltekit-superforms';
import { valibot } from 'sveltekit-superforms/adapters';

export const actions = {
	default: async ({ request }: { request: Request }) => {
		const form = await superValidate(request, valibot(CreateNewDialogSchema));

		if (!form.valid) {
			return fail(400, { form });
		}

		const id = 'test';

		throw redirect(303, `/new/${form.data.type}/${id}`);
	}
};
