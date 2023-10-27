import React from 'react'
import SearchBar from '../components/ForPages/SearchBar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function Home() {
  return (
    <>
    <Box sx={{
      mt:1,
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
    <Typography component='h1' sx={{
      textAlign:'center',
      fontSize:{xs:'2.5rem', sm:'3rem'},
      fontFamily:'Lugrasimo',
      color:'secondary.main',
      mt:{xs:10, sm:10, lg:8, xl:7}
    }}>
      Marauder's <br/> Memoir
    </Typography>
    <Box mb={{lg:18,md:20, xs:5}}>
    <SearchBar/>
    </Box>
    </Box>
    </>
  )
}

export default Home