import React from 'react'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';

function SpellCard({spell}) {
  const { name, category, image, slug } = spell.attributes;
  let imgHolder = '';

  if(!image){
    imgHolder = "/images/Wand.png"
  }

  return (
    <Grid display={'flex'} item xs={12} sm={6} md={4} lg={3}>
      <CardActionArea component={Link} to={`/spells/${slug}`}>
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
             {category ? `Category: ${category}` : ''}
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  )
}

export default SpellCard