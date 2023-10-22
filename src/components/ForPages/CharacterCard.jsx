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
  const { name, house, image, gender,slug } = character.attributes;
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

  return (
    <Grid display={'flex'} item xs={12} sm={6} md={4} lg={3}>
      <CardActionArea component={Link} to={`/characters/${slug}`}>
        <Card sx={{ display: 'flex', flexDirection:'column', justifyContent:'space-between', height:'100%', borderRadius:'10px'}}>
            <CardMedia
            height={'300'}
            sx={{objectFit:'contain'}}
            component="img"
            image={image ? image : imgHolder}
            alt={image ? `Picture of ${name}` : ""}
            />
            <CardHeader  title={name}/>
            <CardContent >
            <Typography variant="subtitle1" color="text.secondary">
             {house ? `House: ${house}` : 'House: No affiliation'}
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  )
}

export default CharacterCard