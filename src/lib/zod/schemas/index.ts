import { ACCENTS, FONT_SIZES, type Accent, type FontSize } from '$lib/utils/constants/settings';
import { z } from 'zod';

const choiceValues = ['poll', 'quiz'] as const;

export const createNewDialogSchema = z.object({
	title: z.string().min(8).max(64),
	type: z.enum(choiceValues).default('poll')
});

const themeValues = ['system', 'light', 'dark'] as const;
const tableViewValues = ['default', 'compact'] as const;

export const appearanceSchema = z.object({
	theme: z.enum(themeValues).default('system'),
	accents: z
		.array(z.enum(Object.keys(ACCENTS) as [Accent, ...Accent[]]))
		.nonempty('You must select an accent.')
		.default(['red']),
	tableView: z.enum(tableViewValues).default('default'),
	fontSize: z
		.array(z.enum(Object.keys(FONT_SIZES) as [FontSize, ...FontSize[]]))
		.nonempty('You must select a font size.')
		.default(['medium'])
});
