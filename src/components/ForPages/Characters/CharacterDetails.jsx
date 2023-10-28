import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getCharacterSlug } from '../../Data/fetch_characters';
import Details from './Details';
import { useParams } from 'react-router-dom';
import ScrollTop from '../ScrollTop';
import { Fab,Box } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CircularProgress from '@mui/material/CircularProgress';

const fetchCharacter = async ( { queryKey } ) => {
  const slug = queryKey[1]
  return await getCharacterSlug(slug);
};

function CharacterDetails() {
  const {slug} = useParams();

  const characterQuery = useQuery({
    queryKey: ['characters', slug],
    queryFn: fetchCharacter,
  })

  if (characterQuery.isLoading) 
  return(
  <Box sx={{ display: 'flex', mt:5 }}>
    <CircularProgress />
  </Box>
  )

  if (characterQuery.isError) return(<h1>Error</h1>)

  return (
    <>
    <Details attributes={characterQuery.data.data.attributes}/>
    <ScrollTop>
        <Fab size="medium" aria-label="scroll-to-top" color="secondary">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  )
}

export default CharacterDetails

