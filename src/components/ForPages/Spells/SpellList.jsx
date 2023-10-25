import React from 'react'
import { useState } from "react";
import { TextField,Grid,Button, Typography } from "@mui/material";
import { useInfiniteQuery } from '@tanstack/react-query';
import SpellCard from './SpellCard';

function SpellList({fetchSpells}) {
  const [search,setSearch] = useState('');

  //React query hook useInfinite to scroll through pages when button is clicked
  const {
    data,
    status,
    error,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage
  } = useInfiniteQuery({
    queryKey: ["spells", search], 
    queryFn: fetchSpells,
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
    <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={handleChange}/>
    {status === 'error' ? (<Typography variant='h2'>Error: {error.message}</Typography>
    ) : (
    <>
    <Grid container spacing={3} padding={3} alignItems="stretch">
    {data?.pages?.map((page)=>page?.data?.map((spell) => {
      return (<SpellCard key={spell.id} spell={spell} />)
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

export default SpellList