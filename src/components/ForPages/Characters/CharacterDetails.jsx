import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getCharacterSlug } from '../../Data/fetch_characters';
import Details from './Details';
import { useParams } from 'react-router-dom';
import ScrollTop from '../ScrollTop';
import { Fab } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

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

  if (characterQuery.isLoading) return(<h1>Loading...</h1>)
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

