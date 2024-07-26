import { z } from 'zod';

const choiceValues = ['poll', 'quiz'] as const;

export const createNewDialogSchema = z.object({
	title: z.string().min(8).max(64),
	type: z.enum(choiceValues).default('poll')
});
