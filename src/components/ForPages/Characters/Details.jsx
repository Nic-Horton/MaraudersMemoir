import React from 'react'
import DataTable from '../DataTable';
import AccordionJSX from '../Accordion';
import { Grid, CardMedia, Button, Box } from '@mui/material';

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

    let houseColor = '';

    switch(house){
      case 'Gryffindor':
        houseColor = '#ae0001'
        break;
        case 'Ravenclaw':
          houseColor = '#222f5b'
          break;
        case 'Slytherin':
          houseColor = '#2a623d'
          break;
        case 'Hufflepuff':
          houseColor = '#ecb939'
          break
      default:
        houseColor = '#bebebe'
    }
  
  return(
    <>  
        <Box sx={{mt:3, mb:3}}>
        <CardMedia
          id="back-to-top-anchor"
          component='img'
          image={image ? image : imgHolder}
          alt={name}
          height={'250'}
          sx={{objectFit:'contain', borderRadius:'10px',border:`.7rem ridge ${houseColor}`}}
        />
        </Box>
        <Grid container spacing={5} display='flex' pl={5} pr={5} justifyContent='center'>
          <Grid item xs={12} md={4}>
            <DataTable tableInfo={tableInfo}/>
          </Grid>
          <Grid item xs={12} md={4}>
            <AccordionJSX accordionInfo={accordionInfo}/>
          </Grid>
        </Grid>
        <br />
        <Button component={'a'} href={wiki} variant='contained'>Wiki</Button>
    </>
  )
}

export default Details