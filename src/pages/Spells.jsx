import { getSpells } from "../components/Data/fetch_spells";
import SpellList from "../components/ForPages/Spells/SpellList";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ScrollTop from "../components/ForPages/ScrollTop";

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
      <Paper
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100vh', 
          width: '10%', 
          backgroundImage:"url(/images/prints2.PNG)",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      />
    <Box width={'80%'} gap={2} sx={{mt:3,display:'flex',alignItems:'center',justifyContent:'stretch', flexDirection:'column'}}>
    <SpellList  fetchSpells={fetchSpells}/>
    </Box>
    <Paper
        sx={{
          position: 'fixed',
          top: 0,
          right: 0,
          height: '100vh', 
          width: '10%',
          backgroundImage:"url(/images/prints2.PNG)",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      />
      <ScrollTop>
        <Fab size="medium" aria-label="scroll-to-top" color="secondary">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  )
}

export default Spells