import * as v from 'valibot';

export const EmailSchema = v.pipe(
	v.string(),
	v.nonEmpty('Please enter your email.'),
	v.email('The email is badly formatted.')
);

export const PasswordSchema = v.pipe(v.string(), v.nonEmpty('Please enter your password.'));

export const StrictPasswordSchema = v.pipe(
	v.string(),
	v.minLength(8, 'Password must be at least 8 characters long.'),
	v.maxLength(64, 'Password must be at most 64 characters long.')
);

export const EmailVerificationCodeSchema = v.pipe(
	v.string(),
	v.nonEmpty('Please enter the code.'),
	v.length(6, 'The code must be 6 characters long.')
);
