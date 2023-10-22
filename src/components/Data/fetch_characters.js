import { getAll } from './fetch_setup';

//Fetches characters based on search from characters page
const getCharacters = async (query) => {
	const { search } = query;
	if (search) {
		query['searchFilter'] = `filter[name_cont_any]=${search}`;
	}
	return await getAll('characters', query);
};

export { getCharacters };
