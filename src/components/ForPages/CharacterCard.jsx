import React from 'react'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

function CharacterCard({character}) {
  const { name, house, image, gender } = character.attributes;
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
      <CardActionArea >
        <Card sx={{ display: 'flex', flexDirection:'column', height:'100%'}}>
          <CardContent >
            <CardMedia
            component="img"
            image={image ? image : imgHolder}
            alt={image ? `Picture of ${name}` : ""}
            />
            <Typography component="h2" variant="h5">
              Name: {name}
            </Typography>
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