import * as v from 'valibot';

const EmailSchema = v.pipe(
	v.string(),
	v.nonEmpty('Please enter your email.'),
	v.email('The email is badly formatted.'),
	v.maxLength(30, 'Your email is too long.')
);

const PasswordSchema = v.pipe(
	v.string(),
	v.minLength(8, 'Password must be at least 8 characters long.'),
	v.maxLength(64, 'Password must be at most 64 characters long.')
);

export const signUpSchema = v.pipe(
	v.object({
		email: EmailSchema,
		password: PasswordSchema,
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
