import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getCharacterSlug } from '../Data/fetch_characters';
import { useParams } from 'react-router-dom';

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
    <div>CharacterDetails</div>
    <div>{characterQuery.data.data.attributes.name}</div>
    </>
  )
}

export default CharacterDetails

