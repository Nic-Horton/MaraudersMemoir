import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getSpellSlug } from '../../Data/fetch_spells';
import Details from './Details';
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


const fetchSpell = async ( { queryKey } ) => {
  const slug = queryKey[1]
  return await getSpellSlug(slug);
};

function SpellDetails() {
  const {slug} = useParams();

  const spellQuery = useQuery({
    queryKey: ['spells', slug],
    queryFn: fetchSpell,
  })

  if (spellQuery.isLoading) return(
  <Box sx={{ display: 'flex', mt:5 }}>
    <CircularProgress />
  </Box>
  )
  if (spellQuery.isError) return(<h1>Error</h1>)

  return (
    <>
    <Details attributes={spellQuery.data.data.attributes}/>
    </>
  )
}

export default SpellDetails