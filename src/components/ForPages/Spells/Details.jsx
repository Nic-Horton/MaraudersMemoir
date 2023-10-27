import React from 'react'
import DataTable from '../DataTable';
import { Grid, CardMedia, Button, Box } from '@mui/material';

function Details({attributes}){

  const {
    name, image, light, effect, hand, incantation, wiki
  } = attributes;

  const tableInfo = [
      {
        name: "Name",
        value: name,
      },
      {
        name: "Incantation",
        value: incantation,
      },
      {
        name: "Effect",
        value: effect,
      },
      {
        name: "Light",
        value: light,
      },
      {
        name: "Hand",
        value: hand,
      },
    ];

    let imgHolder = '';

    if(!image){
      imgHolder = "/images/Wand.png"
    } 
  
  return(
    <>  
        <Box sx={{mt:3, mb:3, }}>
        <CardMedia
          component='img'
          image={image ? image : imgHolder}
          alt={name}
          height={'225'}
          sx={{objectFit:'contain',border:'.5rem double', borderColor:light ? light:'primary'}}
        />
        </Box>
        <Grid container spacing={3} display='flex' pl={5} pr={5} mb={2} justifyContent='space-evenly'>
          <Grid item xs={12} md={4}>
            <DataTable tableInfo={tableInfo}/>
          </Grid>
        </Grid>
        <br />
        <Button component={'a'} href={wiki} variant='contained'>Wiki</Button>
    </>
  )
}

export default Details