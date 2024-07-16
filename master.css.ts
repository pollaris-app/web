import { variables, type Config } from '@master/css';

export default {
	variables: {
		'font-family': {
			author: ['Author', ...variables['font-family'].sans]
		},

		// COLORS
		base: {
			'100': 'var(--base-100)',
			'200': 'var(--base-200)',
			'300': 'var(--base-300)'
		},
		primary: {
			'': 'var(--primary)',
			foreground: 'var(--primary-foreground)',
			hover: {
				'': 'var(--primary-hover)',
				foreground: 'var(--primary-hover-foreground)'
			}
		},
		secondary: {
			'': 'var(--secondary)',
			foreground: 'var(--secondary-foreground)',
			hover: {
				'': 'var(--secondary-hover)',
				foreground: 'var(--secondary-hover-foreground)'
			}
		},
		accent: {
			'': 'var(--accent)',
			foreground: 'var(--accent-foreground)',
			hover: {
				'': 'var(--accent-hover)',
				foreground: 'var(--accent-hover-foreground)'
			}
		},
		success: {
			'': 'var(--success)',
			foreground: 'var(--success-foreground)',
			hover: {
				'': 'var(--success-hover)',
				foreground: 'var(--success-hover-foreground)'
			}
		},
		warning: {
			'': 'var(--warning)',
			foreground: 'var(--warning-foreground)',
			hover: {
				'': 'var(--warning-hover)',
				foreground: 'var(--warning-hover-foreground)'
			}
		},
		error: {
			'': 'var(--error)',
			foreground: 'var(--error-foreground)',
			hover: {
				'': 'var(--error-hover)',
				foreground: 'var(--error-hover-foreground)'
			}
		},
		info: {
			'': 'var(--info)',
			foreground: 'var(--info-foreground)',
			hover: {
				'': 'var(--info-hover)',
				foreground: 'var(--info-hover-foreground)'
			}
		}
	}
} as Config;
