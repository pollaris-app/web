import * as v from 'valibot';
import { EmailVerificationCodeSchema } from './common';

export const EmailVerificationSchema = v.object({
	token: v.string(),
	code: EmailVerificationCodeSchema
});

export const ResendEmailVerificationSchema = v.object({
	userId: v.number()
});
