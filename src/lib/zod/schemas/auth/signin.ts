import * as v from 'valibot';

const EmailSchema = v.pipe(
	v.string(),
	v.nonEmpty('Please enter your email.'),
	v.email('The email is badly formatted.')
);

const PasswordSchema = v.pipe(v.string(), v.nonEmpty('Please enter your password.'));

export const signInSchema = v.object({
	email: EmailSchema,
	password: PasswordSchema,
	remember: v.boolean()
});
