import { variables, type Config } from '@master/css';

export default {
	variables: {
		'font-family': {
			author: ['Author', ...variables['font-family'].sans]
		},
		styles: {
			overlay: 'abs z:10 top:0 left:0 bg:base-50/.5 bd:blur(4) w:100% h:100%'
		},

		// COLORS
		base: {
			'50': 'hsl(var(--base-50))',
			'100': 'hsl(var(--base-100))',
			'200': 'hsl(var(--base-200))',
			'300': 'hsl(var(--base-300))',
			'400': 'hsl(var(--base-400))'
		},
		primary: {
			'': 'hsl(var(--primary))',
			foreground: 'hsl(var(--primary-foreground))'
		},
		secondary: {
			'': 'hsl(var(--secondary))',
			foreground: 'hsl(var(--secondary-foreground))'
		},
		accent: {
			'': 'hsl(var(--accent))',
			foreground: 'hsl(var(--accent-foreground))'
		},
		success: {
			'': 'hsl(var(--success))',
			foreground: 'hsl(var(--success-foreground))'
		},
		warning: {
			'': 'hsl(var(--warning))',
			foreground: 'hsl(var(--warning-foreground))'
		},
		error: {
			'': 'hsl(var(--error))',
			foreground: 'hsl(var(--error-foreground))'
		},
		info: {
			'': 'hsl(var(--info))',
			foreground: 'hsl(var(--info-foreground))'
		}
	}
} as Config;
