import { variables, type Config } from '@master/css';

export default {
	variables: {
		'font-family': {
			author: ['Author', ...variables['font-family'].sans]
		},

		// COLORS
		base: {
			'50': 'hsl(var(--base-50))',
			'100': 'hsl(var(--base-100))',
			'200': 'hsl(var(--base-200))',
			'300': 'hsl(var(--base-300))'
		},
		primary: {
			'': 'hsl(var(--primary)',
			foreground: 'hsl(var(--primary-foreground))',
			hover: {
				'': 'hsl(var(--primary-hover))',
				foreground: 'hsl(var(--primary-hover-foreground))'
			}
		},
		secondary: {
			'': 'hsl(var(--secondary))',
			foreground: 'hsl(var(--secondary-foreground))',
			hover: {
				'': 'hsl(var(--secondary-hover))',
				foreground: 'hsl(var(--secondary-hover-foreground))'
			}
		},
		accent: {
			'': 'hsl(var(--accent))',
			foreground: 'hsl(var(--accent-foreground))',
			hover: {
				'': 'hsl(var(--accent-hover))',
				foreground: 'hsl(var(--accent-hover-foreground))'
			}
		},
		success: {
			'': 'hsl(var(--success))',
			foreground: 'hsl(var(--success-foreground))',
			hover: {
				'': 'hsl(var(--success-hover))',
				foreground: 'hsl(var(--success-hover-foreground))'
			}
		},
		warning: {
			'': 'hsl(var(--warning))',
			foreground: 'hsl(var(--warning-foreground))',
			hover: {
				'': 'hsl(var(--warning-hover))',
				foreground: 'hsl(var(--warning-hover-foreground))'
			}
		},
		error: {
			'': 'hsl(var(--error))',
			foreground: 'hsl(var(--error-foreground))',
			hover: {
				'': 'hsl(var(--error-hover))',
				foreground: 'hsl(var(--error-hover-foreground))'
			}
		},
		info: {
			'': 'hsl(var(--info))',
			foreground: 'hsl(var(--info-foreground))',
			hover: {
				'': 'hsl(var(--info-hover))',
				foreground: 'hsl(var(--info-hover-foreground))'
			}
		}
	}
} as Config;
