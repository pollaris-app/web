import { z } from 'zod';

export const signUpEmailSchema = z.object({
	email: z.string().email()
});

export const signUpPasswordSchema = z
	.object({
		password: z.string().min(8).max(64),
		confirmPassword: z.string().min(8).max(64),
		agreement: z.literal<boolean>(true, {
			errorMap: () => ({ message: 'You must agree to the terms and conditions.' })
		})
	})
	.superRefine(({ password, confirmPassword }, ctx) => {
		if (password !== confirmPassword) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: 'Passwords do not match',
				path: ['confirmPassword']
			});
		}
	});
