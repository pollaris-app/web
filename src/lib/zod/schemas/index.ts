import { ACCENTS } from '$lib/utils/constants/settings';
import { z } from 'zod';

const choiceValues = ['poll', 'quiz'] as const;

export const createNewDialogSchema = z.object({
	title: z.string().min(8).max(64),
	type: z.enum(choiceValues).default('poll')
});

const themeValues = ['system', 'light', 'dark'] as const;

const accentEnum = Object.fromEntries(
	ACCENTS.map((accent) => [accent.value.toUpperCase(), accent.value])
) as {
	[key: string]: (typeof ACCENTS)[number]['value'];
};

export const appearanceSchema = z.object({
	theme: z.enum(themeValues).default('system'),
	accent: z.array(z.nativeEnum(accentEnum)).default(['blue'])
});
