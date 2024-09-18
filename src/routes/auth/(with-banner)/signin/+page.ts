import type { PageLoad } from './$types';

export const load: PageLoad = async ({ data }) => {
	return {
		...data,
		page: {
			title: 'Sign In',
			description: 'lorem ipsum dolor sit amet consectetur adipiscing elit',
			header: {
				question: "Don't have an account?",
				action: {
					label: 'Sign Up',
					href: '/auth/signup'
				}
			}
		}
	};
};
