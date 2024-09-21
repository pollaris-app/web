import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, data }) => {
	return {
		...data,
		userId: params.userId,
		token: params.token
	};
};
