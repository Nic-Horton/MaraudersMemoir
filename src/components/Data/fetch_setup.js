const apiUrl = 'https://api.potterdb.com';

const fetchCall = async (url) => {
	return fetch(url)
		.then((res) => res.json())
		.catch((error) => {
			return { error };
		});
};

//Calls fetch with specified specifications for dynamic use.
export const getAll = async (type, query) => {
	const { page, searchFilter } = query;
	const pageNumber = `page[number]=${page || 1}`;
	const filter = searchFilter ? `&${searchFilter}` : '';
	const url = `${apiUrl}/v1/${type}?${pageNumber}&page[size]=20${filter}`;
	return fetchCall(url);
};
