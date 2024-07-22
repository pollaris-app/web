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
	},
	styles: {
		heading: {
			dialog: 'font:24 font:semibold color:white'
		},

		dialog: {
			content:
				'abs z:20 top:50% left:50% transform:center translate(-50%,-50%) w:576 h:max-content bg:base-200 b:2|base-300|solid p:16 r:32 flex flex:col gap:32',
			overlay: 'abs z:10 top:0 left:0 bg:base-50/.5 bd:blur(4) w:100% h:100%',
			title: 'heading-dialog',
			description: 'font:18 color:neutral',
			close: 'cursor:pointer flex p:8 r:full bg:error/.1:hover fg:neutral color:error:hover ml:auto'
		}
	}
} as Config;
