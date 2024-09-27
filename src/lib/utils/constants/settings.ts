import type { SelectOptions } from '$components/data-input/select/melt';

interface Choice {
	value: string;
	label: string;
	image: {
		src: string;
		alt: string;
	};
	description?: string;
}

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
] as Choice[];

export const ACCENTS = {
	default: [
		{
			value: 'red',
			label: 'Red',
			disabled: false,
			details: {
				indicator: {
					name: 'squircle',
					class: 'fg:red fill:red'
				}
			}
		},
		{
			value: 'blue',
			label: 'Blue',
			disabled: false,
			details: {
				indicator: {
					name: 'squircle',
					class: 'fg:blue'
				}
			}
		},
		{
			value: 'green',
			label: 'Green',
			disabled: false,
			details: {
				indicator: {
					name: 'squircle',
					class: 'fg:green'
				}
			}
		},
		{
			value: 'yellow',
			label: ' Yellow',
			disabled: false,
			details: {
				indicator: {
					name: 'squircle',
					class: 'fg:yellow'
				}
			}
		}
	]
} as SelectOptions;

export const FONT_SIZES = {
	default: [
		{
			value: 'small',
			label: 'Small',
			disabled: false
		},
		{
			value: 'medium',
			label: 'Medium',
			disabled: false
		},
		{
			value: 'large',
			label: 'Large',
			disabled: false
		}
	]
} as SelectOptions;
