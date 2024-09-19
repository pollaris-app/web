import * as v from 'valibot';
import { EmailSchema, PasswordSchema } from './common';

export const signInSchema = v.object({
	email: EmailSchema,
	password: PasswordSchema,
	remember: v.boolean()
});
