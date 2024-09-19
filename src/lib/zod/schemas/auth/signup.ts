import * as v from 'valibot';
import { EmailSchema, StrictPasswordSchema } from './common';

export const signUpSchema = v.pipe(
	v.object({
		email: EmailSchema,
		password: StrictPasswordSchema,
		confirmPassword: v.string(),
		agreement: v.literal(true as boolean, 'You must agree to the terms and conditions.')
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
