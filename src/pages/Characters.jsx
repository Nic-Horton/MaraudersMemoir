import { getCharacters } from "../components/Data/fetch_characters";
import CharacterList from "../components/ForPages/Characters/CharacterList";
import { Box, Paper } from "@mui/material";

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
    <Paper
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100vh', 
          width: '10%',
          backgroundImage:"url(/images/prints1.PNG)",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      />
    <Box width={'80%'} gap={2} sx={{mt:3,display:'flex',alignItems:'center',justifyContent:'stretch', flexDirection:'column'}}>
    <CharacterList  fetchCharacters={fetchCharacters}/>
    </Box>
    <Paper
        sx={{
          position: 'fixed',
          top: 0,
          right: 0,
          height: '100vh', 
          width: '10%',
          backgroundImage:"url(/images/prints1.PNG)",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      />
    </>
  )
}

export default Characters