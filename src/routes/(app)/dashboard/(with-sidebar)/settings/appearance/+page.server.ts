import { fail, message, superValidate } from 'sveltekit-superforms';
import { valibot, zod } from 'sveltekit-superforms/adapters';
import { appearanceSchema } from '$lib/zod/schemas';

import type { LayoutServerLoad } from '../../$types';

export const load: LayoutServerLoad = async () => {
	return {
		form: await superValidate(valibot(appearanceSchema))
	};
};

export const actions = {
	default: async ({ request }: { request: Request }) => {
		const form = await superValidate(request, valibot(appearanceSchema), { errors: true });

		if (!form.valid) {
			return fail(400, { form });
		}

		return message(form, 'Form posted succesfully!');
	}
};
