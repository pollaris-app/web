import { type IconProps } from '$components/icon';

export const ACCENTS = {
	blue: 'Blue',
	red: 'Red',
	green: 'Green',
	yellow: 'Yellow'
} as const;

export type Accent = keyof typeof ACCENTS;

export type AccentDetails = {
	indicator: IconProps;
};

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
	green: {
		indicator: {
			name: 'squircle',
			class: 'fg:green'
		}
	},
	yellow: {
		indicator: {
			name: 'squircle',
			class: 'fg:yellow'
		}
	}
} as Record<Accent, AccentDetails>;

export const FONT_SIZES = {
	small: 'Small',
	medium: 'Medium',
	large: 'Large'
} as const;

export type FontSize = keyof typeof FONT_SIZES;

export type FontSizeDetails = {};

export const FONT_SIZES_DETAILS = {} as Record<FontSize, FontSizeDetails>;

interface Theme {
	value: string;
	label: string;
	image: {
		src: string;
		alt: string;
	};
	description: string;
}

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

export const TABLE_VIEWS = [
	{
		value: 'default',
		label: 'Default',
		description: 'The default view for the table.',
		image: {
			src: 'https://i.imgur.com/MdPOmFe.png',
			alt: 'default-view'
		}
	},
	{
		value: 'compact',
		label: 'Compact',
		description: 'Fit more data on the screen.',
		image: {
			src: 'https://i.imgur.com/MdPOmFe.png',
			alt: 'compact-view'
		}
	}
];
