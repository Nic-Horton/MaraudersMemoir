import { getAll, getSlug } from './fetch_setup';

//Fetches characters based on search from characters page
const getSpells = async (query) => {
	const { search } = query;
	if (search) {
		query['searchFilter'] = `filter[name_cont_any]=${search}`;
	}
	return await getAll('spells', query);
};

const getSpellSlug = async (slug) => {
	return await getSlug('spells', slug);
};

export { getSpells, getSpellSlug };
