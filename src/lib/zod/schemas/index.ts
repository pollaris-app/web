import { ACCENTS, type Accent } from '$lib/utils/constants/settings';
import { z } from 'zod';

const choiceValues = ['poll', 'quiz'] as const;

export const createNewDialogSchema = z.object({
	title: z.string().min(8).max(64),
	type: z.enum(choiceValues).default('poll')
});

const themeValues = ['system', 'light', 'dark'] as const;

export const appearanceSchema = z.object({
	theme: z.enum(themeValues).default('system'),
	accents: z
		.array(z.enum(Object.keys(ACCENTS) as [Accent, ...Accent[]]))
		.nonempty('You must select an accent.')
		.default(['red'])
});
