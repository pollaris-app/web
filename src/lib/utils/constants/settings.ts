import { type IconProps } from '$components/icon';

interface Theme {
	value: string;
	label: string;
	image: {
		src: string;
		alt: string;
	};
	description: string;
}

export const ACCENTS = {
	red: 'Red',
	blue: 'Blue',
	yellow: 'Yellow'
} as const;

export type Accent = keyof typeof ACCENTS;

export const ACCENTS_DATA = Object.entries(ACCENTS).map(([value, label]) => ({
	value: value as Accent,
	label: label as (typeof ACCENTS)[Accent]
}));

export type AccentData = typeof ACCENTS_DATA;

export const ACCENTS_DETAILS = {
	red: {
		indicator: {
			name: 'squircle',
			class: 'fg:red fill:red'
		}
	},
	blue: {
		indicator: {
			name: 'squircle',
			class: 'fg:blue'
		}
	},
	yellow: {
		indicator: {
			name: 'squircle',
			class: 'fg:yellow'
		}
	}
} as Record<Accent, AccentDetails>;

export type AccentDetails = {
	indicator: IconProps;
};

export const THEMES = [
	{
		value: 'system',
		label: 'System',
		image: {
			src: 'https://i.imgur.com/MdPOmFe.png',
			alt: 'system-theme'
		},
		description: 'Make your system automatically control the theme.'
	},
	{
		value: 'light',
		label: 'Light',
		image: {
			src: 'https://i.imgur.com/MdPOmFe.png',
			alt: 'light-theme'
		},
		description: 'Best to use during daylight.'
	},
	{
		value: 'dark',
		label: 'Dark',
		image: {
			src: 'https://i.imgur.com/MdPOmFe.png',
			alt: 'dark-theme'
		},
		description: 'Less straining to your eyes.'
	}
] as Theme[];
