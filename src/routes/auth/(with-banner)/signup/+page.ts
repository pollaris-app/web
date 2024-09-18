import type { PageLoad } from './$types';

export const load: PageLoad = async ({ data }) => {
	return {
		...data,
		page: {
			title: 'Sign Up',
			description: 'lorem ipsum dolor sit amet consectetur adipiscing elit',
			header: {
				question: 'Already have an account?',
				action: {
					label: 'Sign In',
					href: '/auth/signin'
				}
			}
		}
	};
};
