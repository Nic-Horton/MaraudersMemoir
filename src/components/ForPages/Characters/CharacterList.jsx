import React from 'react'
import { useState, useEffect } from "react";
import { TextField,Grid,Button, Typography } from "@mui/material";
import { useInfiniteQuery } from '@tanstack/react-query';
import CharacterCard from './CharacterCard';
import { useLocation } from 'react-router-dom';

function CharacterList({fetchCharacters}) {
  //gets query parameter in the URL
  const queryParams = new URLSearchParams(useLocation().search);
  const searchQuery = queryParams.get('q');

  const [search,setSearch] = useState('');

  //Sets search to query parameter that is obtained if user searches from home page
  useEffect(() => {
    setSearch(searchQuery);
  }, [searchQuery]);

  //React query hook useInfinite to scroll through pages when button is clicked
  const {
    data,
    status,
    error,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage
  } = useInfiniteQuery({
    queryKey: ["characters", search], 
    queryFn: fetchCharacters,
    getNextPageParam: (lastPage,pages) => {
      //targets api pagination list and check if pages can still be rendered
      if (pages?.length < (lastPage?.meta?.pagination?.last || 0)) {
        return pages.length + 1;
      }
      return undefined;
    }
  })

  //sets search to be what is typed as it is typed
  const handleChange = (e) =>{
    setSearch(e.target.value)
  }  

  return (
    <>
    <TextField id="outlined-basic" label="Search" variant="outlined" 
    value={search?search:''} onChange={handleChange}/>
    {status === 'error' ? (<Typography variant='h2'>Error: {error.message}</Typography>
    ) : (
    <>
    <Grid container spacing={3} padding={3} alignItems="stretch">
    {data?.pages?.map((page)=>page?.data?.map((character) => {
      return (<CharacterCard key={character.id} character={character} />)
    })
    )
    }
    </Grid>
    {hasNextPage && (
      <Button variant='contained' onClick={()=>fetchNextPage()}>
        {isFetchingNextPage ? "Loading..." : "Load More"}
      </Button>
    )}
    </>
    )
    }
    </>
  )

}

export default CharacterList