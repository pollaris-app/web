import { ACCENTS, FONT_SIZES } from '$lib/utils/constants/settings';
import * as v from 'valibot';

const choiceValues = ['poll', 'quiz'] as const;

const TitleSchema = v.pipe(v.string('You must enter a title.'), v.minLength(8), v.maxLength(64));

export const CreateNewDialogSchema = v.object({
	title: TitleSchema,
	type: v.optional(v.picklist(choiceValues), 'poll')
});

// REWRITE THIS SHIT
const themeValues = ['system', 'light', 'dark'] as const;
const tableViewValues = ['default', 'compact'] as const;

const allAccentValues = Object.values(ACCENTS)
	.flat()
	.map((accent) => accent.value);

const allFontSizeValues = Object.values(FONT_SIZES)
	.flat()
	.map((fontSize) => fontSize.value);

const AccentsSchema = v.pipe(
	v.array(v.picklist(allAccentValues)),
	v.length(1, 'You must select an accent.')
);

const FontSizeSchema = v.pipe(
	v.array(v.picklist(allFontSizeValues)),
	v.length(1, 'You must select a font size.')
);

export const AppearanceSchema = v.object({
	accents: AccentsSchema,
	fontSize: FontSizeSchema,
	theme: v.picklist(themeValues),
	tableView: v.picklist(tableViewValues)
});
