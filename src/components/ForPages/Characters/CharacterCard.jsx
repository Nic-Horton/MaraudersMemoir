import React from 'react'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';

function CharacterCard({character}) {
  const { name, species, image, gender,slug, house } = character.attributes;
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

  return (
    <Grid display={'flex'} item xs={12} sm={6} md={4} lg={3}>
      <CardActionArea component={Link} to={`/characters/${slug}`}>
        <Card sx={{ display: 'flex', flexDirection:'column', justifyContent:'space-between', 
          height:'100%', borderRadius:'10px', border:`.25rem solid ${houseColor}`}}>
            <CardMedia
            height={'280'}
            sx={{objectFit:'contain', borderBottom:`.25rem solid ${houseColor}`}}
            component="img"
            image={image ? image : imgHolder}
            alt={image ? `Picture of ${name}` : ""}
            />
            <CardHeader  title={name}/>
            <CardContent >
            <Typography variant="subtitle1" color="text.secondary">
             {species ? `Species: ${species}` : ''}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
             {gender ? `Gender: ${gender}` : ''}
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  )
}

export default CharacterCard