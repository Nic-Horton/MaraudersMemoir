import { getSpells } from "../components/Data/fetch_spells";
import SpellList from "../components/ForPages/Spells/SpellList";
import { Box } from "@mui/material";

//fetch call that will be passed to create the character list. Takes into account the page and searched name.
const fetchSpells = async ( { pageParam = 1, queryKey } ) => {
  const search = queryKey[1]
  return await getSpells({
    page: pageParam,
    search: search,
  });
};


function Spells() {
  return (
    <>
    <Box gap={2} sx={{mt:3,display:'flex',alignItems:'center',justifyContent:'stretch', flexDirection:'column'}}>
    <SpellList  fetchSpells={fetchSpells}/>
    </Box>
    </>
  )
}

export default Spells