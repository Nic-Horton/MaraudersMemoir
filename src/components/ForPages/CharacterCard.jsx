import React from 'react'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';

function CharacterCard({character}) {
  const { name, house } = character.attributes;

  return (
    <Grid item xs={12} sm={6} md={3}>
      <CardActionArea >
        <Card sx={{ display: 'flex', bgcolor: 'primary.light'}}>
          <CardContent sx={{ flex: 1 }}>
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