import * as v from 'valibot';
import { EmailVerificationCodeSchema } from './common';

export const emailVerificationSchema = v.object({
	token: v.string(),
	code: EmailVerificationCodeSchema
});

export const resendEmailVerificationSchema = v.object({
	userId: v.number()
});
