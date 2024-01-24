import {z} from 'zod';

export const forgotPasswordSchema = z.object({
  email: z.string().email('email inválido'),
});
export const defaultValuesForgotPasswordSchema: z.infer<typeof forgotPasswordSchema> = {
  email: ""
}
export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;