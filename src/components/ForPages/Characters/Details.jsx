import React from 'react'
import DataTable from '../DataTable';
import AccordionJSX from '../Accordion';
import { Box, Grid, CardMedia, Button } from '@mui/material';

function Details({attributes}){

  const {
    name, image, alias_names, blood_status, born, died, 
    house, patronus, animagus, boggart, wands,
    eye_color, hair_color, gender, species,
    nationality, family_members, jobs, romances, wiki,
  } = attributes;

  const tableInfo = [
      {
        name: "Name",
        value: name,
      },
      {
        name: "Blood status",
        value: blood_status,
      },
      {
        name: "House",
        value: house,
      },
      {
        name: "Born",
        value: born,
      },
      {
        name: "Died",
        value: died,
      },
      {
        name: "Species",
        value: species,
      },
      {
        name: "Animagus",
        value: animagus,
      },
      {
        name: "Gender",
        value: gender,
      },
      {
        name: "Hair color",
        value: hair_color,
      },
      {
        name: "Eye color",
        value: eye_color,
      },
      {
        name: "Nationality",
        value: nationality,
      },
      {
        name: "Patronus",
        value: patronus,
      },
      {
        name: "Boggart",
        value: boggart,
      },
    ];

    const accordionInfo = [
      {
        name: "Alias Names",
        value: alias_names,
      },
      {
        name: "Wands",
        value: wands,
      },
      {
        name: "Jobs",
        value: jobs,
      },
      {
        name: "Romances",
        value: romances,
      },
      {
        name: "Family Members",
        value: family_members,
      },
    ];

    let imgHolder = '';

    if(!gender){
      imgHolder = "/images/Wizard.png"
    } else {
      if(gender === 'Male'){
        imgHolder="/images/WizardM.png"
      } else {
        imgHolder = "/images/WizardF.png"
      }
    }
  
  return(
    <>
        <CardMedia
          component='img'
          image={image ? image : imgHolder}
          alt={name}
          height={'300'}
          sx={{objectFit:'contain', mt:3}}
        />
        <Grid container spacing={3} display='flex' padding={5} justifyContent='space-evenly'>
          <Grid item xs={12} md={4}>
            <DataTable tableInfo={tableInfo}/>
          </Grid>
          <Grid item xs={12} md={4}>
            <AccordionJSX accordionInfo={accordionInfo}/>
          </Grid>
        </Grid>
        <Button component={'a'} href={wiki} variant='contained'>Wiki</Button>
    </>
  )
}

export default Details