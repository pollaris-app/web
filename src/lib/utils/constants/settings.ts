import { type IconProps } from '$components/icon';

interface Accent {
	value: string;
	label: string;
	indicator?: IconProps;
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

export const ACCENTS = [
	{
		value: 'red',
		label: 'Red',
		indicator: {
			name: 'squircle',
			class: 'fg:red fill:red'
		}
	},
	{
		value: 'blue',
		label: 'Blue',
		indicator: {
			name: 'squircle',
			class: 'fg:blue'
		}
	}
] as Accent[];

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
