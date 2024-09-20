import * as v from 'valibot'
import { EmailVerificationCodeSchema } from './common'

export const emailVerificationSchema = v.object({
  code: EmailVerificationCodeSchema
})