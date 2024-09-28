import * as v from 'valibot';
import { EmailSchema, PasswordSchema } from './common';

export const SignInSchema = v.object({
	email: EmailSchema,
	password: PasswordSchema,
	remember: v.boolean()
});
