export const load = async ({ data, params }) => {
	return {
		...data,
		userId: params.userId,
		token: params.token
	};
};
