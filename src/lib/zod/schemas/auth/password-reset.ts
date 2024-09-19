import * as v from 'valibot';
import { EmailSchema, StrictPasswordSchema } from './common';

export const passwordResetSchema = v.pipe(
	v.object({
		password: StrictPasswordSchema,
		confirmPassword: v.string()
	}),
	v.forward(
		v.partialCheck(
			[['password'], ['confirmPassword']],
			(input) => input.password === input.confirmPassword,
			'Passwords do not match.'
		),
		['confirmPassword']
	)
);

export const passwordResetRequestSchema = v.object({
	email: EmailSchema
});
