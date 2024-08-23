import { z } from 'zod';

const choiceValues = ['poll', 'quiz'] as const;

export const createNewDialogSchema = z.object({
	title: z.string().min(8).max(64),
	type: z.enum(choiceValues).default('poll')
});

const themeValues = ['system', 'light', 'dark'] as const;

const accentValues = ['red', 'blue', 'yellow'] as const;

export const appearanceSchema = z.object({
	theme: z.enum(themeValues).default('system'),
	accent: z.array(z.enum(accentValues)).default(['blue'])
});
