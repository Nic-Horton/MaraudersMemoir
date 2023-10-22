import { getAll, getSlug } from './fetch_setup';

//Fetches characters based on search from characters page
const getCharacters = async (query) => {
	const { search } = query;
	if (search) {
		query['searchFilter'] = `filter[name_cont_any]=${search}`;
	}
	return await getAll('characters', query);
};

const getCharacterSlug = async (slug) => {
	return await getSlug('characters', slug);
};

export { getCharacters, getCharacterSlug };
