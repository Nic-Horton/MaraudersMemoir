import { getCharacters } from "../components/Data/fetch_characters";
import CharacterList from "../components/ForPages/Characters/CharacterList";
import { Box } from "@mui/material";

//fetch call that will be passed to create the character list. Takes into account the page and searched name.
const fetchCharacters = async ( { pageParam = 1, queryKey } ) => {
  const search = queryKey[1]
  return await getCharacters({
    page: pageParam,
    search: search,
  });
};

function Characters() {
  
  return (
    <>
    <Box width={'80%'} gap={2} sx={{mt:3,display:'flex',alignItems:'center',justifyContent:'stretch', flexDirection:'column'}}>
    <CharacterList  fetchCharacters={fetchCharacters}/>
    </Box>
    </>
  )
}

export default Characters