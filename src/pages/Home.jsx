import React from 'react'
import SearchBar from '../components/ForPages/SearchBar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function Home() {
  return (
    <>
    <Box sx={{
        
        height:'75vh',
        width:'100%',
        backgroundImage:"url(/images/homeBG.PNG)",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between'
    }}>
    <Typography component='h1' variant={'h3'} sx={{
      textAlign:'center',
      fontFamily:'Lugrasimo',
      color:'#740001',
      mt:{xs:15, xl:7}
    }}>
      Marauder's <br/> Memoir
    </Typography>
    <Box mb={{md:18, xs:10}}>
    <SearchBar/>
    </Box>
    </Box>
    </>
  )
}

export default Home